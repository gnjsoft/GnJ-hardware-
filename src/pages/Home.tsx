import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Server, ShieldCheck, Laptop, Monitor, Zap, Database, Camera, Lock, Printer, Package, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatINR } from '../lib/utils';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0 text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          <img 
            src="https://images.unsplash.com/photo-1591405351990-4726e33df58d?auto=format&fit=crop&q=80&w=2070" 
            alt="Hardware Background" 
            className="h-full w-full object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        
        <div className="relative z-10 mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-secondary/30 bg-brand-secondary/10 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-brand-secondary uppercase"
            >
              <Zap className="h-3 w-3" /> Q2 Enterprise Offers Now Live
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              NEXT-GEN <br />
              <span className="text-brand-secondary italic text-glow-cyan">INFRASTRUCTURE</span> <br />
              GLOBAL SCALE
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 max-w-md text-base leading-relaxed text-slate-400 sm:text-lg"
            >
              The industry standard for specialized workstations, enterprise servers, 
              and mission-critical networking. Engineered for precision performance.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link 
                to="/catalog" 
                className="group flex items-center gap-3 rounded-xl bg-brand-secondary px-8 py-4 font-bold text-white transition-all hover:brightness-110 active:scale-95 shadow-xl shadow-brand-secondary/20"
              >
                Explore Marketplace <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/b2b-solutions" 
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
              >
                Corporate Login
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[500px] w-full flex items-center justify-center">
              <div className="absolute -inset-4 rounded-full bg-brand-secondary/20 blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80&w=1000" 
                alt="Enterprise Hardware" 
                className="relative z-10 h-full w-full object-contain drop-shadow-[0_20px_50px_rgba(6,182,212,0.3)]"
              />
              
              {/* Content Overlays */}
              <div className="absolute -left-6 top-1/4 z-20 rounded-2xl border border-white/10 bg-white p-4 shadow-2xl backdrop-blur-xl transition-transform hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-secondary text-white">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Processor</p>
                    <p className="font-display font-medium text-slate-900">AMD Threadripper PRO</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 bottom-1/4 z-20 rounded-2xl border border-white/10 bg-white p-4 shadow-2xl backdrop-blur-xl transition-transform hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-secondary text-white">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Security</p>
                    <p className="font-display font-medium text-slate-900">TPM 2.0 Hardened</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Ticker */}
        <div className="absolute bottom-0 w-full border-t border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl overflow-hidden py-4">
            <div className="flex justify-around gap-12 whitespace-nowrap px-4 font-mono text-[10px] tracking-widest text-slate-400 uppercase">
              <div className="flex items-center gap-2"><Cpu className="h-3 w-3" /> Intel vPro Compatible</div>
              <div className="flex items-center gap-2"><Server className="h-3 w-3" /> ECC Memory Support</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-3 w-3" /> TAA Compliant Options</div>
              <div className="flex items-center gap-2"><Zap className="h-3 w-3" /> India Registered (GST)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-brand-secondary">Browse by Industry</p>
              <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-slate-900">SPECIALIZED HARDWARE</h2>
            </div>
            <Link to="/catalog" className="text-sm font-bold text-brand-secondary hover:underline">View All Categories</Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[
              { title: 'Desktops', icon: Monitor, count: '64 Models', img: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80&w=600', link: '/desktops' },
              { title: 'Workstations', icon: Cpu, count: '42 Models', img: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=600', link: '/workstations' },
              { title: 'Laptops', icon: Laptop, count: '128 Models', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=600', link: '/laptops' },
              { title: 'Servers', icon: Server, count: '31 Models', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=600', link: '/servers' },
              { title: 'Storage', icon: Database, count: '15 Models', img: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=600', link: '/storage' },
              { title: 'Networking', icon: Zap, count: '89 Models', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600', link: '/networking' },
              { title: 'Firewalls', icon: ShieldCheck, count: '24 Models', img: 'https://images.unsplash.com/photo-1563770660941-20978e870e9b?auto=format&fit=crop&q=80&w=600', link: '/firewalls' },
              { title: 'CCTV', icon: Camera, count: '18 Models', img: 'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80&w=600', link: '/cctv' },
              { title: 'Access Control', icon: Lock, count: '12 Models', img: 'https://images.unsplash.com/photo-1524338198850-8a2ff63a6104?auto=format&fit=crop&q=80&w=600', link: '/access-control' },
              { title: 'Printers', icon: Printer, count: '28 Models', img: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=600', link: '/printers' },
              { title: 'Consumables', icon: Package, count: '150+ Items', img: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&q=80&w=600', link: '/consumables' },
              { title: 'Accessories', icon: MousePointer2, count: '94 Items', img: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=600', link: '/accessories' },
            ].map((cat, i) => (
              <Link 
                key={i} 
                to={cat.link}
                className="group relative h-80 overflow-hidden rounded-2xl border border-slate-200 bg-white transition-transform hover:-translate-y-1 shadow-sm hover:shadow-xl"
              >
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <cat.icon className="mb-2 h-6 w-6 text-brand-secondary" />
                  <h3 className="font-display text-2xl font-bold text-slate-900">{cat.title}</h3>
                  <p className="text-xs text-slate-500">{cat.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Section */}
      <section className="bg-brand-secondary py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-5xl font-extrabold leading-none tracking-tighter text-white uppercase sm:text-6xl">
                B2B <br /> PROCUREMENT <br /> EVOLVED
              </h2>
              <p className="mt-6 text-lg font-medium opacity-90">
                Unlock exclusive corporate dashboard features, bulk pricing tiers, 
                and dedicated account management for your IT infrastructure.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link 
                  to="/b2b-solutions" 
                  className="rounded-full bg-white px-8 py-4 text-center font-bold text-brand-secondary transition-transform hover:scale-105 shadow-xl"
                >
                  Apply for Business Account
                </Link>
                <Link 
                  to="/rfq" 
                  className="rounded-full border-2 border-white/20 px-8 py-4 text-center font-bold text-white transition-colors hover:bg-white hover:text-brand-secondary"
                >
                  Request Fast Quote
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md border border-white/10">
                <p className="font-display text-4xl font-black">0%</p>
                <p className="text-xs font-bold uppercase tracking-tight">Interest EMI</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md border border-white/10">
                <p className="font-display text-4xl font-black">24H</p>
                <p className="text-xs font-bold uppercase tracking-tight">SLA Support</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md border border-white/10">
                <p className="font-display text-4xl font-black">GST</p>
                <p className="text-xs font-bold uppercase tracking-tight">Invoicing Ready</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md border border-white/10">
                <p className="font-display text-4xl font-black">BULK</p>
                <p className="text-xs font-bold uppercase tracking-tight">Wholesale Tiers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
