import { useState, useMemo } from 'react';
import { Search, LayoutGrid, List as ListIcon, SlidersHorizontal, Laptop } from 'lucide-react';
import { MOCK_PRODUCTS } from '../mockData';
import { ProductCategory } from '../types';
import ProductCard from '../components/ProductCard';
import { cn } from '../lib/utils';

export default function Laptops() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(p => {
      const isLaptop = p.category === ProductCategory.LAPTOPS;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.sku.toLowerCase().includes(searchQuery.toLowerCase());
      return isLaptop && matchesSearch;
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
          <span className="text-brand-secondary">Laptops</span>
        </div>

        <div className="mb-12">
          <h1 className="font-display text-4xl font-bold text-slate-900 sm:text-6xl">
            PREMIUM <span className="text-brand-secondary italic">LAPTOPS</span>
          </h1>
          <p className="mt-4 max-w-2xl text-slate-500 font-medium">
            Power and portability redefined. From ultra-light executive notebooks to high-performance creative workstations, 
            built for the mobile professional who never compromises.
          </p>
        </div>

        {/* Toolbar */}
        <div className="mb-8 flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between shadow-sm">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search laptops..." 
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
              <h3 className="mb-4 font-display text-xs font-bold uppercase tracking-widest text-slate-400">Usage Type</h3>
              <div className="space-y-3">
                {['Business Ultrabooks', 'Mobile Workstations', 'Creative Pro', 'Convertible 2-in-1', 'Rugged Laptops'].map(cat => (
                  <button key={cat} className="block text-sm font-medium text-slate-600 transition-colors hover:text-brand-secondary text-left">
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-brand-secondary/20 bg-amber-900 p-6 shadow-xl shadow-amber-100">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-secondary text-white shadow-lg shadow-brand-secondary/20">
                <Laptop className="h-5 w-5" />
              </div>
              <h4 className="font-display text-lg font-bold text-white uppercase italic tracking-tighter text-amber-50">Global Warranty</h4>
              <p className="mt-2 text-xs leading-relaxed text-amber-100/70">
                Traveling for work? Our premium laptops come with Next Business Day Onsite Global Warranty support.
              </p>
              <button className="mt-4 w-full rounded-lg border border-white/20 bg-white/10 py-2 text-xs font-bold text-white hover:bg-white/20 transition-all">
                Warranty Check
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
                <p className="mt-4 font-display text-xl font-bold">No laptops found</p>
                <p className="text-sm text-slate-400 font-medium">Try searching for ultrabooks, workstations, or specific models.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
