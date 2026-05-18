import { Link } from 'react-router-dom';
import PaymentMethods from './PaymentMethods';

export default function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-white/5 pt-16 sm:pt-24 pb-10 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 mb-14 sm:mb-20">
          {/* Brand column - full width on mobile */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="text-3xl font-bebas tracking-wider uppercase mb-4 sm:mb-6 block">
              Stream<span className="text-brand">Vault</span>
            </Link>
            <p className="text-white/40 max-w-sm mb-6 sm:mb-8 text-sm sm:text-base">
              The ultimate streaming experience. Access thousands of channels and movies globally on any device. Professional service, guaranteed quality.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map(social => (
                <div key={social} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand hover:border-brand transition-all cursor-pointer">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-white/20 rounded-sm" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bebas text-lg sm:text-xl mb-4 sm:mb-6 tracking-wide">Company</h4>
            <ul className="space-y-3 sm:space-y-4 text-sm text-white/40">
              <li><Link to="/about" className="hover:text-brand transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-brand transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-brand transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bebas text-lg sm:text-xl mb-4 sm:mb-6 tracking-wide">Support</h4>
            <ul className="space-y-3 sm:space-y-4 text-sm text-white/40">
              <li><Link to="/faq" className="hover:text-brand transition-colors">FAQ</Link></li>
              <li><a href="#" className="hover:text-brand transition-colors">Setup Guides</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">WhatsApp Support</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">System Status</a></li>
            </ul>
          </div>

          {/* Newsletter - full width on mobile */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <h4 className="font-bebas text-lg sm:text-xl mb-4 sm:mb-6 tracking-wide">Newsletter</h4>
            <p className="text-xs text-white/40 mb-4 uppercase tracking-widest font-bold">Get updates & deals</p>
            <div className="flex p-1 bg-white/5 rounded-lg border border-white/10">
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border-none outline-none px-3 sm:px-4 py-2 text-sm w-full min-w-0"
              />
              <button className="bg-brand text-white px-3 sm:px-4 py-2 rounded-md text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                JOIN
              </button>
            </div>
          </div>
        </div>

        <PaymentMethods />
        <div className="text-center pt-10 sm:pt-12 border-t border-white/5">
          <p className="text-white/20 text-xs font-bold uppercase tracking-widest">
            © 2026 StreamVault. All rights reserved. Premium IPTV solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}
