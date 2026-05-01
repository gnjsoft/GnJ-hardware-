import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ShieldCheck,
  Truck,
  RotateCcw,
  Headphones
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="https://gnjsoft.com/images/logo.png" 
                alt="Logo" 
                className="h-8 w-auto"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-500">
              India's leading specialized marketplace for enterprise infrastructure, 
              high-performance computing, and security solutions. 
              Delivering precision hardware since 2010.
            </p>
            <div className="flex gap-4">
              <Link to="#" className="text-slate-400 hover:text-brand-secondary"><Linkedin className="h-5 w-5" /></Link>
              <Link to="#" className="text-slate-400 hover:text-brand-secondary"><Twitter className="h-5 w-5" /></Link>
              <Link to="#" className="text-slate-400 hover:text-brand-secondary"><Facebook className="h-5 w-5" /></Link>
              <Link to="#" className="text-slate-400 hover:text-brand-secondary"><Instagram className="h-5 w-5" /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-4 font-display text-xs font-bold uppercase tracking-widest text-slate-900">Solutions</h3>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><Link to="/category/workstations" className="hover:text-brand-secondary">Professional Workstations</Link></li>
                <li><Link to="/category/servers" className="hover:text-brand-secondary">Enterprise Servers</Link></li>
                <li><Link to="/category/networking" className="hover:text-brand-secondary">Network Infrastructure</Link></li>
                <li><Link to="/b2b-solutions" className="hover:text-brand-secondary">Bulk Procurement</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-display text-xs font-bold uppercase tracking-widest text-slate-900">Support</h3>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><Link to="/support" className="hover:text-brand-secondary">Technical Support</Link></li>
                <li><Link to="/returns" className="hover:text-brand-secondary">RMA & Returns</Link></li>
                <li><Link to="/tracking" className="hover:text-brand-secondary">Order Tracking</Link></li>
                <li><Link to="/warranty" className="hover:text-brand-secondary">Warranty Services</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-display text-xs font-bold uppercase tracking-widest text-slate-900">Company</h3>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><Link to="/about" className="hover:text-brand-secondary">About Us</Link></li>
                <li><Link to="/certification" className="hover:text-brand-secondary">Certifications</Link></li>
                <li><Link to="/compliance" className="hover:text-brand-secondary">GST Compliance</Link></li>
                <li><Link to="/contact" className="hover:text-brand-secondary">Contact Sales</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact & Trust */}
          <div className="space-y-6">
            <h3 className="font-display text-xs font-bold uppercase tracking-widest text-slate-900">Connect With Us</h3>
            <div className="space-y-4 text-sm text-slate-500">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 text-brand-secondary" />
                <span>Sector 62, Noida, Uttar Pradesh 201309, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-secondary" />
                <span>1800-SUPP-HQ (Toll Free)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-secondary" />
                <span>sales@hardwarenexus.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16 grid grid-cols-2 gap-4 border-y border-slate-200 py-8 md:grid-cols-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-slate-100 p-2 text-brand-secondary">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-tighter text-slate-900">100% Genuine</p>
              <p className="text-[10px] text-slate-500">Authorized Partner</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-slate-100 p-2 text-brand-secondary">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-tighter text-slate-900">Pan-India Delivery</p>
              <p className="text-[10px] text-slate-500">Express Shipping</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-slate-100 p-2 text-brand-secondary">
              <RotateCcw className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-tighter text-slate-900">Easy Returns</p>
              <p className="text-[10px] text-slate-500">15-Day Policy</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-slate-100 p-2 text-brand-secondary">
              <Headphones className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-tighter text-slate-900">Expert Support</p>
              <p className="text-[10px] text-slate-500">24/7 Assistance</p>
            </div>
          </div>
        </div>

        {/* Legal & Final */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 text-[11px] text-slate-400 sm:flex-row">
          <p>© {currentYear} Global Hardware Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-slate-600">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-600">Terms of Sale</Link>
            <Link to="/cookies" className="hover:text-slate-600">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
