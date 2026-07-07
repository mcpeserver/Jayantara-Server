import React, { useState, useEffect } from "react";
import { Check, Sparkles, ArrowUp, Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import RulesSection from "./components/RulesSection";
import RankSection from "./components/RankSection";
import ConnectSection from "./components/ConnectSection";
import Footer from "./components/Footer";
import { DeveloperConfig } from "./types";

const defaultDevConfig: DeveloperConfig = {
  name: "Ran Dev",
  contact: {
    phone: "0895602592430",
    whatsapp: "0895602592430"
  },
  community: {
    name: "Ran Dev Community",
    website: "https://community.randev.com",
    discord: "https://discord.gg/9KUN2byKRM"
  },
  website: {
    portfolio: "https://sfl.gl/x2ic"
  }
};

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [devConfig, setDevConfig] = useState<DeveloperConfig>(defaultDevConfig);

  // Fetch developer configuration dynamically from GitHub raw API
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Gagal mengambil data developer");
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.name) {
          setDevConfig({
            name: data.name,
            contact: {
              phone: data.contact?.phone || defaultDevConfig.contact.phone,
              whatsapp: data.contact?.whatsapp || defaultDevConfig.contact.whatsapp,
            },
            community: {
              name: data.community?.name || defaultDevConfig.community.name,
              website: data.community?.website || defaultDevConfig.community.website,
              discord: data.community?.discord || defaultDevConfig.community.discord,
            },
            website: {
              portfolio: data.website?.portfolio || defaultDevConfig.website.portfolio,
            }
          });
        }
      })
      .catch((err) => {
        console.error("Error loading developer data:", err);
      });
  }, []);

  // Monitor scroll progress and scroll-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      // Scroll Progress Bar
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Back To Top Visibility
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerToast = (message: string) => {
    setToastMessage(message);
  };

  const closeToast = () => {
    setToastMessage(null);
  };

  // Auto Dismiss Toast
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-brand-charcoal text-gray-100 flex flex-col font-sans selection:bg-brand-gold selection:text-brand-charcoal relative">
      
      {/* Scroll Progress Bar at the absolute top */}
      <div 
        className="fixed top-0 left-0 right-0 h-[4px] bg-brand-brown-light/20 z-[9999]"
        role="progressbar"
        aria-valuenow={scrollProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div 
          className="h-full bg-gradient-to-r from-brand-gold via-brand-emerald to-brand-cyan shadow-lg transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Sticky Header & Navbar */}
      <Header onShowToast={triggerToast} devConfig={devConfig} />

      {/* Main Single Page Layout Sections */}
      <main className="flex-grow">
        
        {/* Section 1: Cinematic Hero */}
        <Hero onShowToast={triggerToast} />

        {/* Section 2: Tentang Server (Gameplay Ecosystem) */}
        <AboutSection />

        {/* Section 3: Peraturan Resmi Server */}
        <RulesSection />

        {/* Section 4: Portal List Rank & Support */}
        <RankSection />

        {/* Section 5: Koneksi Informasi & Komunitas (Social Hub) */}
        <ConnectSection onShowToast={triggerToast} />

      </main>

      {/* Main Footer Section */}
      <Footer devConfig={devConfig} />

      {/* Smooth Scroll back-to-top floating button (Side trigger) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            id="floating_back_to_top"
            className="fixed bottom-6 right-6 z-40 p-3.5 rounded-xl bg-brand-moss-medium border border-brand-brown/40 hover:border-brand-gold text-brand-gold hover:text-white transition-all duration-300 shadow-2xl shadow-black/80 hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Toast Notification System */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-6 left-6 right-6 sm:left-auto sm:right-6 z-50 max-w-sm w-full mx-auto"
          >
            <div className="glass-panel rounded-xl border border-brand-emerald/30 shadow-2xl p-4 flex gap-3.5 items-start bg-brand-charcoal-light/95 relative overflow-hidden">
              {/* Green indicator glow line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-emerald" />
              
              <div className="p-1.5 rounded-lg bg-brand-emerald/10 text-brand-emerald shrink-0">
                <Check className="w-4 h-4 stroke-[3px]" />
              </div>

              <div className="flex-grow pr-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono mb-0.5">
                  Notifikasi
                </h4>
                <p className="text-sm text-gray-300 font-sans">
                  {toastMessage}
                </p>
              </div>

              {/* Close button */}
              <button 
                onClick={closeToast}
                className="text-gray-500 hover:text-white text-xs font-bold absolute top-2 right-3 cursor-pointer p-1"
                aria-label="Tutup"
              >
                ×
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
