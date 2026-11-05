import { Link } from "react-router-dom";
import Brand from "@/components/Brand";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-cosmic/10 bg-space/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="transition-opacity hover:opacity-80">
          <Brand size="sm" />
        </Link>
        <nav className="flex items-center gap-1 text-sm font-medium text-dust">
          <a href="#divisions" className="rounded-full px-3 py-2 transition-colors hover:text-bone">
            Divisions
          </a>
          <a href="#about" className="hidden rounded-full px-3 py-2 transition-colors hover:text-bone sm:block">
            About
          </a>
          <a
            href="#contact"
            className="ml-2 rounded-full bg-cosmic/10 px-4 py-2 text-cosmic ring-1 ring-cosmic/30 transition-colors hover:bg-cosmic/20"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}