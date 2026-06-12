import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const onHome = location.pathname === "/";
  const transparent = onHome && !scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent text-white"
          : "bg-background/85 backdrop-blur-xl text-foreground border-b border-border"
      }`}
    >
      <div className="container-luxe flex items-center justify-between h-20">
        <Link to="/" className="group flex items-center gap-3">
          <span className="w-9 h-9 grid place-items-center border border-current/40">
            <span className="font-display text-lg leading-none text-accent">O</span>
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg tracking-tight">Option One</span>
            <span className="block text-[10px] tracking-[0.35em] uppercase opacity-70">Interior</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="relative text-[11px] tracking-[0.28em] uppercase font-medium opacity-80 hover:opacity-100 transition data-[status=active]:opacity-100 data-[status=active]:text-accent"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+8801711371372" className="flex items-center gap-2 text-xs tracking-widest uppercase opacity-80 hover:text-accent transition">
            <Phone className="w-3.5 h-3.5" /> +880 1711-371372
          </a>
          <Link to="/contact" className="btn-gold !py-2.5 !px-5 text-[10px]">Book Consultation</Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-t border-border text-foreground"
          >
            <nav className="container-luxe py-8 flex flex-col gap-6">
              {NAV.map((n, i) => (
                <motion.div
                  key={n.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link to={n.to} className="font-display text-3xl block">
                    {n.label}
                  </Link>
                </motion.div>
              ))}
              <div className="hairline my-2" />
              <a href="tel:+8801711371372" className="text-sm tracking-widest uppercase opacity-80">
                +880 1711-371372
              </a>
              <Link to="/contact" className="btn-gold w-fit">Book Consultation</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}