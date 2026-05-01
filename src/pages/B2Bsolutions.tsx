import { motion } from 'motion/react';
import { 
  Building2, 
  Truck, 
  ShieldCheck, 
  Users, 
  BarChart3, 
  Zap, 
  Briefcase, 
  Headphones,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    title: 'Enterprise Procurement',
    description: 'Bulk purchasing programs with tiered pricing and dedicated account management for large-scale hardware deployments.',
    icon: Building2,
    features: ['Custom Price Lists', 'Bulk Discounts', 'Tax Exemption Handling']
  },
  {
    title: 'Managed IT Services',
    description: 'End-to-end infrastructure management, from initial setup to proactive monitoring and 24/7 technical support.',
    icon: Zap,
    features: ['Infrastructure Audit', 'Remote Monitoring', 'Priority Support']
  },
  {
    title: 'Security & Surveillance',
    description: 'Total vertical solutions for facility security, integrating AI-enabled CCTV, access control, and network firewalls.',
    icon: ShieldCheck,
    features: ['AI Threat Detection', 'Biometric Access', 'Cloud Recording']
  },
  {
    title: 'Logistics & Deployment',
    description: 'Global delivery capabilities with on-site installation and configuration across multiple branch locations.',
    icon: Truck,
    features: ['Pan-India Delivery', 'Expert Installation', 'Asset Tagging']
  },
  {
    title: 'Financial Solutions',
    description: 'Flexible leasing options, business credit lines, and delayed payment terms to help manage enterprise cash flow.',
    icon: BarChart3,
    features: ['Equipment Leasing', 'Line of Credit', 'Extended Terms']
  },
  {
    title: 'Custom Workstations',
    description: 'Bespoke hardware configurations tailored for data science, architectural rendering, and engineering workloads.',
    icon: Briefcase,
    features: ['ISV Certified', 'Performance Tuning', 'Burn-in Testing']
  }
];

const INDUSTRIES = [
  'Banking & Finance', 'Manufacturing', 'Healthcare', 'Education', 'Public Sector', 'IT & Software'
];

export default function B2Bsolutions() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-5xl font-bold tracking-tight text-white sm:text-7xl">
              ENTERPRISE <span className="text-brand-secondary italic">SOLUTIONS</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-300">
              Future-proof your organization with Global's comprehensive B2B ecosystem. We bridge the gap between 
              complex technical requirements and seamless operational execution.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <button className="rounded-full bg-brand-secondary px-8 py-4 text-sm font-bold text-white shadow-lg shadow-brand-secondary/20 hover:bg-brand-secondary/90 transition-all">
                Speak to an Expert
              </button>
              <Link to="/catalog" className="text-sm font-bold text-white flex items-center gap-2 group">
                Browse Commercial Catalog <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-slate-100 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { label: 'Corporate Clients', value: '5,000+' },
              { label: 'Cities Covered', value: '250+' },
              { label: 'Uptime SLA', value: '99.99%' },
              { label: 'Response Time', value: '< 4hrs' },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <p className="font-display text-4xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary">What We Deliver</h2>
            <h3 className="mt-2 font-display text-4xl font-bold text-slate-900">Comprehensive Service Layers</h3>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-3xl border border-slate-100 bg-slate-50 p-8 transition-all hover:bg-white hover:shadow-2xl hover:shadow-slate-200"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-brand-secondary shadow-sm transition-colors group-hover:bg-brand-secondary group-hover:text-white">
                  <solution.icon className="h-6 w-6" />
                </div>
                <h4 className="font-display text-xl font-bold text-slate-900 underline decoration-brand-secondary/30 decoration-2 underline-offset-4">{solution.title}</h4>
                <p className="mt-4 text-sm leading-relaxed text-slate-500 font-medium">
                  {solution.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {solution.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-xs font-bold text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-brand-secondary" /> {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Support */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
            <div className="max-w-xl">
              <h3 className="font-display text-4xl font-bold text-slate-900 italic tracking-tighter">Specialized Industry Vertical Support</h3>
              <p className="mt-6 text-slate-500 font-medium">
                We understand that every sector has unique compliance and performance standards. 
                Our team provides tailored consultation to meet specific regulatory frameworks.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {INDUSTRIES.map(ind => (
                  <span key={ind} className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-bold text-slate-600">
                    {ind}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-brand-secondary/10 blur-3xl"></div>
              <div className="relative rounded-3xl border border-white/50 bg-white/30 p-8 backdrop-blur-md shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white">
                    <Headphones className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Connect with</p>
                    <p className="font-display text-xl font-bold">Solutions Support</p>
                  </div>
                </div>
                <div className="mt-8 space-y-4">
                  <input type="text" placeholder="Work Email" className="w-full rounded-lg border-slate-200 bg-white text-sm focus:ring-brand-secondary" />
                  <button className="w-full rounded-lg bg-slate-900 py-3 text-sm font-bold text-white hover:bg-slate-800 transition-colors">
                    Request Call Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[3rem] bg-slate-900 px-6 py-20 text-white shadow-2xl shadow-slate-300">
            <Users className="mx-auto mb-8 h-12 w-12 text-brand-secondary" />
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-6xl uppercase italic">Join the Network</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
              Become a corporate partner today and unlock the full potential of high-performance computing, 
              advanced security, and managed logistics.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-900 hover:bg-slate-100 transition-all">
                Download Partner Deck
              </button>
              <button className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-md hover:bg-white/10 transition-all">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
