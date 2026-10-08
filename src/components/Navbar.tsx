import { useEffect, useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Focus', href: '#focus' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Profile', href: '#profile' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-950/85 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-2 text-white font-display font-bold text-lg tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-accent-500">
            <Sparkles className="h-4 w-4 text-white" />
          </span>
          <span className="hidden sm:inline">Karabo Ngomane</span>
          <span className="sm:hidden">KN</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-ink-300 transition-colors hover:text-white hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-ink-950 transition-all hover:bg-primary-50 hover:shadow-lg hover:shadow-primary-500/20"
          >
            Get in touch
          </a>
        </div>

        <button
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-white/5 bg-ink-950/95 backdrop-blur-md">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-ink-300 transition-colors hover:text-white hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
