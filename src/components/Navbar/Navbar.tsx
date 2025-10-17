import { Button } from "@/components/ui/button";
import { Logo } from "./NavbarLogo";
import { NavMenu } from "./NavMenu";
import { NavigationSheet } from "./NavigationSheet";
import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
    return (
        <div>
            <nav className="h-16 bg-background border-b">
                <div className="h-full flex items-center justify-between max-w-(--breakpoint-lg) mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-8">
                        <div>Ilham Andaru Prabowo</div>
                        {/* Desktop Menu */}
                        <NavMenu className="hidden md:block" />
                    </div>

                    <div className="flex items-center gap-3">
                        <Button>
                            Get Started <ArrowUpRight />
                        </Button>

                        {/* Mobile Menu */}
                        <div className="md:hidden">
                            <NavigationSheet />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
