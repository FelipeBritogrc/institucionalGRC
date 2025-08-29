
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHeader from "@/components/contact/ContactHeader";
import WhatsAppSection from "@/components/contact/WhatsAppSection";
import SocialSection from "@/components/contact/SocialSection";
import ContactInfo from "@/components/contact/ContactInfo";

const Contact = () => (
  <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        <ContactHeader />
        <WhatsAppSection />
        <ContactInfo />
        <SocialSection />
      </div>
    </main>
    <Footer />
  </div>
);

export default Contact;
