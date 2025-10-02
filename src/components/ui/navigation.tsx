"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, LogIn, UserPlus } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeSwitcher from "@/components/ui/theme-switcher";
import { NavSection, NavContainer, NavContent } from "@/components/ui/nav-section";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface NavigationItem {
  name: string;
  href: string;
  description: string;
  category?: string;
}

interface NavigationSection {
  title: string;
  items: NavigationItem[];
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems: NavigationSection[] = [
    {
      title: "Solutions",
      items: [
        { name: "For Creators", href: "/solutions/creators", description: "Tools and protection for individual creators" },
        { name: "For Organizations", href: "/solutions/organizations", description: "Enterprise solutions for content management" },
        { name: "For Developers", href: "/solutions/developers", description: "APIs and SDKs for integration" },
        { name: "Governance Platform", href: "/solutions/governance", description: "Community-driven platform governance" },
        { name: "Legal & Insurance", href: "/solutions/legal", description: "Legal protection and insurance coverage" },
      ]
    },
    {
      title: "Technology",
      items: [
        { name: "Dynamic Metadata", href: "/technology/metadata", description: "Real-time content identification and tracking" },
        { name: "Content ID Layer", href: "/technology/content-id", description: "Advanced content fingerprinting technology" },
        { name: "Smart Licensing", href: "/technology/licensing", description: "Automated licensing and rights management" },
        { name: "NIL Protection", href: "/technology/nil", description: "Name, Image, and Likeness protection" },
        { name: "Platform APIs", href: "/technology/apis", description: "Developer tools and integration APIs" },
      ]
    },
    {
      title: "Resources",
      items: [
        { name: "Whitepapers", href: "/resources/whitepapers", description: "In-depth research and analysis" },
        { name: "Documentation", href: "/resources/documentation", description: "Technical guides and tutorials" },
        { name: "Newsroom", href: "/resources/newsroom", description: "Latest news and announcements" },
        { name: "Help Center", href: "/resources/help", description: "Support and frequently asked questions" },
      ]
    },
    {
      title: "Use Cases",
      items: [
        // Arts & Culture
        { name: "Art", href: "/use-cases/art", description: "Digital rights for artists and art creators", category: "Arts & Culture" },
        { name: "Architecture", href: "/use-cases/architecture", description: "Protecting architectural designs and concepts", category: "Arts & Culture" },
        { name: "Galleries", href: "/use-cases/galleries", description: "Gallery and exhibition rights management", category: "Arts & Culture" },
        { name: "Creative Spaces", href: "/use-cases/creative-spaces", description: "Rights management for creative venues", category: "Arts & Culture" },
        { name: "Museums", href: "/use-cases/museums", description: "Museum collection and exhibition protection", category: "Arts & Culture" },
        
        // Media & Entertainment
        { name: "Film", href: "/use-cases/film", description: "Film production and distribution rights", category: "Media & Entertainment" },
        { name: "TV", href: "/use-cases/tv", description: "Television content and broadcast rights", category: "Media & Entertainment" },
        { name: "Music", href: "/use-cases/music", description: "Music rights and royalty management", category: "Media & Entertainment" },
        { name: "Video Games", href: "/use-cases/video-games", description: "Gaming content and asset protection", category: "Media & Entertainment" },
        { name: "Journalism", href: "/use-cases/journalism", description: "News and editorial content rights", category: "Media & Entertainment" },
        { name: "Authors", href: "/use-cases/authors", description: "Book and literary content protection", category: "Media & Entertainment" },
        
        // Fashion and Lifestyle
        { name: "Fashion", href: "/use-cases/fashion", description: "Fashion design and brand protection", category: "Fashion and Lifestyle" },
        { name: "Beauty", href: "/use-cases/beauty", description: "Beauty content and brand rights", category: "Fashion and Lifestyle" },
        { name: "Models", href: "/use-cases/models", description: "Model portfolio and image rights", category: "Fashion and Lifestyle" },
        { name: "Cuisine", href: "/use-cases/cuisine", description: "Culinary content and recipe protection", category: "Fashion and Lifestyle" },
        { name: "Hospitality", href: "/use-cases/hospitality", description: "Hotel and venue content rights", category: "Fashion and Lifestyle" },
        
        // Creative Industries
        { name: "Content Creators", href: "/use-cases/content-creators", description: "Social media and digital content rights", category: "Creative Industries" },
        { name: "Photography", href: "/use-cases/photography", description: "Photo licensing and usage rights", category: "Creative Industries" },
        { name: "Design", href: "/use-cases/design", description: "Graphic and product design protection", category: "Creative Industries" },
        { name: "Advertising", href: "/use-cases/advertising", description: "Ad campaign and creative asset rights", category: "Creative Industries" },
        { name: "Agency", href: "/use-cases/agency", description: "Creative agency rights management", category: "Creative Industries" },
        { name: "Auction House", href: "/use-cases/auction-house", description: "Art auction and valuation rights", category: "Creative Industries" },
        
        // Sports & NIL
        { name: "Sports", href: "/use-cases/sports", description: "Sports content and athlete rights", category: "Sports & NIL" },
        { name: "NIL", href: "/use-cases/nil", description: "Name, Image, and Likeness protection", category: "Sports & NIL" },
        
        // Technology
        { name: "Online Safety", href: "/use-cases/online-safety", description: "Digital safety and content protection", category: "Technology" },
      ]
    },
    {
      title: "Company",
      items: [
        { name: "About Us", href: "/company/about", description: "Our mission and team" },
        { name: "Partners", href: "/company/partners", description: "Our ecosystem of partners" },
        { name: "Careers", href: "/company/careers", description: "Join our growing team" },
        { name: "Press", href: "/company/press", description: "Media resources and press releases" },
        { name: "Contact", href: "/company/contact", description: "Get in touch with us" },
      ]
    }
  ];

