import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  Cpu, 
  Server, 
  Printer, 
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const CATEGORIES = [
  { name: 'Computing', icon: Cpu, sub: ['Desktops', 'Laptops', 'Workstations'] },
  { name: 'Infrastructure', icon: Server, sub: ['Servers', 'Networking', 'Storage'] },
  { name: 'Security', icon: ShieldCheck, sub: ['Firewalls', 'CCTV', 'Access Control'] },
  { name: 'Printing', icon: Printer, sub: ['Printers', 'Consumables', 'Accessories'] },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 text-slate-900 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="https://gnjsoft.com/images/logo.png" 
            alt="Logo" 
            className="h-10 w-auto"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex lg:items-center lg:gap-8">
          {CATEGORIES.map((cat) => (
            <div key={cat.name} className="group relative">
              <button className="flex items-center gap-1 py-4 text-sm font-medium transition-colors hover:text-brand-secondary">
                {cat.name}
                <ChevronDown className="h-4 w-4 opacity-50" />
              </button>
              <div className="absolute left-0 top-full hidden w-48 rounded-b-lg border border-slate-200 bg-white p-2 shadow-xl group-hover:block">
                {cat.sub.map((item) => (
                  <Link
                    key={item}
                    to={item === 'Desktops' ? '/desktops' : item === 'Workstations' ? '/workstations' : item === 'Servers' ? '/servers' : item === 'Networking' ? '/networking' : item === 'Storage' ? '/storage' : item === 'Laptops' ? '/laptops' : item === 'Firewalls' ? '/firewalls' : `/category/${item.toLowerCase()}`}
                    className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-slate-50 hover:text-brand-secondary"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link to="/corporate" className="text-sm font-medium text-brand-secondary hover:underline underline-offset-4">
            B2B Solutions
          </Link>
        </nav>

        {/* Search & Actions */}
        <div className="flex items-center gap-4">
          <form onSubmit={handleSearch} className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 focus-within:border-brand-secondary sm:flex">
            <Search className="h-4 w-4 opacity-40 text-slate-500" />
            <input
              type="text"
              placeholder="Search components, SKUs..."
              className="bg-transparent text-sm outline-none placeholder:text-slate-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/cart" className="relative p-2 hover:text-brand-secondary text-slate-700">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-brand-secondary text-[10px] font-bold text-white">
                0
              </span>
            </Link>
            <Link to="/account" className="p-2 hover:text-brand-secondary text-slate-700">
              <User className="h-5 w-5" />
            </Link>
            <button
              className="p-2 lg:hidden text-slate-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-slate-100 bg-white lg:hidden shadow-lg">
          <nav className="flex flex-col p-4">
            {CATEGORIES.map((cat) => (
              <div key={cat.name} className="py-2">
                <div className="flex items-center gap-2 font-display text-lg font-bold text-brand-secondary">
                  <cat.icon className="h-5 w-5" />
                  {cat.name}
                </div>
                <div className="mt-1 grid grid-cols-2 gap-2 pl-7">
                  {cat.sub.map((item) => (
                    <Link
                      key={item}
                      to={item === 'Desktops' ? '/desktops' : item === 'Workstations' ? '/workstations' : item === 'Servers' ? '/servers' : item === 'Networking' ? '/networking' : item === 'Storage' ? '/storage' : item === 'Laptops' ? '/laptops' : item === 'Firewalls' ? '/firewalls' : `/category/${item.toLowerCase()}`}
                      className="text-sm text-slate-600 hover:text-brand-secondary"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link to="/corporate" className="mt-4 rounded-lg bg-brand-secondary px-4 py-3 text-center font-bold text-white">
              Enterprise Portal
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
