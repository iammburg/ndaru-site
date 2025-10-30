import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import clsx from "clsx";
import { Menu } from "lucide-react";

export const NavigationSheet = () => {
  const [pathname, setPathname] = React.useState("");

  React.useEffect(() => {
    setPathname(window.location.pathname);
  }, []);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-3">
        <div className="mt-12 space-y-4 text-base">
          <a
            href="/"
            className={`clsx inline-block ${clsx(
              pathname === "/" &&
                "decoration-primary underline decoration-2 underline-offset-1",
            )}`}
          >
            Home
          </a>
        </div>
        <div className="space-y-4 text-base">
          <a
            href="/blog"
            className={`clsx inline-block ${clsx(
              pathname === "/blog" &&
                "decoration-primary underline decoration-2 underline-offset-1",
            )}`}
          >
            Blog
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
};
