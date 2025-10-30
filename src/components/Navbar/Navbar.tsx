import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <nav className="bg-background sticky top-0 z-50 h-16 w-full border-b">
      <div className="mx-auto flex h-full max-w-(--breakpoint-lg) items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <div>
            <a href="/">
              <span className="font-boldonse">Daru</span>
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
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
