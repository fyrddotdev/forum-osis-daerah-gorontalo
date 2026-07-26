"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { NavigationItem } from "@/interfaces/types";
import { ThemeToogle } from "../Theme/ThemeToggle";
import Link from "next/link";

export default function NavbarMobileMenu({
  navigationItem,
}: {
  navigationItem: NavigationItem[];
}) {
  const [isNavItemOpen, setIsOpenNavItem] = useState(false);
  return (
    <>
      <Sheet>
        <SheetTrigger
          render={
            <Button className={cn("size-12")} variant="ghost">
              <Menu strokeWidth={3} className="size-6" />
            </Button>
          }
        />
        <SheetContent className={cn("text-base")}>
          <SheetHeader>
            <SheetTitle>
              <h1 className={cn("text-lg font-extrabold")}>Menu Navigasi</h1>
            </SheetTitle>
          </SheetHeader>
          {navigationItem.map((item) =>
            // Check if is Dropdown Navigation Menu
            item.isDropdown ? (
              <Collapsible
                key={item.name}
                open={isNavItemOpen}
                onOpenChange={setIsOpenNavItem}
              >
                <CollapsibleTrigger>
                  <div
                    className={cn(
                      // Default state
                      "group flex items-center justify-between w-full cursor-pointer gap-1",
                      "pl-8 transition-all text-muted-foreground",
                      // Hover and Active state
                      "hover:text-foreground hover:font-bold",
                      "active:text-foreground active:font-bold",
                      isNavItemOpen && "text-foreground font-bold",
                    )}
                  >
                    <span>{item.name}</span>

                    {/* Collapsible Indicator below here */}
                    <ChevronDown
                      size={16}
                      className={cn(
                        "transition-transform duration-200",
                        isNavItemOpen && "rotate-180",
                      )}
                    />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className={cn("flex flex-col gap-4 w-full pt-4")}>
                    {item.dropdownItems?.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          // Default state
                          "pl-10 transition-all text-muted-foreground",
                          // Hover and Active state
                          "hover:text-foreground hover:font-bold",
                          "active:text-foreground active:font-bold",
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ) : (
              // If not, then just show default link
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  // Default state
                  "pl-8 transition-all text-muted-foreground",
                  // Hover and Active state
                  "hover:text-foreground hover:font-bold",
                  "active:text-foreground active:font-bold",
                )}
              >
                {item.name}
              </Link>
            ),
          )}
          <SheetFooter
            className={cn("flex flex-row justify-center items-center")}
          >
            <h1>Ganti tema :</h1>
            <ThemeToogle />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
