import React from "react";
import { Landmark, Shield, Swords, Compass, Sparkles, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Landmark,
    emoji: "🏙️",
    title: "Bangun Kota & Usaha",
    description: "Kembangkan tokomu dan kuasai pasar bebas Jayantara.",
    color: "from-amber-500/20 to-brand-gold/5",
    iconColor: "text-brand-gold",
    borderColor: "border-brand-gold/20"
  },
  {
    icon: Swords,
    emoji: "⚔️",
    title: "RPG Ringan",
    description: "Tingkatkan progresivitas petualanganmu agar menjadi pemain yang paling berpengaruh.",
    color: "from-cyan-500/20 to-brand-cyan/5",
    iconColor: "text-brand-cyan",
    borderColor: "border-brand-cyan/20"
  },
  {
    icon: TrendingUp,
    emoji: "📊",
    title: "Gameplay Balance",
    description: "Sistem server stabil dengan komunitas aktif yang siap menemani setiap langkah grinding-mu.",
    color: "from-green-500/20 to-brand-green/5",
    iconColor: "text-brand-green",
    borderColor: "border-brand-green/20"
  }
];

export default function AboutSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-brand-charcoal">
      {/* Decorative background grid and blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-brown/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-brand-brown/20 border border-brand-brown/30 px-3 py-1 rounded-full text-xs font-mono font-bold text-brand-gold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            Ecosystem Gameplay
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Mengapa Bermain di <span className="text-brand-gold">JAYANTARA</span>?
          </h2>
          <div className="h-1 w-20 bg-brand-gold mx-auto rounded-full mb-6" />
          <p className="text-gray-400 font-sans leading-relaxed">
            JAYANTARA menghadirkan dunia survival Minecraft yang terstruktur, asri, dan kompetitif. 
            Setiap fitur dirancang untuk memberikan petualangan ekonomi yang adil dan seimbang untuk semua jenis player.
          </p>
        </div>

        {/* Modular Staggered Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feat, index) => {
            const IconComponent = feat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`glass-panel rounded-2xl p-8 border ${feat.borderColor} hover:border-brand-gold/40 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between h-full hover:-translate-y-1`}
              >
                {/* Background Accent glow */}
                <div className={`absolute -right-16 -top-16 w-32 h-32 rounded-full bg-gradient-to-br ${feat.color} blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-300`} />
                
                <div>
                  {/* Icon and Emoji container */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 rounded-xl bg-brand-charcoal-light border border-brand-brown/10 shadow-inner group-hover:border-brand-gold/30 transition-colors ${feat.iconColor}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-3xl select-none filter drop-shadow">{feat.emoji}</span>
                  </div>

                  {/* Feature Title */}
                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">
                    {feat.title}
                  </h3>

                  {/* Feature Description (Verbatim as required) */}
                  <p className="text-gray-400 text-sm leading-relaxed font-sans">
                    {feat.description}
                  </p>
                </div>

                {/* Card footer decorative bar */}
                <div className="mt-8 pt-4 border-t border-gray-800/60 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-gray-500 font-bold uppercase tracking-widest">
                    Verified Feature
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
