# HardwareNexus: B2C & B2B Ecommerce Blueprint

## 1. Executive Summary
HardwareNexus is a high-performance hardware marketplace designed for the Indian market. It bridges the gap between individual consumer needs (B2C) and complex enterprise infrastructure requirements (B2B).

## 2. Technical Stack
- **Frontend**: React 19, TypeScript, Tailwind CSS 4.0
- **Backend/API**: Express.js (on Node.js)
- **Database/Auth**: Firebase Firestore & Firebase Auth
- **AI Engine**: Gemini 1.5 Flash (Smart search, spec comparison, and automated RFQ summaries)
- **Styling**: Radical "Hardware Specialist" aesthetic using dark surfaces, monospace accents, and precision-focused UI grids.

## 3. Site Map
- **Public**:
  - Home (Featured items, Hero banners)
  - Catalog (Category-specific landing pages)
  - Product Details (Spec-heavy, downloadable datasheets)
  - Search Results (AI-optimized filtering)
- **User/Corporate**:
  - User Dashboard (Orders, Wishlist)
  - Business Portal (B2B only: RFQ, Credit Limits, Contract Pricing)
  - Support/RMA Ticket System
- **Checkout**:
  - Cart -> Address -> GST Selection -> Payment -> Confirmation
- **Admin (CMS)**:
  - Inventory Control, Order Fulfillment, Analytics.

## 4. Database Schema (Firestore)
- `/products/{productId}`: Details, pricing (MSRP + Bulk tiers), specs.
- `/categories/{categoryId}`: Metadata and parent-child relationships.
- `/users/{userId}`: Profiles (Standard vs. Business tags).
- `/orders/{orderId}`: Transaction history, tracking status, GST invoices.
- `/rfq/{rfqId}`: Corporate quotation requests.
- `/inventory/{productId}`: Real-time stock levels across warehouses.

## 5. Security & Compliance
- **GST Compliance**: Automated tax calculation for India (Inner-state/Inter-state SGST/CGST/IGST).
- **PCI-DSS**: Leveraging secure payment gateways (UPI/Cards).
- **RBAC**: Strict role-based access for Admin, Sales managers, and Corporate buyers.

## 6. Future Scalability
- **Phase 2**: Multi-vendor marketplace support.
- **Phase 3**: IoT-based inventory tracking integration.
- **Phase 4**: AR-powered "See in Office" visualization for larger infrastructure (Servers/Workstations).
