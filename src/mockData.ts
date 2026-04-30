import { Product, ProductCategory } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Precision Pro-Workstation X1',
    brand: 'GLOBAL',
    category: ProductCategory.WORKSTATIONS,
    description: 'Extreme performance workstation powered by AMD Threadripper PRO 5000 series with 128GB ECC RAM.',
    price: 345000,
    images: ['https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=600'],
    stock: 5,
    isFeatured: true,
    sku: 'GP-WK-X1',
    tags: ['Extreme', 'ECC', 'Workstation'],
    specs: [
      { label: 'CPU', value: '64-Core Threadripper PRO' },
      { label: 'RAM', value: '128GB DDR4 ECC' },
      { label: 'GPU', value: 'NVIDIA RTX A6000' }
    ],
    bulkPricing: [
      { minQuantity: 5, price: 320000 },
      { minQuantity: 10, price: 295000 }
    ]
  },
  {
    id: '2',
    name: 'Precision Rack-Optic 2U',
    brand: 'OPTIC',
    category: ProductCategory.SERVERS,
    description: 'High-density rack server with dual Intel Xeon Scalable processors and NVMe storage redundancy.',
    price: 480000,
    images: ['https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=600'],
    stock: 12,
    sku: 'GP-SRV-2U',
    tags: ['Server', 'Rack', 'Dual-CPU'],
    specs: [
      { label: 'CPU', value: '2x Intel Xeon Platinum' },
      { label: 'Storage', value: '10x 2TB NVMe RAID-10' },
      { label: 'Power', value: 'Dual 1100W Redundant' }
    ]
  },
  {
    id: '3',
    name: 'SecureGate Firewall FW-500',
    brand: 'SECURE',
    category: ProductCategory.SECURITY,
    description: 'Next-gen enterprise firewall with AI-threat detection and 10Gbps throughput.',
    price: 85000,
    images: ['https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600'],
    stock: 25,
    sku: 'GP-FW-500',
    tags: ['Security', 'Firewall', '10Gbps'],
    specs: [
      { label: 'Throughput', value: '10 Gbps' },
      { label: 'Connections', value: '500,000 Concurrent' },
      { label: 'VPN', value: 'IPsec State-sync' }
    ]
  },
  {
    id: '4',
    name: 'ThinkPad Z13 Gen 2 Professional',
    brand: 'LENOVO',
    category: ProductCategory.LAPTOPS,
    description: 'The ultimate business flagship. ultra-portable design with high-performance internals.',
    price: 155000,
    images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=600'],
    stock: 40,
    sku: 'GP-LAP-Z13',
    tags: ['Portable', 'Business', 'Premium'],
    specs: [
      { label: 'CPU', value: 'Ryzen 7 Pro' },
      { label: 'Display', value: '2.8K OLED 100% DCI-P3' },
      { label: 'Weight', value: '1.26 kg' }
    ]
  },
  {
    id: '5',
    name: 'NetworkSwitch 48P PoE Layer-3',
    brand: 'GLOBAL',
    category: ProductCategory.NETWORKING,
    description: 'Managed 48-port PoE+ gigabit switch with 4x 10G SFP+ uplink ports.',
    price: 64000,
    images: ['https://images.unsplash.com/photo-1614064641938-3bcee52a6a5e?auto=format&fit=crop&q=80&w=600'],
    stock: 18,
    sku: 'GP-SW-48P',
    tags: ['PoE', 'Switch', 'Layer-3'],
    specs: [
      { label: 'Ports', value: '48 RJ45 + 4 SFP+' },
      { label: 'Power Budget', value: '740W PoE+' },
      { label: 'Management', value: 'Layer-3 Full Stack' }
    ]
  }
];
