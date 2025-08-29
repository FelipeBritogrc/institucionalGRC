
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EthicsHeader from "@/components/ethics/EthicsHeader";
import PurposeSection from "@/components/ethics/PurposeSection";
import ValuesSection from "@/components/ethics/ValuesSection";
import GuidelinesSection from "@/components/ethics/GuidelinesSection";
import DownloadSection from "@/components/ethics/DownloadSection";
import CallToAction from "@/components/ethics/CallToAction";

const Ethics = () => (
  <div className="bg-gray-50 min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <EthicsHeader />
        <PurposeSection />
        <ValuesSection />
        <GuidelinesSection />
        {/* <DownloadSection /> */}
        <CallToAction />
      </div>
    </main>
    <Footer />
  </div>
);

export default Ethics;
