import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Zap, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { formatINR, cn } from '../lib/utils';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:border-brand-secondary/50 shadow-sm hover:shadow-xl"
    >
      <Link to={`/product/${product.id}`} className="relative aspect-square overflow-hidden bg-slate-50">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.isFeatured && (
          <div className="absolute left-2 top-2 rounded-md bg-brand-secondary px-2 py-1 font-display text-[10px] font-bold text-white uppercase tracking-tighter shadow-lg shadow-brand-secondary/20">
            Enterprise Grade
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4 text-slate-900">
        <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-secondary">
          {product.brand}
        </p>
        <Link to={`/product/${product.id}`} className="mt-1 line-clamp-1 font-display text-lg font-bold hover:text-brand-secondary">
          {product.name}
        </Link>
        <p className="mt-1 line-clamp-2 text-xs text-slate-500">
          {product.description}
        </p>

        <div className="mt-auto pt-4">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] text-slate-400 uppercase tracking-tighter">MSRP Starts at</p>
              <p className="text-xl font-bold text-slate-900">{formatINR(product.price)}</p>
            </div>
            {product.bulkPricing && (
              <div className="flex items-center gap-1 rounded bg-brand-secondary/10 px-1.5 py-0.5 text-[10px] font-bold text-brand-secondary">
                <Zap className="h-3 w-3" /> BULK SAVINGS
              </div>
            )}
          </div>

          <div className="mt-4 flex gap-2">
            <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-100 py-2 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-200 active:scale-95">
              <ShoppingCart className="h-4 w-4" /> Add
            </button>
            <Link 
              to={`/product/${product.id}`}
              className="flex items-center justify-center rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 transition-colors hover:border-brand-secondary hover:text-brand-secondary"
            >
              <BarChart2 className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
