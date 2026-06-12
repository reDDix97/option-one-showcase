import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, ArrowUpRight, Globe, MessageCircle, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.12_0_0)] text-white/80 mt-24">
      <div className="container-luxe py-20 grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 grid place-items-center border border-accent">
              <span className="font-display text-xl leading-none text-accent">O</span>
            </span>
            <div>
              <p className="font-display text-2xl text-white">Option One Interior</p>
              <p className="eyebrow !text-white/40">Design · Architecture · Build</p>
            </div>
          </div>
          <p className="text-white/60 max-w-md leading-relaxed">
            A Dhaka-based design and construction studio crafting timeless residential, corporate and commercial spaces across Bangladesh.
          </p>
          <Link to="/contact" className="btn-gold w-fit">
            Start a Project <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="lg:col-span-3 space-y-4">
          <p className="eyebrow">Studio</p>
          <ul className="space-y-3">
            <li><Link to="/about" className="hover:text-accent transition">About</Link></li>
            <li><Link to="/services" className="hover:text-accent transition">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-accent transition">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition">Contact</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-4 space-y-4">
          <p className="eyebrow">Contact</p>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="w-4 h-4 mt-1 text-accent shrink-0" /> House-01, Road-15, Sector-12, Uttara, Dhaka-1230</li>
            <li className="flex gap-3"><Phone className="w-4 h-4 mt-1 text-accent shrink-0" /> <a href="tel:+8801711371372" className="hover:text-accent">+880 1711-371372</a></li>
            <li className="flex gap-3"><Mail className="w-4 h-4 mt-1 text-accent shrink-0" /> <a href="mailto:hello@optiononeinterior.com" className="hover:text-accent">hello@optiononeinterior.com</a></li>
          </ul>
          <div className="flex gap-3 pt-2">
            {[Globe, MessageCircle, Send].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="w-10 h-10 grid place-items-center border border-white/15 hover:border-accent hover:text-accent transition">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-luxe py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-white/40">
          <p>© {new Date().getFullYear()} Option One Interior. All rights reserved.</p>
          <p className="tracking-widest uppercase">Crafted in Dhaka · 4.6★ Google Rated</p>
        </div>
      </div>
    </footer>
  );
}