import { useState, useMemo } from 'react';
import { Search, LayoutGrid, List as ListIcon, SlidersHorizontal, Database } from 'lucide-react';
import { MOCK_PRODUCTS } from '../mockData';
import { ProductCategory } from '../types';
import ProductCard from '../components/ProductCard';
import { cn } from '../lib/utils';

export default function Storage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(p => {
      const isStorage = p.category === ProductCategory.STORAGE;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.sku.toLowerCase().includes(searchQuery.toLowerCase());
      return isStorage && matchesSearch;
    });
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 pb-20 pt-8 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="mb-8 flex items-center gap-2 text-xs font-medium text-slate-400 uppercase tracking-widest">
          <span>Home</span>
          <span>/</span>
          <span>Catalog</span>
          <span>/</span>
          <span className="text-brand-secondary">Storage</span>
        </div>

        <div className="mb-12">
          <h1 className="font-display text-4xl font-bold text-slate-900 sm:text-6xl">
            ENTERPRISE <span className="text-brand-secondary italic">STORAGE</span>
          </h1>
          <p className="mt-4 max-w-2xl text-slate-500 font-medium">
            Scalable, reliable, and high-performance storage solutions. From all-flash arrays to high-capacity NAS, 
            protect and manage your most valuable asset: your data.
          </p>
        </div>

        {/* Toolbar */}
        <div className="mb-8 flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between shadow-sm">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search storage..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border-none bg-slate-50 py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-brand-secondary/30"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="flex rounded-lg bg-slate-100 p-1">
              <button 
                onClick={() => setViewMode('grid')}
                className={cn("p-1.5 rounded", viewMode === 'grid' ? "bg-white text-brand-secondary shadow-sm" : "text-slate-500")}
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={cn("p-1.5 rounded", viewMode === 'list' ? "bg-white text-brand-secondary shadow-sm" : "text-slate-500")}
              >
                <ListIcon className="h-4 w-4" />
              </button>
            </div>
            <button className="flex items-center gap-2 rounded-lg bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-200">
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <aside className="hidden space-y-8 lg:block">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 font-display text-xs font-bold uppercase tracking-widest text-slate-400">Storage Type</h3>
              <div className="space-y-3">
                {['All-Flash Arrays', 'Hybrid Storage', 'SAN Solutions', 'NAS Systems', 'Object Storage', 'Tape Libraries'].map(cat => (
                  <button key={cat} className="block text-sm font-medium text-slate-600 transition-colors hover:text-brand-secondary text-left">
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-brand-secondary/20 bg-emerald-900 p-6 shadow-xl shadow-emerald-100">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-secondary text-white shadow-lg shadow-brand-secondary/20">
                <Database className="h-5 w-5" />
              </div>
              <h4 className="font-display text-lg font-bold text-white uppercase italic tracking-tighter">Cyber Recovery</h4>
              <p className="mt-2 text-xs leading-relaxed text-emerald-200/70">
                Protect your data from ransomware with immutable snapshots and air-gapped recovery vaults.
              </p>
              <button className="mt-4 w-full rounded-lg border border-white/20 bg-white/10 py-2 text-xs font-bold text-white hover:bg-white/20 transition-all">
                Learn More
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className={cn(
            "lg:col-span-3 grid gap-6",
            viewMode === 'grid' ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
          )}>
            {filteredProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
            {filteredProducts.length === 0 && (
              <div className="col-span-full py-20 text-center">
                <Search className="mx-auto h-12 w-12 opacity-10" />
                <p className="mt-4 font-display text-xl font-bold">No storage devices found</p>
                <p className="text-sm text-slate-400 font-medium">Try searching for NAS, SAN, or specific brands.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
