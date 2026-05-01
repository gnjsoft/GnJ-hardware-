/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Desktops from './pages/Desktops';
import Workstations from './pages/Workstations';
import Servers from './pages/Servers';
import Networking from './pages/Networking';
import Storage from './pages/Storage';
import Laptops from './pages/Laptops';
import Firewalls from './pages/Firewalls';
import Account from './pages/Account';
import FirebaseStatusBanner from './components/FirebaseStatusBanner';

import { AuthProvider } from './lib/AuthProvider';

// Placeholder for other pages to be implemented
const Placeholder = ({ name }: { name: string }) => (
  <div className="flex min-h-[60vh] items-center justify-center bg-brand-primary text-white">
    <div className="text-center">
      <h1 className="text-4xl font-bold">{name} Page</h1>
      <p className="mt-4 text-brand-muted">This module is coming soon.</p>
    </div>
  </div>
);

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex min-h-screen flex-col selection:bg-brand-secondary selection:text-black">
          <FirebaseStatusBanner />
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/desktops" element={<Desktops />} />
              <Route path="/workstations" element={<Workstations />} />
              <Route path="/servers" element={<Servers />} />
              <Route path="/networking" element={<Networking />} />
              <Route path="/storage" element={<Storage />} />
              <Route path="/laptops" element={<Laptops />} />
              <Route path="/firewalls" element={<Firewalls />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/category/:id" element={<Catalog />} />
              <Route path="/product/:id" element={<Placeholder name="Product" />} />
              <Route path="/cart" element={<Placeholder name="Shopping Cart" />} />
              <Route path="/checkout" element={<Placeholder name="Checkout" />} />
              <Route path="/account" element={<Account />} />
              <Route path="/corporate" element={<Placeholder name="Corporate Portal" />} />
              <Route path="/support" element={<Placeholder name="Support" />} />
              <Route path="*" element={<Placeholder name="404 Not Found" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

