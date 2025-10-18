import { Button } from "@/components/ui/button";
import { Logo } from "./NavbarLogo";
import { NavMenu } from "./NavMenu";
import { NavigationSheet } from "./NavigationSheet";
import { ArrowUpRight } from "lucide-react";
import { ModeToggle } from "../ModeToggle";

const Navbar = () => {
    return (
        <nav className="w-full sticky top-0 z-50 h-16 bg-background border-b">
            <div className="h-full flex items-center justify-between max-w-(--breakpoint-lg) mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-8">
                    <div>
                        <a href="/">
                            <span className="font-boldonse">Andaru</span>
                        </a>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    {/* <Button>
                        Get Started <ArrowUpRight />
                    </Button> */}

                    {/* Desktop Menu */}
                    <NavMenu className="hidden md:block" />
                    <ModeToggle />
                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <NavigationSheet />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
