"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Logo from "./Logo";
import { ThemeToggle } from "./theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  const isLoggedIn = false;
  return (
    // <header className="flex w-screent tems-center justify-between h-24 text-white bg-gray-700">
    <header className="flex w-screen items-center justify-between h-24">
      <div className="flex gap-4 ml-12 items-center">
        <a href="/" className="flex gap-2 items-center">
          <Logo />
          <p className="text-3xl">PodNexus</p>
        </a>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a
                    className={"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"}
                  >
                    <div className="text-sm font-medium leading-none">
                      title
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      children
                    </p>
                  </a>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/dashboard" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Dashboard
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {isLoggedIn
        ? (
          <div className="flex items-center gap-4 mr-12">
            <h2>Schedule a Demo</h2>
            <div className="flex gap-2">
              <Button variant={"secondary"}>Log in</Button>
              <Button>Get started</Button>
              <ThemeToggle />
            </div>
          </div>
        )
        : (
          <div className="flex items-center gap-4 mr-12">
            <div className="flex gap-2">
              <Avatar>
                <AvatarFallback>TS</AvatarFallback>
              </Avatar>
              <ThemeToggle />
            </div>
          </div>
        )}
    </header>
  );
}
