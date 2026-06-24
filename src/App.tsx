/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { VideoSection } from './components/VideoSection';
import { Features } from './components/Features';
import { TargetAudience } from './components/TargetAudience';
import { Comparison } from './components/Comparison';
import { Bonuses } from './components/Bonuses';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { GuaranteeFAQ } from './components/GuaranteeFAQ';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-lime-500/30 selection:text-white relative">
      <Navbar />
      <main>
        <Hero />
        {/* <VideoSection /> */}
        <Features />
        <TargetAudience />
        <Comparison />
        <Bonuses />
        <Pricing />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
