"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeSwitcher from "@/components/ui/theme-switcher";
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
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="w-full px-6 sm:px-16 lg:px-24">
        <div className="flex h-16 items-center justify-between">
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
              className="transition-colors hover:text-muted-foreground"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="rounded-full border border-border px-4 py-2 transition-all hover:bg-muted"
            >
              Sign Up
            </Link>
            <Link
              href="/demo"
              className="rounded-full border border-border px-4 py-2 text-sm transition-all hover:bg-muted"
            >
              Request Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

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
                <Link
                  href="/demo"
                  className="block transition-colors hover:text-muted-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default Navigation;