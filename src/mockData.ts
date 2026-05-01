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
  },
  {
    id: '6',
    name: 'OptiPlex 7000 Micro Desktop',
    brand: 'GLOBAL',
    category: ProductCategory.DESKTOPS,
    description: 'Ultra-compact desktop with high performance. Perfect for modern minimalist workspaces.',
    price: 52000,
    images: ['https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80&w=600'],
    stock: 50,
    sku: 'GP-DSK-OPT7',
    tags: ['Micro', 'Business', 'Desktop'],
    specs: [
      { label: 'CPU', value: 'Intel Core i5-13500T' },
      { label: 'RAM', value: '16GB DDR5' },
      { label: 'Storage', value: '512GB NVMe' }
    ]
  },
  {
    id: '7',
    name: 'XPS Desktop 8960 High-Performance',
    brand: 'DELL',
    category: ProductCategory.DESKTOPS,
    description: 'A powerful machine designed to keep up with your biggest ideas. Liquid cooling and expansion support.',
    price: 125000,
    images: ['https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=600'],
    stock: 20,
    sku: 'GP-DSK-XPS89',
    tags: ['Performance', 'Tower', 'Desktop'],
    specs: [
      { label: 'CPU', value: 'Intel Core i9-13900' },
      { label: 'RAM', value: '64GB DDR5' },
      { label: 'GPU', value: 'NVIDIA RTX 4070 12GB' }
    ]
  },
  {
    id: '8',
    name: 'Pavilion Gaming Tower TG01',
    brand: 'HP',
    category: ProductCategory.DESKTOPS,
    description: 'Sleek, space-saving tower that delivers high-tier performance for creators and gamers alike.',
    price: 89000,
    images: ['https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&q=80&w=600'],
    stock: 15,
    sku: 'GP-DSK-TG01',
    tags: ['Creator', 'Gaming', 'Desktop'],
    specs: [
      { label: 'CPU', value: 'Ryzen 7 5700G' },
      { label: 'RAM', value: '32GB DDR4' },
      { label: 'Storage', value: '1TB SSD + 2TB HDD' }
    ]
  },
  {
    id: '9',
    name: 'Precision 7960 Tower Workstation',
    brand: 'GLOBAL',
    category: ProductCategory.WORKSTATIONS,
    description: 'Scalable workstation for complex simulation and rendering. Dual-processor support and massive memory capacity.',
    price: 345000,
    images: ['https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600'],
    stock: 5,
    sku: 'GP-WRK-P79',
    tags: ['Rendering', 'Dual-CPU', 'Enterprise'],
    specs: [
      { label: 'CPU', value: 'Intel Xeon W9-3495X' },
      { label: 'RAM', value: '128GB ECC DDR5' },
      { label: 'GPU', value: 'NVIDIA RTX 6000 Ada' }
    ]
  },
  {
    id: '10',
    name: 'ThinkStation P620 Threadripper',
    brand: 'GLOBAL',
    category: ProductCategory.WORKSTATIONS,
    description: 'Powered by AMD Threadripper PRO, this workstation offers high-frequency and multi-core performance.',
    price: 285000,
    images: ['https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600'],
    stock: 8,
    sku: 'GP-WRK-P620',
    tags: ['Multi-threaded', 'Engineering', 'Workstation'],
    specs: [
      { label: 'CPU', value: 'Threadripper PRO 5995WX' },
      { label: 'RAM', value: '64GB RDIMM' },
      { label: 'GPU', value: 'NVIDIA RTX A5000' }
    ]
  },
  {
    id: '11',
    name: 'Mac Studio Ultra',
    brand: 'GLOBAL',
    category: ProductCategory.WORKSTATIONS,
    description: 'Unprecedented performance for video editors and creative professionals in a remarkably compact form.',
    price: 399000,
    images: ['https://images.unsplash.com/photo-164741979330d-89c7a5397914?auto=format&fit=crop&q=80&w=600'],
    stock: 12,
    sku: 'GP-WRK-MCU',
    tags: ['Creative', 'Silent', 'Mac'],
    specs: [
      { label: 'Chip', value: 'M2 Ultra 24-Core' },
      { label: 'Unif. Memory', value: '128GB' },
      { label: 'Storage', value: '4TB SSD' }
    ]
  },
  {
    id: '12',
    name: 'PowerEdge R760 Rack Server',
    brand: 'GLOBAL',
    category: ProductCategory.SERVERS,
    description: 'Highly versatile 2U rack server designed for demanding workloads including VDI, database, and AI.',
    price: 580000,
    images: ['https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=600'],
    stock: 4,
    sku: 'GP-SVR-R760',
    tags: ['Rackmount', 'Enterprise', 'Dual-Socket'],
    specs: [
      { label: 'CPU', value: '2x Intel Xeon Gold 6430' },
      { label: 'RAM', value: '256GB DDR5 RDIMM' },
      { label: 'Storage', value: '8x 1.92TB NVMe SSD' }
    ]
  },
  {
    id: '13',
    name: 'ProLiant DL380 Gen11',
    brand: 'GLOBAL',
    category: ProductCategory.SERVERS,
    description: 'The industry standard for multi-workload compute. Advanced security and simplified management.',
    price: 495000,
    images: ['https://images.unsplash.com/photo-1563770660941-20978e870e9b?auto=format&fit=crop&q=80&w=600'],
    stock: 6,
    sku: 'GP-SVR-DL380',
    tags: ['Mission Critical', 'Scalable', 'HPE'],
    specs: [
      { label: 'CPU', value: 'Intel Xeon Silver 4410Y' },
      { label: 'RAM', value: '128GB DDR5' },
      { label: 'Storage', value: '4x 480GB SATA SSD' }
    ]
  },
  {
    id: '14',
    name: 'Apollo GPU Deep Learning Node',
    brand: 'GLOBAL',
    category: ProductCategory.SERVERS,
    description: 'High-density GPU server optimized for deep learning, training, and inference workloads.',
    price: 1250000,
    images: ['https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&q=80&w=600'],
    stock: 2,
    sku: 'GP-SVR-GPU8',
    tags: ['AI/ML', 'GPU Node', 'High Density'],
    specs: [
      { label: 'CPU', value: '2x AMD EPYC 9554' },
      { label: 'GPU', value: '8x NVIDIA H100 80GB' },
      { label: 'RAM', value: '1TB DDR5' }
    ]
  },
  {
    id: '15',
    name: 'Nexus 9300 Cloud Scale Switch',
    brand: 'GLOBAL',
    category: ProductCategory.NETWORKING,
    description: 'Next-generation fixed configuration switch for high-density 100G and 40G deployments.',
    price: 320000,
    images: ['https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600'],
    stock: 8,
    sku: 'GP-NET-N93',
    tags: ['Core Switch', '100G', 'Cloud Scale'],
    specs: [
      { label: 'Throughput', value: '3.6 Tbps' },
      { label: 'Ports', value: '48x 25G SFP28' },
      { label: 'Latency', value: '< 1ms' }
    ]
  },
  {
    id: '16',
    name: 'Meraki MR57 Wi-Fi 6E AP',
    brand: 'GLOBAL',
    category: ProductCategory.NETWORKING,
    description: 'High-performance cloud-managed wireless access point with dedicated security radio.',
    price: 85000,
    images: ['https://images.unsplash.com/photo-1551703599-6b3e8379aa8b?auto=format&fit=crop&q=80&w=600'],
    stock: 25,
    sku: 'GP-NET-MR57',
    tags: ['Wi-Fi 6E', 'Cloud Managed', 'Wireless'],
    specs: [
      { label: 'Band', value: '6GHz / 5GHz / 2.4GHz' },
      { label: 'Throughput', value: '7.8 Gbps' },
      { label: 'PoE', value: '802.3at' }
    ]
  },
  {
    id: '17',
    name: 'FortiGate 600F Firewall',
    brand: 'GLOBAL',
    category: ProductCategory.NETWORKING,
    description: 'Next-generation firewall provides high-speed threat protection and SSL inspection.',
    price: 450000,
    images: ['https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=600'],
    stock: 3,
    sku: 'GP-NET-FG600',
    tags: ['Security', 'Next-Gen Firewall', 'Threat Protection'],
    specs: [
      { label: 'Threat Protection', value: '10 Gbps' },
      { label: 'SSL Inspection', value: '8 Gbps' },
      { label: 'Interfaces', value: '4x 10G SFP+' }
    ]
  },
  {
    id: '18',
    name: 'PowerVault ME5024 Storage',
    brand: 'GLOBAL',
    category: ProductCategory.STORAGE,
    description: 'Entry-level block storage array that is purpose-built and optimized for SAN/DAS workloads.',
    price: 685000,
    images: ['https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=600'],
    stock: 2,
    sku: 'GP-STR-ME5',
    tags: ['SAN', 'DAS', 'Enterprise Storage'],
    specs: [
      { label: 'Capacity', value: 'Up to 6PB' },
      { label: 'Drives', value: '24x 2.5" Bays' },
      { label: 'Controller', value: 'Dual Active-Active' }
    ]
  },
  {
    id: '19',
    name: 'Unity XT 380F All-Flash',
    brand: 'GLOBAL',
    category: ProductCategory.STORAGE,
    description: 'All-flash unified storage designed for performance and efficiency with built-in data reduction.',
    price: 1250000,
    images: ['https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=600'],
    stock: 1,
    sku: 'GP-STR-UNT',
    tags: ['All-Flash', 'Unified', 'High Performance'],
    specs: [
      { label: 'Protocol', value: 'Block, File, VVols' },
      { label: 'Max Cache', value: '128GB' },
      { label: 'Data Reduction', value: 'Up to 4:1' }
    ]
  },
  {
    id: '20',
    name: 'StoreEasy 1660 NAS',
    brand: 'GLOBAL',
    category: ProductCategory.STORAGE,
    description: 'Optimized, efficient, secure, and highly available storage for file sharing and application storage.',
    price: 320000,
    images: ['https://images.unsplash.com/photo-1563770660941-20978e870e9b?auto=format&fit=crop&q=80&w=600'],
    stock: 5,
    sku: 'GP-STR-NAS',
    tags: ['NAS', 'File Storage', 'Windows Storage'],
    specs: [
      { label: 'OS', value: 'Windows Storage Server' },
      { label: 'Capacity', value: '16TB Raw' },
      { label: 'RAM', value: '16GB DDR4' }
    ]
  },
  {
    id: '21',
    name: 'MacBook Pro 16-inch (M3 Max)',
    brand: 'GLOBAL',
    category: ProductCategory.LAPTOPS,
    description: 'The most powerful MacBook ever. Featuring the M3 Max chip, designed for massive workflows.',
    price: 349900,
    images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=600'],
    stock: 10,
    sku: 'GP-LAP-MBP16',
    tags: ['Creative', 'M3 Max', 'Premium'],
    specs: [
      { label: 'Chip', value: 'M3 Max 16-Core CPU' },
      { label: 'GPU', value: '40-Core GPU' },
      { label: 'RAM', value: '48GB Unified Memory' }
    ]
  },
  {
    id: '22',
    name: 'Dell Latitude 5440 Business',
    brand: 'DELL',
    category: ProductCategory.LAPTOPS,
    description: 'Scalable performance in a portable 14-inch design. Built with sustainable materials.',
    price: 95000,
    images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=600'],
    stock: 35,
    sku: 'GP-LAP-LAT54',
    tags: ['Business', 'Durable', 'Enterprise'],
    specs: [
      { label: 'CPU', value: 'Intel Core i7-1355U' },
      { label: 'RAM', value: '16GB DDR5' },
      { label: 'Display', value: '14" FHD Anti-Glare' }
    ]
  },
  {
    id: '23',
    name: 'HP EliteBook 840 G10',
    brand: 'HP',
    category: ProductCategory.LAPTOPS,
    description: 'Premium business laptop with advanced collaboration features and AI-based security.',
    price: 115000,
    images: ['https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=600'],
    stock: 22,
    sku: 'GP-LAP-ELITE8',
    tags: ['Collaborative', 'Secure', 'Thin & Light'],
    specs: [
      { label: 'CPU', value: 'Intel Core i5-1335U' },
      { label: 'RAM', value: '16GB LPDDR5' },
      { label: 'Security', value: 'HP Wolf Security' }
    ]
  },
  {
    id: '24',
    name: 'FortiGate 100F Next-Generation Firewall',
    brand: 'GLOBAL',
    category: ProductCategory.SECURITY,
    description: 'High-performance network security solution for medium to large enterprises. AI-powered threat protection.',
    price: 385000,
    images: ['https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=600'],
    stock: 5,
    sku: 'GP-SEC-FG100',
    tags: ['Next-Gen', 'Enterprise', 'Security'],
    specs: [
      { label: 'Threat Protection', value: '1 Gbps' },
      { label: 'SSL Inspection', value: '1 Gbps' },
      { label: 'Interfaces', value: '22x GE RJ45' }
    ]
  },
  {
    id: '25',
    name: 'Cisco Firepower 1120',
    brand: 'GLOBAL',
    category: ProductCategory.SECURITY,
    description: 'Protect your business with a firewall that delivers superior threat defense and easy management.',
    price: 245000,
    images: ['https://images.unsplash.com/photo-1563770660941-20978e870e9b?auto=format&fit=crop&q=80&w=600'],
    stock: 8,
    sku: 'GP-SEC-FP11',
    tags: ['Cisco', 'Mid-Market', 'Robust'],
    specs: [
      { label: 'Throughput', value: '2.3 Gbps' },
      { label: 'VPN Throughput', value: '1.2 Gbps' },
      { label: 'Form Factor', value: '1U Rack' }
    ]
  },
  {
    id: '26',
    name: 'Palo Alto PA-440',
    brand: 'GLOBAL',
    category: ProductCategory.SECURITY,
    description: 'ML-Powered Next-Generation Firewall designed for small offices and branch locations.',
    price: 185000,
    images: ['https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=600'],
    stock: 12,
    sku: 'GP-SEC-PA44',
    tags: ['ML-Powered', 'Branch Office', 'Cloud Security'],
    specs: [
      { label: 'App-ID Throughput', value: '2.2 Gbps' },
      { label: 'Threat Prevention', value: '1 Gbps' },
      { label: 'Management', value: 'Panorama Supported' }
    ]
  },
  {
    id: '27',
    name: 'Lumix 4K AI Dome Camera',
    brand: 'GLOBAL',
    category: ProductCategory.SURVEILLANCE,
    description: 'High-resolution 4K dome camera with AI-powered human and vehicle detection. IP67 rated for all-weather use.',
    price: 12500,
    images: ['https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80&w=600'],
    stock: 50,
    sku: 'GP-SUR-LUM4',
    tags: ['4K', 'AI Detection', 'Dome'],
    specs: [
      { label: 'Resolution', value: '8MP (3840x2160)' },
      { label: 'Night Vision', value: 'Up to 30m' },
      { label: 'Storage', value: 'MicroSD up to 256GB' }
    ]
  },
  {
    id: '28',
    name: 'Sentinel Pro PTZ Speed Dome',
    brand: 'GLOBAL',
    category: ProductCategory.SURVEILLANCE,
    description: 'Professional-grade Pan-Tilt-Zoom camera with 25x optical zoom and intelligent tracking capabilities.',
    price: 45000,
    images: ['https://images.unsplash.com/photo-1524338198850-8a2ff63a6104?auto=format&fit=crop&q=80&w=600'],
    stock: 15,
    sku: 'GP-SUR-PTZ25',
    tags: ['PTZ', 'Optical Zoom', 'Long Range'],
    specs: [
      { label: 'Zoom', value: '25x Optical, 16x Digital' },
      { label: 'PTZ Range', value: '360° Pan, -15° to 90° Tilt' },
      { label: 'Defog', value: 'Optical Defog Supported' }
    ]
  },
  {
    id: '29',
    name: 'NVR 16-Channel 4K Storage',
    brand: 'GLOBAL',
    category: ProductCategory.SURVEILLANCE,
    description: 'Network Video Recorder supporting up to 16 cameras at 4K resolution. HDMI and VGA output.',
    price: 32000,
    images: ['https://images.unsplash.com/photo-1551703599-6b3e8379aa8b?auto=format&fit=crop&q=80&w=600'],
    stock: 20,
    sku: 'GP-SUR-NVR16',
    tags: ['NVR', '16-Channel', 'Security Station'],
    specs: [
      { label: 'Incoming Bandwidth', value: '160 Mbps' },
      { label: 'SATA', value: '2x SATA interfaces' },
      { label: 'PoE Ports', value: '16x 10/100 Mbps' }
    ]
  },
  {
    id: '30',
    name: 'Biometric Fingerprint Reader X9',
    brand: 'GLOBAL',
    category: ProductCategory.ACCESS_CONTROL,
    description: 'Advanced biometric access control with ultra-fast fingerprint recognition and RFID card support.',
    price: 8500,
    images: ['https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=600'],
    stock: 40,
    sku: 'GP-ACC-X9',
    tags: ['Biometric', 'Fingerprint', 'Secure'],
    specs: [
      { label: 'Capacity', value: '3,000 Fingerprints' },
      { label: 'Verification', value: '< 0.5s' },
      { label: 'Interface', value: 'TCP/IP, USB' }
    ]
  },
  {
    id: '31',
    name: 'Face Recognition Terminal Pro',
    brand: 'GLOBAL',
    category: ProductCategory.ACCESS_CONTROL,
    description: 'Contactless face recognition terminal with thermal detection and mask wearing check.',
    price: 32000,
    images: ['https://images.unsplash.com/photo-1563770660941-20978e870e9b?auto=format&fit=crop&q=80&w=600'],
    stock: 12,
    sku: 'GP-ACC-FACE',
    tags: ['AI Vision', 'Facial Recognition', 'Thermal'],
    specs: [
      { label: 'Face Capacity', value: '50,000 Faces' },
      { label: 'Distance', value: '0.3m to 2m' },
      { label: 'Display', value: '7" Touch Screen' }
    ]
  },
  {
    id: '32',
    name: 'Smart Magnetic Lock (600lbs)',
    brand: 'GLOBAL',
    category: ProductCategory.ACCESS_CONTROL,
    description: 'High-strength magnetic lock for glass, wooden, and metal doors. Fail-safe operation.',
    price: 4500,
    images: ['https://images.unsplash.com/photo-1551703599-6b3e8379aa8b?auto=format&fit=crop&q=80&w=600'],
    stock: 100,
    sku: 'GP-ACC-MAG600',
    tags: ['Hardware', 'Maglock', 'Fail-Safe'],
    specs: [
      { label: 'Holding Force', value: '280kg (600lbs)' },
      { label: 'Voltage', value: '12V DC / 24V DC' },
      { label: 'Sensor', value: 'Lock Status Output' }
    ]
  },
  {
    id: '33',
    name: 'LaserJet Pro M404dn',
    brand: 'GLOBAL',
    category: ProductCategory.PRINTING,
    description: 'B&W laser printer designed for small to medium-sized businesses with auto duplex printing.',
    price: 24500,
    images: ['https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=600'],
    stock: 25,
    sku: 'GP-PRN-M404',
    tags: ['Laser', 'Monochrome', 'Duplex'],
    specs: [
      { label: 'Print Speed', value: 'Up to 40 ppm' },
      { label: 'Resolution', value: '1200 x 1200 dpi' },
      { label: 'Connectivity', value: 'Ethernet, USB, WiFi' }
    ]
  },
  {
    id: '34',
    name: 'OfficeJet Pro 9015 All-in-One',
    brand: 'GLOBAL',
    category: ProductCategory.PRINTING,
    description: 'High-performance color inkjet printer with scan, copy, and fax capabilities for busy offices.',
    price: 32000,
    images: ['https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600'],
    stock: 15,
    sku: 'GP-PRN-9015',
    tags: ['Inkjet', 'Color', 'All-in-One'],
    specs: [
      { label: 'Functions', value: 'Print, Scan, Copy, Fax' },
      { label: 'Print Speed', value: '22 ppm Color' },
      { label: 'Scanner', value: '1200 dpi Optical' }
    ]
  },
  {
    id: '35',
    name: 'Enterprise Flow MFP M635z',
    brand: 'GLOBAL',
    category: ProductCategory.PRINTING,
    description: 'Enterprise-grade monochrome multi-function printer with advanced management and security features.',
    price: 185000,
    images: ['https://images.unsplash.com/photo-1563770660941-20978e870e9b?auto=format&fit=crop&q=80&w=600'],
    stock: 5,
    sku: 'GP-PRN-M635',
    tags: ['Enterprise', 'MFP', 'High Capacity'],
    specs: [
      { label: 'Print Speed', value: 'Up to 65 ppm' },
      { label: 'Paper Tray', value: '3,200 Sheets Max' },
      { label: 'Display', value: '8" Color Touchscreen' }
    ]
  },
  {
    id: '36',
    name: 'Standard Capacity Toner Cartridge',
    brand: 'GLOBAL',
    category: ProductCategory.CONSUMABLES,
    description: 'High-quality black toner cartridge for LaserJet Pro series. Delivers sharp text and consistent performance.',
    price: 4500,
    images: ['https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=600'],
    stock: 200,
    sku: 'GP-CON-TNR1',
    tags: ['Toner', 'Black', 'Standard'],
    specs: [
      { label: 'Page Yield', value: '3,000 Pages' },
      { label: 'Color', value: 'Black' },
      { label: 'Type', value: 'Original Toner' }
    ]
  },
  {
    id: '37',
    name: 'Premium A4 Copy Paper (500 Sheets)',
    brand: 'GLOBAL',
    category: ProductCategory.CONSUMABLES,
    description: 'High-brightness, 80gsm A4 paper suitable for all printers and copiers. Jam-free performance.',
    price: 450,
    images: ['https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&q=80&w=600'],
    stock: 500,
    sku: 'GP-CON-PAPER',
    tags: ['Paper', 'A4', 'Office Supplies'],
    specs: [
      { label: 'Weight', value: '80 gsm' },
      { label: 'Size', value: 'A4 (210 x 297 mm)' },
      { label: 'Brightness', value: '102%' }
    ]
  },
  {
    id: '38',
    name: 'Optical Mouse & Keyboard Bundle',
    brand: 'GLOBAL',
    category: ProductCategory.CONSUMABLES,
    description: 'Durable USB wired keyboard and mouse set for daily office use. Plug-and-play simplicity.',
    price: 1200,
    images: ['https://images.unsplash.com/photo-1541140532154-b024d711b90a?auto=format&fit=crop&q=80&w=600'],
    stock: 150,
    sku: 'GP-CON-KBMS',
    tags: ['Peripherals', 'Wired', 'Value'],
    specs: [
      { label: 'Interface', value: 'USB 2.0' },
      { label: 'Keys', value: 'Full-size 104 keys' },
      { label: 'DPI', value: '1000 DPI Optical' }
    ]
  },
  {
    id: '39',
    name: 'Logitech MX Master 3S',
    brand: 'GLOBAL',
    category: ProductCategory.ACCESSORIES,
    description: 'Advanced wireless mouse with MagSpeed scrolling and 8K DPI tracking on any surface.',
    price: 9500,
    images: ['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=600'],
    stock: 45,
    sku: 'GP-ACC-MXM3S',
    tags: ['Wireless', 'Precision', 'Ergonomic'],
    specs: [
      { label: 'Sensor', value: 'Darkfield High Precision' },
      { label: 'Buttons', value: '7 Customizable' },
      { label: 'Connectivity', value: 'Bluetooth & Logi Bolt' }
    ]
  },
  {
    id: '40',
    name: 'Dell Premier Wireless ANC Headset',
    brand: 'GLOBAL',
    category: ProductCategory.ACCESSORIES,
    description: 'High-quality wireless headset with Active Noise Cancellation for clear communication in busy offices.',
    price: 15500,
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600'],
    stock: 30,
    sku: 'GP-ACC-HSET',
    tags: ['Audio', 'ANC', 'Wireless'],
    specs: [
      { label: 'Noise Cancellation', value: 'Active (ANC)' },
      { label: 'Battery Life', value: 'Up to 35 hours' },
      { label: 'Microphone', value: 'Dual Beamforming' }
    ]
  },
  {
    id: '41',
    name: 'Thunderbolt 4 Docking Station',
    brand: 'GLOBAL',
    category: ProductCategory.ACCESSORIES,
    description: 'Universal docking station delivering more power, data speed, and video resolution with 12 ports.',
    price: 28000,
    images: ['https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600'],
    stock: 20,
    sku: 'GP-ACC-TB4D',
    tags: ['Docking', 'Thunderbolt', 'Productivity'],
    specs: [
      { label: 'Ports', value: '12-in-1 Connectivity' },
      { label: 'Power Delivery', value: '90W Laptop Charging' },
      { label: 'Video Output', value: 'Dual 4K / Single 8K' }
    ]
  }
];
