import React, { useState } from "react";
import { Copy, Check, ExternalLink, Sparkles, Sword, Coins, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { siteConfig } from "../config/site";

interface HeroProps {
  onShowToast: (message: string) => void;
}

export default function Hero({ onShowToast }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const copyServerIP = () => {
    navigator.clipboard.writeText(siteConfig.server.java.ip).then(() => {
      setCopied(true);
      onShowToast("IP Server Java & Bedrock berhasil disalin!");
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Background Image with Deep Vignette Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.webp"
          alt="Jayantara Minecraft Server Cinematic Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover scale-105 select-none"
        />
        {/* Deep pekat dark gradient overlays for high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/80 to-brand-charcoal/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/70 via-transparent to-brand-charcoal" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-brand-charcoal/90" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center flex flex-col items-center">
        {/* Floating Server Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-8"
        >
          <div className="absolute -inset-1 rounded-full bg-brand-gold/20 blur-xl animate-pulse" />
          <img
            src="/logo.png"
            alt="Jayantara Server Official Logo"
            referrerPolicy="no-referrer"
            className="w-40 h-40 md:w-48 md:h-48 object-contain rounded-full border-2 border-brand-brown/40 shadow-2xl relative z-10 animate-float"
          />
        </motion.div>

        {/* Server Sub-badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-brand-moss-medium/85 border border-brand-brown/40 px-3.5 py-1.5 rounded-full mb-6 shadow-inner"
        >
          <Sparkles className="w-4 h-4 text-brand-gold" />
          <span className="text-xs uppercase font-mono font-bold tracking-widest text-brand-gold-glow">
            {siteConfig.server.type}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6"
        >
          JAYANTARA <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-gold-glow to-brand-emerald">SERVER</span>
        </motion.h1>

        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-brand-gold-glow font-medium max-w-3xl mb-4 leading-relaxed font-sans"
        >
          {siteConfig.slogans.hero}
        </motion.p>

        {/* Sub-slogan */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-sm md:text-base text-gray-300 max-w-2xl mb-10 leading-relaxed font-sans"
        >
          {siteConfig.slogans.subHero}
        </motion.p>

        {/* CTA Buttons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md"
        >
          {/* Main Action - Copy IP */}
          <button
            onClick={copyServerIP}
            id="hero_copy_ip_cta"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-brand-brown via-brand-brown-light to-brand-brown hover:from-brand-gold hover:to-brand-brown-light text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide shadow-xl transition-all duration-300 cursor-pointer select-none border border-brand-gold/30 hover:shadow-brand-gold/10 hover:scale-[1.02] active:scale-[0.98] group"
          >
            <Sword className="w-5 h-5 text-brand-gold-glow group-hover:rotate-45 transition-transform" />
            <span>SALIN IP SERVER</span>
            {copied ? (
              <Check className="w-4 h-4 text-brand-emerald animate-bounce" />
            ) : (
              <Copy className="w-4 h-4 text-brand-gold-glow/70" />
            )}
          </button>

          {/* Secondary Action - Rank List link */}
          <a
            href={siteConfig.links.webRank}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-brand-charcoal-light/90 border border-brand-brown/30 hover:border-brand-gold text-brand-gold-glow hover:bg-brand-brown/10 px-8 py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Coins className="w-5 h-5 text-brand-gold" />
            <span>CEK LIST RANK</span>
            <ExternalLink className="w-4 h-4 text-gray-400" />
          </a>
        </motion.div>
      </div>

      {/* Absolute Bottom Indicator: Scroll Down indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-gray-400 select-none animate-bounce">
        <span className="font-mono tracking-widest text-[10px]">SCROLL UNTUK EKSPLORASI</span>
        <div className="w-1 h-3 rounded-full bg-brand-brown-light" />
      </div>
    </section>
  );
}
