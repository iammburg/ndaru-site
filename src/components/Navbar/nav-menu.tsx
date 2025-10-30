import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import React, { type ComponentProps } from "react";

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => {
  const [pathname, setPathname] = React.useState("");

  React.useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-1 space-x-0 text-sm">
        <NavigationMenuItem>
          <Button
            variant="ghost"
            asChild
            className={clsx(
              pathname === "/" && "bg-accent text-accent-foreground",
            )}
          >
            <a href="/">Home</a>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button
            variant="ghost"
            asChild
            className={clsx(
              pathname === "/blog" && "bg-accent text-accent-foreground",
            )}
          >
            <a href="/blog">Blog</a>
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    icon?: React.ComponentType<{ className?: string }>;
  }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-2 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none",
            className,
          )}
          {...props}
        >
          {Icon && <Icon className="mb-4 size-6" />}
          <div className="text-sm leading-none font-semibold">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
