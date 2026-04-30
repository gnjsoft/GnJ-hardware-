import { useState, useMemo } from 'react';
import { Filter, Search, ChevronDown, LayoutGrid, List as ListIcon, SlidersHorizontal } from 'lucide-react';
import { MOCK_PRODUCTS } from '@/src/mockData';
import { ProductCategory } from '@/src/types';
import ProductCard from '../components/ProductCard';
import { cn } from '@/src/lib/utils';

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(p => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.sku.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 pb-20 pt-8 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="mb-8 flex items-center gap-2 text-xs font-medium text-slate-400 uppercase tracking-widest">
          <span>Home</span>
          <span>/</span>
          <span className="text-brand-secondary">Catalog</span>
          {selectedCategory !== 'All' && (
            <>
              <span>/</span>
              <span className="text-slate-900">{selectedCategory}</span>
            </>
          )}
        </div>

        <div className="mb-12">
          <h1 className="font-display text-4xl font-bold text-slate-900 sm:text-6xl">
            HARDWARE <span className="text-brand-secondary italic">CATALOG</span>
          </h1>
          <p className="mt-4 max-w-2xl text-slate-500">
            Explore {MOCK_PRODUCTS.length} specialized configurations ready for deployment.
            Filter by category, brand, or technical specification.
          </p>
        </div>

        {/* Toolbar */}
        <div className="mb-8 flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between shadow-sm">
          <div className="flex flex-wrap items-center gap-2">
            {(['All', ...Object.values(ProductCategory)] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-bold transition-all",
                  selectedCategory === cat 
                    ? "bg-brand-secondary text-white shadow-md shadow-brand-secondary/20" 
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
              >
                {cat}
              </button>
            ))}
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
              <SlidersHorizontal className="h-4 w-4" /> Sort By
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Sidebar Filters */}
          <aside className="hidden space-y-8 lg:block">
            <div>
              <h3 className="mb-4 font-display text-xs font-bold uppercase tracking-widest text-slate-400">Brand</h3>
              <div className="space-y-2">
                {['GLOBAL', 'OPTIC', 'SECURE', 'LENOVO', 'DELL', 'HP'].map(brand => (
                  <label key={brand} className="flex items-center gap-2 text-sm text-slate-600 hover:text-brand-secondary cursor-pointer">
                    <input type="checkbox" className="accent-brand-secondary" />
                    {brand}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-display text-xs font-bold uppercase tracking-widest text-slate-400">Price Range</h3>
              <input type="range" className="w-full accent-brand-secondary" />
              <div className="mt-2 flex justify-between text-[10px] text-slate-400">
                <span>₹10,000</span>
                <span>₹10,00,000+</span>
              </div>
            </div>

            <div className="rounded-xl bg-brand-secondary/5 p-6 border border-brand-secondary/20">
              <h4 className="font-display font-bold text-brand-secondary uppercase italic tracking-tighter">Corporate Bulk Orders</h4>
              <p className="mt-2 text-xs text-slate-500">Need components for your entire organization? Get custom bulk pricing instantly.</p>
              <button className="mt-4 w-full rounded-lg bg-brand-secondary py-2 text-xs font-bold text-white hover:brightness-110 shadow-lg shadow-brand-secondary/20 transition-all">
                Request RFQ
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
                <p className="mt-4 font-display text-xl font-bold">No products found</p>
                <p className="text-sm text-slate-400">Try adjusting your filters or search query.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
