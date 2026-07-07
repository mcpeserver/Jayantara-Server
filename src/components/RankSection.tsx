import React from "react";
import { Coins, Sparkles, Flame, Shield, ArrowUpRight, HelpCircle } from "lucide-react";
import { motion } from "motion/react";
import { siteConfig } from "../config/site";

export default function RankSection() {
  return (
    <section id="support" className="py-24 relative overflow-hidden bg-brand-charcoal">
      {/* Dynamic background element representing Cozy Lantern Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel rounded-3xl border border-brand-gold/20 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          {/* Subtle animated border border line at the top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-brand-charcoal/80 border border-brand-brown/30 shadow-lg text-brand-gold mb-8 animate-float">
            <Coins className="w-8 h-8 text-brand-gold" />
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 bg-brand-brown/20 border border-brand-brown/30 px-3 py-1 rounded-full text-xs font-mono font-bold text-brand-gold tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              Portal Support & Ranks
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
              Dukung Perkembangan <span className="text-brand-gold">JAYANTARA</span>
            </h2>

            {/* Informative Verbatim Text */}
            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-sans mb-10 max-w-xl mx-auto">
              Rank memberikan benefit eksklusif, fitur tambahan, dan keunggulan khusus di dalam server. Support kamu membantu pengembangan JAYANTARA agar semakin berkembang dan stabil 🚀
            </p>

            {/* Security Notice Block */}
            <div className="mb-10 p-4 rounded-xl bg-brand-charcoal-light/90 border border-brand-brown/10 max-w-lg mx-auto flex items-center justify-center gap-3">
              <Shield className="w-5 h-5 text-brand-cyan shrink-0" />
              <p className="text-xs text-gray-400 font-mono text-left">
                Semua donasi dan upgrade diproses secara otomatis, transparan, dan aman demi kestabilan infrastruktur server kami.
              </p>
            </div>

            {/* Premium Navigation CTA Button */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <a
                href={siteConfig.links.webRank}
                target="_blank"
                rel="noopener noreferrer"
                id="support_premium_rank_btn"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-gold via-brand-gold-glow to-brand-gold hover:from-brand-gold-glow hover:to-brand-gold text-brand-charcoal px-10 py-5 rounded-2xl font-display font-extrabold text-sm md:text-base tracking-wide shadow-xl shadow-brand-gold/10 transition-all duration-300 hover:shadow-brand-gold/20 border border-brand-gold/50 cursor-pointer"
              >
                <span>LIHAT DAFTAR & DETAIL HARGA RANK</span>
                <ArrowUpRight className="w-5 h-5 stroke-[2.5px]" />
              </a>
            </motion.div>

            {/* Quick Helper text */}
            <p className="text-xs text-gray-500 mt-6 font-mono">
              Link resmi: <a href={siteConfig.links.webRank} target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-gold">{siteConfig.links.webRank}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
