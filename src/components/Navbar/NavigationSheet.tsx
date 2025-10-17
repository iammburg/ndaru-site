import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./NavbarLogo";

export const NavigationSheet = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent className="px-6 py-3">
                <Logo />

                <div className="mt-12 text-base space-y-4">
                    <a href="/blog" className="inline-block">
                        Home
                    </a>
                </div>
                <div className="mt-12 text-base space-y-4">
                    <a href="/blog" className="inline-block">
                        Blog
                    </a>
                </div>
            </SheetContent>
        </Sheet>
    );
};
