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
              <NavigationMenuTrigger className="font-semibold">
                {item.name}
              </NavigationMenuTrigger>
              <NavigationMenuContent className={cn("w-50")}>
                {item.dropdownItems?.map((item) => (
                  <NavigationMenuLink href={item.href} key={item.name}>
                    {item.name}
                  </NavigationMenuLink>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem className="font-semibold" key={item.name}>
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
