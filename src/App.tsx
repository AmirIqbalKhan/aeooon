/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Membership from './components/Membership';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-cream text-charcoal selection:bg-moss selection:text-cream">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Philosophy />
        <Protocol />
        <Membership />
      </main>
      <Footer />
    </div>
  );
}
