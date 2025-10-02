"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface InteractiveGridProps {
  className?: string;
  images?: string[]; // Array of image URLs
}

export default function InteractiveGrid({ className, images = [] }: InteractiveGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const meshesRef = useRef<THREE.Mesh[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Get container dimensions
    const containerRect = container.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerWidth / containerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(containerWidth, containerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create grid of planes - calculate to fill entire container
    const aspectRatio = containerWidth / containerHeight;
    
    // Calculate the visible area at the camera distance
    const cameraDistance = 5; // Camera z position
    const fov = 75; // Field of view
    const vFOV = (fov * Math.PI) / 180; // Convert to radians
    const visibleHeight = 2 * Math.tan(vFOV / 2) * cameraDistance;
    const visibleWidth = visibleHeight * aspectRatio;
    
    // Store for use in animation loop
    const gridBounds = { visibleWidth, visibleHeight };
    
    // Calculate grid size to ensure complete coverage (further optimized)
    const planeSize = 1.5; // Slightly smaller plane size for more spacing
    const gridSizeX = Math.ceil(visibleWidth / planeSize) + 2; // Minimal extra columns
    const gridSizeY = Math.ceil(visibleHeight / planeSize) + 2; // Minimal extra rows
    
    // Add moderate spacing between images
    const spacing = planeSize * 1.2; // 20% more space between planes
    const meshes: THREE.Mesh[] = [];
    const loader = new THREE.TextureLoader();
    const materials: THREE.MeshBasicMaterial[] = [];
    
    // Cache loaded textures to avoid reloading same images
    const textureCache = new Map<string, THREE.Texture>();
    
    // Performance optimizations for many images
    // const maxTextureSize = 256; // Optimized for background use with many images
    // const textureFormat = THREE.RGBFormat; // Use RGB instead of RGBA when possible
    
    // Limit concurrent texture loading for better performance
    // const maxConcurrentLoads = 4;

    // Create shared geometry for better performance (instancing)
    const sharedGeometry = new THREE.PlaneGeometry(planeSize, planeSize);
    
    for (let i = 0; i < gridSizeX; i++) {
      for (let j = 0; j < gridSizeY; j++) {
        const planeIndex = i * gridSizeY + j;
        
        // Create material
        let material: THREE.MeshBasicMaterial;
        
        if (images.length > 0) {
          // Use image texture with caching and cycling through available images
          const imageUrl = images[planeIndex % images.length];
          
          // Check if texture is already cached
          if (textureCache.has(imageUrl)) {
            const cachedTexture = textureCache.get(imageUrl)!;
            material = new THREE.MeshBasicMaterial({
              map: cachedTexture,
              transparent: true,
              opacity: 0.4, // Reduced opacity for better text visibility
            });
          } else {
            // Load and cache new texture with optimizations
            const texture = loader.load(
              imageUrl,
              // onLoad
              (loadedTexture) => {
                // Performance optimizations
                loadedTexture.generateMipmaps = false; // Disable mipmaps for better performance
                loadedTexture.minFilter = THREE.LinearFilter;
                loadedTexture.magFilter = THREE.LinearFilter;
                loadedTexture.wrapS = THREE.ClampToEdgeWrapping;
                loadedTexture.wrapT = THREE.ClampToEdgeWrapping;
                
                // Cache the texture for reuse
                textureCache.set(imageUrl, loadedTexture);
                material.needsUpdate = true;
              },
              // onProgress
              undefined,
              // onError
              () => {
                console.warn(`Failed to load image: ${imageUrl}`);
                // Fallback to color
                material.color = new THREE.Color().setHSL(
                  (i + j) * 0.05, 
                  0.4, 
                  0.15 + Math.random() * 0.25
                );
              }
            );
            
            material = new THREE.MeshBasicMaterial({
              map: texture,
              transparent: true,
              opacity: 0.4, // Reduced opacity for better text visibility
            });
          }
        } else {
          // Fallback to colored planes if no images provided
          material = new THREE.MeshBasicMaterial({
            color: new THREE.Color().setHSL(
              (i + j) * 0.05, 
              0.4, 
              0.15 + Math.random() * 0.25
            ),
            transparent: true,
            opacity: 0.4, // Consistent opacity with images
          });
        }

        const mesh = new THREE.Mesh(sharedGeometry, material);
        
        // Position in grid to fill the screen completely
        mesh.position.x = (i - (gridSizeX - 1) / 2) * spacing;
        mesh.position.y = (j - (gridSizeY - 1) / 2) * spacing;
        mesh.position.z = 0;

        // Store original position and material
        mesh.userData = {
          originalX: mesh.position.x,
          originalY: mesh.position.y,
          originalZ: mesh.position.z,
          originalOpacity: material.opacity,
        };

        scene.add(mesh);
        meshes.push(mesh);
        materials.push(material);
      }
    }

    meshesRef.current = meshes;

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / containerWidth) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / containerHeight) * 2 + 1;
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Animate meshes based on mouse position
      meshes.forEach((mesh, index) => {
        // Convert mouse coordinates to world space that matches our grid
        const mouseWorldX = mouseRef.current.x * (gridBounds.visibleWidth / 2);
        const mouseWorldY = mouseRef.current.y * (gridBounds.visibleHeight / 2);
        
        const distance = Math.sqrt(
          Math.pow(mesh.position.x - mouseWorldX, 2) +
          Math.pow(mesh.position.y - mouseWorldY, 2)
        );

        // Enhanced floating effect (more noticeable)
        const wave = Math.sin(Date.now() * 0.001 + index * 0.1) * 0.08;
        mesh.position.z = mesh.userData.originalZ + wave;

        // Balanced mouse interaction
        if (distance < 1.8) {
          const force = (1.8 - distance) * 0.15; // Moderate force
          mesh.position.z += force;
          
          // Noticeable opacity change on hover
          const material = mesh.material as THREE.MeshBasicMaterial;
          material.opacity = Math.min(1, mesh.userData.originalOpacity + force * 0.25);
        } else {
          // Return to original position
          mesh.position.z = THREE.MathUtils.lerp(
            mesh.position.z,
            mesh.userData.originalZ,
            0.06
          );
          
          const material = mesh.material as THREE.MeshBasicMaterial;
          material.opacity = THREE.MathUtils.lerp(
            material.opacity, 
            mesh.userData.originalOpacity, 
            0.06
          );
        }

        // Balanced rotation (noticeable but not distracting)
        mesh.rotation.x = Math.sin(Date.now() * 0.0006 + index * 0.04) * 0.04;
        mesh.rotation.y = Math.cos(Date.now() * 0.0006 + index * 0.04) * 0.04;
      });

      renderer.render(scene, camera);
    };

    // Resize handler
    const handleResize = () => {
      if (!camera || !renderer) return;
      
      const newRect = container.getBoundingClientRect();
      const newWidth = newRect.width;
      const newHeight = newRect.height;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      
      // Dispose of Three.js objects
      meshes.forEach(mesh => {
        (mesh.material as THREE.Material).dispose();
      });
      
      // Dispose shared geometry once
      sharedGeometry.dispose();
      
      // Dispose cached textures
      textureCache.forEach(texture => texture.dispose());
      textureCache.clear();
      
      renderer.dispose();
    };
  }, [images]);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 ${className}`}
      style={{ 
        pointerEvents: 'none',
        zIndex: 1
      }}
    />
  );
}
