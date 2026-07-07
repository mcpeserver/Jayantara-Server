import React, { useState } from "react";
import { Laptop, Phone, MessageSquare, Copy, Check, Sparkles, ExternalLink, Users } from "lucide-react";
import { siteConfig } from "../config/site";

interface ConnectSectionProps {
  onShowToast: (message: string) => void;
}

export default function ConnectSection({ onShowToast }: ConnectSectionProps) {
  const [copiedJava, setCopiedJava] = useState(false);
  const [copiedBedrock, setCopiedBedrock] = useState(false);

  const copyJavaIP = () => {
    navigator.clipboard.writeText(siteConfig.server.java.ip).then(() => {
      setCopiedJava(true);
      onShowToast("IP Server Java berhasil disalin!");
      setTimeout(() => setCopiedJava(false), 2000);
    });
  };

  const copyBedrockIP = () => {
    const bedrockText = `${siteConfig.server.bedrock.ip}:${siteConfig.server.bedrock.port}`;
    navigator.clipboard.writeText(bedrockText).then(() => {
      setCopiedBedrock(true);
      onShowToast("IP & Port Bedrock berhasil disalin!");
      setTimeout(() => setCopiedBedrock(false), 2000);
    });
  };

  return (
    <section id="connect" className="py-24 relative overflow-hidden bg-brand-charcoal-light/30">
      {/* Decorative background element for crossed swords theme */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-brown/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-brand-brown/20 border border-brand-brown/30 px-3 py-1 rounded-full text-xs font-mono font-bold text-brand-gold tracking-widest uppercase mb-4">
            <Users className="w-3.5 h-3.5 text-brand-gold" />
            Social Hub & Connectivity
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Masuk & Bergabung Dengan Kami
          </h2>
          <div className="h-1 w-20 bg-brand-gold mx-auto rounded-full mb-6" />
          <p className="text-gray-400 font-sans leading-relaxed">
            Dukung integrasi lintas platform! Kamu dapat bermain menggunakan Minecraft versi PC (Java Edition) maupun versi Handphone/Konsol (Bedrock Edition) dengan detail koneksi di bawah ini.
          </p>
        </div>

        {/* Dashboard Connect Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Java Edition */}
          <div className="glass-panel rounded-2xl p-6 border border-brand-brown/20 hover:border-brand-gold/40 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-4 rounded-xl bg-brand-charcoal border border-brand-brown/10 text-brand-gold shadow-inner">
                  <Laptop className="w-6 h-6" />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-mono text-gray-500 font-bold bg-gray-900 px-2 py-1 rounded">
                  PC Edition
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">Java Edition</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans">
                Koneksi premium untuk pemain Minecraft PC menggunakan launcher resmi maupun pihak ketiga.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-brand-charcoal/90 border border-brand-brown/10 rounded-xl flex items-center justify-between font-mono text-xs">
                <span className="text-gray-500 font-bold uppercase">IP Server</span>
                <span className="text-white font-semibold">{siteConfig.server.java.ip}</span>
              </div>
              <button
                onClick={copyJavaIP}
                id="copy_java_btn"
                className="w-full flex items-center justify-center gap-2 bg-brand-charcoal-light hover:bg-brand-brown/20 border border-brand-brown/30 hover:border-brand-gold text-white font-bold text-xs py-3 rounded-xl transition-all duration-300 cursor-pointer active:scale-95 group"
              >
                {copiedJava ? (
                  <>
                    <Check className="w-4 h-4 text-brand-emerald animate-bounce" />
                    <span>BERHASIL DISALIN</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-brand-gold group-hover:scale-110 transition-transform" />
                    <span>SALIN IP JAVA</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 2: Bedrock Edition */}
          <div className="glass-panel rounded-2xl p-6 border border-brand-brown/20 hover:border-brand-cyan/40 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-4 rounded-xl bg-brand-charcoal border border-brand-cyan/10 text-brand-cyan shadow-inner">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-mono text-gray-500 font-bold bg-gray-900 px-2 py-1 rounded">
                  Mobile/Console
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">Bedrock Edition</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans">
                Akses mudah untuk Minecraft PE di Handphone Android/iOS, Windows 10 Edition, maupun Konsol.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-brand-charcoal/90 border border-brand-brown/10 rounded-xl flex flex-col gap-2 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 font-bold uppercase">IP Server</span>
                  <span className="text-white font-semibold">{siteConfig.server.bedrock.ip}</span>
                </div>
                <div className="h-[1px] bg-gray-800/80" />
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 font-bold uppercase">Port</span>
                  <span className="text-brand-cyan font-bold">{siteConfig.server.bedrock.port}</span>
                </div>
              </div>
              <button
                onClick={copyBedrockIP}
                id="copy_bedrock_btn"
                className="w-full flex items-center justify-center gap-2 bg-brand-charcoal-light hover:bg-brand-cyan/20 border border-brand-cyan/20 hover:border-brand-cyan text-white font-bold text-xs py-3 rounded-xl transition-all duration-300 cursor-pointer active:scale-95 group"
              >
                {copiedBedrock ? (
                  <>
                    <Check className="w-4 h-4 text-brand-emerald animate-bounce" />
                    <span>BERHASIL DISALIN</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-brand-cyan group-hover:scale-110 transition-transform" />
                    <span>SALIN IP & PORT BEDROCK</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 3: Discord Official */}
          <div className="glass-panel rounded-2xl p-6 border border-brand-brown/20 hover:border-indigo-500/40 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-4 rounded-xl bg-brand-charcoal border border-indigo-500/10 text-indigo-400 shadow-inner">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-mono text-gray-500 font-bold bg-gray-900 px-2 py-1 rounded">
                  Community Hub
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">Discord Official</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans">
                Bergabunglah dengan ribuan petualang lainnya, ikuti event komunitas, tukar informasi pasar, dan dapatkan support resmi.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-brand-charcoal/90 border border-brand-brown/10 rounded-xl flex items-center justify-between font-mono text-xs">
                <span className="text-gray-500 font-bold uppercase">Status</span>
                <span className="text-indigo-400 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> AKTIF / ONLINE
                </span>
              </div>
              <a
                href={siteConfig.links.discord}
                target="_blank"
                rel="noopener noreferrer"
                id="join_discord_btn"
                className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs py-3 rounded-xl transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] shadow-md shadow-indigo-600/10 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>GABUNG DISCORD SEKARANG</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
