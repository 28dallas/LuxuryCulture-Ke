import Link from 'next/link'
import { ProductCard } from './ProductCard'
import { Product } from '@/types'

interface ProductGridProps {
  products: Product[]
  className?: string
  viewMode?: 'grid' | 'list'
}

export function ProductGrid({ products, className, viewMode = 'grid' }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-body text-secondary-600">No products found.</p>
      </div>
    )
  }

  if (viewMode === 'list') {
    return (
      <div className={`space-y-4 ${className || ''}`}>
        {products.map((product) => (
          <div key={product.id} className="flex gap-grid-2 p-grid-2 bg-white border border-gray-200 rounded-md hover:shadow-md transition-shadow active-scale">
            <div className="w-24 h-24 flex-shrink-0">
              <img
                src={product.images[0] || '/logo2.png'}
                alt={product.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex-1">
              <Link href={`/product/${product.slug}`} className="block">
                <h3 className="font-semibold text-lg hover:text-red-600 transition-colors">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-grid-1">{product.brand}</p>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through text-sm">${product.originalPrice}</span>
                  )}
                  {product.isOnSale && (
                    <span className="bg-red-600 text-white px-grid-1 py-1 text-xs rounded">SALE</span>
                  )}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={`product-grid ${className || ''}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
