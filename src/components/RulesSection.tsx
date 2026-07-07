import React from "react";
import { ShieldCheck, Scale, Scroll, AlertOctagon, HelpCircle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const rulesList = [
  "Dilarang menggunakan cheat, hack, exploit, bug abuse, atau tindakan dupe barang.",
  "Dilarang griefing, merusak, atau mencuri aset dan bangunan milik player lain.",
  "Dilarang scam, penipuan, atau melakukan manipulasi ekonomi server.",
  "Dilarang toxic, SARA, berkata kasar, memprovokasi, atau memicu drama di chat publik.",
  "Dilarang keras menuduh atau menyudutkan player lain tanpa bukti valid (Laporan wajib via DM/Tiket Admin).",
  "Dilarang spam chat, spam tag, atau melakukan promosi tanpa izin staff.",
  "Hormati kenyamanan sesama player dan hargai seluruh staff yang bertugas.",
  "Keputusan staff bersifat mutlak, final, dan wajib dihormati tanpa kompromi."
];

export default function RulesSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <section id="rules" className="py-24 relative overflow-hidden bg-brand-charcoal-light/30">
      {/* Decorative vertical divider line */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-brand-brown/10 hidden lg:block select-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Information, Title & Concept */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-1.5 bg-brand-brown/20 border border-brand-brown/30 px-3 py-1 rounded-full text-xs font-mono font-bold text-brand-gold tracking-widest uppercase mb-4">
              <Scale className="w-3.5 h-3.5 text-brand-gold" />
              KONSTITUSI SERVER
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Aturan Resmi <span className="text-brand-gold">JAYANTARA</span>
            </h2>
            <p className="text-gray-400 mb-6 font-sans leading-relaxed">
              Demi kenyamanan, keamanan, dan keadilan bersama, seluruh pemain JAYANTARA SERVER wajib mematuhi peraturan resmi di samping ini. 
              Staff kami bertindak secara profesional dan transparan untuk menjaga ekosistem bermain tetap sehat dan seru!
            </p>
            
            {/* Disclaimer block inside */}
            <div className="p-5 rounded-xl bg-brand-moss-medium/40 border border-brand-brown/20 flex gap-4 items-start">
              <AlertOctagon className="w-5 h-5 text-brand-gold shrink-0 mt-0.5 animate-pulse" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1 font-display">
                  Sanksi Pelanggaran
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  Pelanggaran terhadap konstitusi di atas dapat berakibat pada pembatasan chat, pengasingan sementara (ban), hingga pemblokiran akun permanen tanpa pengecualian.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Rules Card */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl border border-brand-brown/30 shadow-2xl relative overflow-hidden p-6 sm:p-8">
              {/* Wooden background corner decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-brown/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-brand-brown/10 to-transparent pointer-events-none" />

              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-800/80">
                <Scroll className="w-5 h-5 text-brand-gold" />
                <span className="font-display font-extrabold text-white tracking-wide text-lg">
                  KITAB PERATURAN SURVIVAL
                </span>
              </div>

              {/* Rules List Grid with Framer Motion Stagger */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="space-y-4"
              >
                {rulesList.map((rule, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex gap-4 p-4 rounded-xl bg-brand-charcoal/80 border border-brand-brown/10 hover:border-brand-gold/30 hover:bg-brand-moss-medium/20 transition-all duration-300 group"
                  >
                    {/* Numbering Circle */}
                    <div className="w-7 h-7 rounded-full bg-brand-charcoal-light border border-brand-brown/30 text-brand-gold text-xs font-mono font-bold flex items-center justify-center shrink-0 group-hover:bg-brand-gold group-hover:text-brand-charcoal transition-colors duration-300">
                      {idx + 1}
                    </div>

                    {/* Rule Text (Verbatim) */}
                    <p className="text-gray-300 text-sm leading-relaxed font-sans group-hover:text-white transition-colors">
                      {rule}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Secure footer */}
              <div className="mt-8 pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-500 font-mono">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-emerald" /> Keamanan Server Aktif
                </span>
                <span>ID: JAYANTARA_V1</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
