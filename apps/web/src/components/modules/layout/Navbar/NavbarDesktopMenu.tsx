"use client";

import { NavigationItem } from "@/interfaces/types";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function NavbarDesktopMenu({
  navigationItem,
}: {
  navigationItem: NavigationItem[];
}) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigationItem.map((item: NavigationItem) =>
          item.isDropdown ? (
            <NavigationMenuItem key={item.name}>
              <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
              <NavigationMenuContent className={cn("w-50")}>
                {item.dropdownItems?.map((item) => (
                  <NavigationMenuLink key={item.name}>
                    <Link href={item.href}>{item.name}</Link>
                  </NavigationMenuLink>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={item.name}>
              <NavigationMenuLink href={item.href}>
                {item.name}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ),
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
