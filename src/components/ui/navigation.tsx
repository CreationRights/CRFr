"use client";

import Link from "next/link";
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
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
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
      title: "Company",
      items: [
        { name: "About Us", href: "/company/about", description: "Our mission and team" },
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
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-xl font-bold">Creation Rights</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
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
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/use-cases">Use Cases</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
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
                    {item.items?.map((subItem) => (
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
              ))}
              <Link
                href="/use-cases"
                className="block font-medium transition-colors hover:text-muted-foreground"
                onClick={() => setIsOpen(false)}
              >
                Use Cases
              </Link>
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