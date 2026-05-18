import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isHome = location.pathname === '/';

  const navLinks = [
    { to: '/#features', label: 'Features' },
    { to: '/#plans', label: 'Plans' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Support' },
    { to: '/about', label: 'About' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between ${
          scrolled || !isHome || menuOpen
            ? 'bg-bg-dark/95 backdrop-blur-md shadow-lg border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <Link to="/" className="text-xl sm:text-2xl font-bebas tracking-wider uppercase">
          Stream<span className="text-brand">Vault</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest text-white/70">
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} className="hover:text-brand transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden sm:block bg-brand hover:bg-brand/90 text-white px-5 py-2 rounded-full font-bold text-sm transition-transform active:scale-95 shadow-[0_0_20px_rgba(229,9,20,0.3)]">
            START FREE TRIAL
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute top-0 right-0 w-72 h-full bg-bg-dark border-l border-white/10 flex flex-col pt-20 pb-8 px-6 shadow-2xl">
            <nav className="flex flex-col gap-1 flex-1">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/70 hover:text-brand hover:bg-white/5 text-sm font-bold uppercase tracking-widest py-4 px-3 rounded-xl transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <button className="w-full bg-brand hover:bg-brand/90 text-white px-6 py-4 rounded-full font-bold text-sm transition-all active:scale-95 shadow-[0_0_20px_rgba(229,9,20,0.3)]">
              START FREE TRIAL
            </button>
          </div>
        </div>
      )}
    </>
  );
}