  return (
    <NavSection>
      <NavContainer>
        <NavContent className="flex h-16 items-center justify-between">
                 {/* Logo */}
                 <Link href="/" className="flex items-center">
                   <Image 
                     src="/creation-rights logo landscape white.svg" 
                     alt="Creation Rights" 
                     width={200}
                     height={50}
                     className="w-[12.5rem] h-auto"
                   />
                 </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent className={item.title === "Use Cases" ? "!w-screen !fixed !left-0 !top-16 !transform-none" : ""}>
                      {item.title === "Use Cases" ? (
                        <div className="p-6 bg-black/95 backdrop-blur-sm border border-white/10">
                          <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                            {/* Arts & Culture */}
                            <div>
                              <h3 className="font-semibold text-white mb-4">Arts & Culture</h3>
                              <ul className="space-y-2">
                                {item.items.filter(subItem => subItem.category === "Arts & Culture").map((subItem) => (
                                  <li key={subItem.name}>
                                    <Link
                                      href={subItem.href}
                                      className="block text-sm text-white/70 hover:text-white transition-colors"
                                    >
                                      {subItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            {/* Media & Entertainment */}
                            <div>
                              <h3 className="font-semibold text-white mb-4">Media & Entertainment</h3>
                              <ul className="space-y-2">
                                {item.items.filter(subItem => subItem.category === "Media & Entertainment").map((subItem) => (
                                  <li key={subItem.name}>
                                    <Link
                                      href={subItem.href}
                                      className="block text-sm text-white/70 hover:text-white transition-colors"
                                    >
                                      {subItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            {/* Fashion and Lifestyle */}
                            <div>
                              <h3 className="font-semibold text-white mb-4">Fashion & Lifestyle</h3>
                              <ul className="space-y-2">
                                {item.items.filter(subItem => subItem.category === "Fashion and Lifestyle").map((subItem) => (
                                  <li key={subItem.name}>
                                    <Link
                                      href={subItem.href}
                                      className="block text-sm text-white/70 hover:text-white transition-colors"
                                    >
                                      {subItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            {/* Technology */}
                            <div>
                              <h3 className="font-semibold text-white mb-4">Technology</h3>
                              <ul className="space-y-2">
                                {item.items.filter(subItem => subItem.category === "Technology").map((subItem) => (
                                  <li key={subItem.name}>
                                    <Link
                                      href={subItem.href}
                                      className="block text-sm text-white/70 hover:text-white transition-colors"
                                    >
                                      {subItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            {/* Creative Industries */}
                            <div>
                              <h3 className="font-semibold text-white mb-4">Creative Industries</h3>
                              <ul className="space-y-2">
                                {item.items.filter(subItem => subItem.category === "Creative Industries").map((subItem) => (
                                  <li key={subItem.name}>
                                    <Link
                                      href={subItem.href}
                                      className="block text-sm text-white/70 hover:text-white transition-colors"
                                    >
                                      {subItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            {/* Sports & NIL */}
                            <div>
                              <h3 className="font-semibold text-white mb-4">Sports & NIL</h3>
                              <ul className="space-y-2">
                                {item.items.filter(subItem => subItem.category === "Sports & NIL").map((subItem) => (
                                  <li key={subItem.name}>
                                    <Link
                                      href={subItem.href}
                                      className="block text-sm text-white/70 hover:text-white transition-colors"
                                    >
                                      {subItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        </div>
                      ) : (
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.items.map((subItem) => (
                            <ListItem
                              key={subItem.name}
                              title={subItem.name}
                              href={subItem.href}
                            >
                              {subItem.description}
                            </ListItem>
                          ))}
                        </ul>
                      )}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <ThemeSwitcher />
            <Link
              href="/login"
              className="inline-flex h-10 w-10 items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:bg-white/10"
              aria-label="Login"
            >
              <LogIn className="h-5 w-5" />
            </Link>
            <Link
              href="/signup"
              className="inline-flex h-10 w-10 items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:bg-white/10"
              aria-label="Sign Up"
            >
              <UserPlus className="h-5 w-5" />
            </Link>
            <Button variant="shimmer" asChild>
              <Link href="/demo">
                Request Demo
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </NavContent>

        {/* Mobile Navigation */}
        {isOpen && (
            <div className="md:hidden border-t border-border py-4">
              <div className="space-y-4">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="font-medium mb-2">{item.title}</div>
                  <div className="ml-4 space-y-2">
                    {item.title === "Use Cases" ? (
                      <div className="space-y-4">
                        {/* Arts & Culture */}
                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-2">Arts & Culture</div>
                          <div className="ml-2 space-y-1">
                            {item.items.filter(subItem => subItem.category === "Arts & Culture").map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block text-sm transition-colors hover:text-muted-foreground"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                        
                        {/* Media & Entertainment */}
                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-2">Media & Entertainment</div>
                          <div className="ml-2 space-y-1">
                            {item.items.filter(subItem => subItem.category === "Media & Entertainment").map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block text-sm transition-colors hover:text-muted-foreground"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                        
                        {/* Fashion and Lifestyle */}
                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-2">Fashion & Lifestyle</div>
                          <div className="ml-2 space-y-1">
                            {item.items.filter(subItem => subItem.category === "Fashion and Lifestyle").map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block text-sm transition-colors hover:text-muted-foreground"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                        
                        {/* Technology */}
                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-2">Technology</div>
                          <div className="ml-2 space-y-1">
                            {item.items.filter(subItem => subItem.category === "Technology").map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block text-sm transition-colors hover:text-muted-foreground"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                        
                        {/* Creative Industries */}
                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-2">Creative Industries</div>
                          <div className="ml-2 space-y-1">
                            {item.items.filter(subItem => subItem.category === "Creative Industries").map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block text-sm transition-colors hover:text-muted-foreground"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                        
                        {/* Sports & NIL */}
                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-2">Sports & NIL</div>
                          <div className="ml-2 space-y-1">
                            {item.items.filter(subItem => subItem.category === "Sports & NIL").map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block text-sm transition-colors hover:text-muted-foreground"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      item.items?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-sm transition-colors hover:text-muted-foreground"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))
                    )}
                  </div>
                </div>
              ))}
              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium">Theme</span>
                  <ThemeSwitcher />
                </div>
                <Link
                  href="/login"
                  className="block transition-colors hover:text-muted-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="block transition-colors hover:text-muted-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
                <div onClick={() => setIsOpen(false)}>
                  <Button variant="shimmer" className="w-full" asChild>
                    <Link href="/demo">
                      Request Demo
                    </Link>
                  </Button>
                </div>
                </div>
              </div>
            </div>
        )}
      </NavContainer>
    </NavSection>
  );
};

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors text-white hover:bg-white/10 focus:bg-white/10"
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-white/70">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default Navigation;