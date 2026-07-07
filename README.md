# 🛡️ JAYANTARA SERVER — Official Landing Page

Selamat datang di repository resmi Landing Page **JAYANTARA SERVER**! Website ini dirancang khusus dengan performa tinggi, desain estetik bertema petualangan Minecraft modern, dan struktur informasi terpusat yang sangat mudah dimodifikasi.

---

## 📸 Preview & Identitas Visual

Landing page ini merepresentasikan identitas visual JAYANTARA SERVER dengan harmoni warna yang mewah dan asri:
- **Tema Utama**: Hexagonal Oak Wood Frame, Cozy Lantern Glow, Survival Economy Gold Coins, dan Crossed Diamond Swords.
- **Warna Esensial**: Warm Gold Yellow (koin emas ekonomi), Moss/Grass Green (alam liar Minecraft), dan Diamond Cyan (pedang petualangan).

---

## 🚀 Tech Stack Utama

Website ini dibangun menggunakan kombinasi teknologi modern berskala industri:
*   **Vite + React 19** — Setup cepat, ultra-ringan, dan render kilat.
*   **TypeScript** — Menjamin keamanan tipe data demi integritas kode jangka panjang.
*   **Tailwind CSS v4** — Konfigurasi tema terpusat langsung di dalam file global CSS.
*   **Framer Motion** — Menghadirkan transisi scroll reveal, floating logo, dan animasi micro-interaction alami.
*   **Lucide React** — Set icon modern, bersih, dan beresolusi tajam.

---

## 📂 Struktur Folder Proyek

```bash
├── config/
│   └── site.ts       # Pusat data statis (Nama, IP, Link Discord, Teks, dll.)
├── public/
│   ├── logo.png       # Logo utama Minecraft JAYANTARA Server
│   ├── hero-bg.webp   # Background cinematic hamparan survival
│   ├── favicon.ico    # Favicon tab browser
│   ├── og-image.webp  # Gambar preview sharing sosial media
│   ├── manifest.webmanifest
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.tsx        # Sticky Navbar + Watermark RAN DEV + Copy IP
│   │   ├── Hero.tsx          # Cinematic main section dengan animasi floating logo
│   │   ├── AboutSection.tsx  # Poin keunggulan ekosistem server (Grid minimalis)
│   │   ├── RulesSection.tsx  # Kitab undang-undang peraturan server (Dark panel)
│   │   ├── RankSection.tsx   # Portal Donasi Rank & dukungan server
│   │   ├── ConnectSection.tsx# Koneksi lintas Java/Bedrock & Social Discord Hub
│   │   └── Footer.tsx        # Footer resmi + Hak cipta + Kredit RAN DEV
│   ├── index.css     # Entry point global CSS & konfigurasi tema Tailwind v4
│   ├── main.tsx      # Entry point inisialisasi React DOM
│   └── App.tsx       # Core container website + Toast + Scroll progress
├── package.json
└── vite.config.ts
```

---

## ⚙️ Panduan Instalasi Lokal

Ingin menjalankan website ini di komputer lokalmu? Caranya sangat mudah!

1.  **Clone Repository & Masuk ke Folder**
    ```bash
    git clone https://github.com/username/jayantara-server.git
    cd jayantara-server
    ```

2.  **Install Seluruh Dependency**
    ```bash
    npm install
    ```

3.  **Jalankan Server Development**
    ```bash
    npm run dev
    ```
    Buka browser kesayanganmu dan akses: `http://localhost:3000`

4.  **Lakukan Build Produksi**
    ```bash
    npm run build
    ```

---

## 🎨 Cara Modifikasi & Kustomisasi

Kami mendesain website ini dengan prinsip **Developer-Friendly** agar pemeliharaan jangka panjang menjadi sangat instan.

### 1. Mengubah Data Server, Link, atau Kontak (Single Source of Truth)
Seluruh teks, nomor WhatsApp, IP Java, IP Bedrock, Port, hingga link checkout Rank berpusat pada satu file saja. Cukup edit file:
👉 **`/src/config/site.ts`**

```typescript
export const siteConfig = {
  name: "Jayantara Server",
  server: {
    type: "Survival Economy + RPG Ringan",
    java: { ip: "jayantara.xyz" },
    bedrock: { ip: "jayantara.xyz", port: 25596 }
  },
  links: {
    webRank: "https://website.jayantara.xyz",
    discord: "https://discord.gg/8SMVpSauQV"
  },
  developer: {
    name: "RAN DEV",
    whatsapp: "0895602592430"
  }
};
```

### 2. Mengganti Logo Utama & Gambar Background
Semua asset visual ditempatkan langsung di folder root `/public`. Kamu hanya perlu mengganti file berikut dengan file barumu menggunakan nama yang persis sama:
*   **Ganti Logo**: Timpa file `/public/logo.png`.
*   **Ganti Background**: Timpa file `/public/hero-bg.webp` (Gunakan resolusi landscape ideal seperti 1920x1080 untuk kompresi maksimal).

### 3. Modifikasi Skema Warna Tema (Tailwind CSS v4)
Semua definisi warna terpusat langsung di dalam stylesheet global. Buka file:
👉 **`/src/index.css`**

Kamu dapat mengedit variable CSS di dalam blok `@theme` untuk menyesuaikan gradasi koin emas, warna rumput hijau, atau kayu cokelat:
```css
@theme {
  --color-brand-gold: #eab308;       /* Warna koin emas */
  --color-brand-green: #22c55e;      /* Warna rumput Minecraft */
  --color-brand-cyan: #06b6d4;       /* Warna pedang berlian */
  --color-brand-brown: #854d0e;      /* Warna kayu oak cokelat */
}
```

---

## ☁️ Cara Deploy ke Vercel

Ingin meluncurkan website ini secara online agar bisa diakses oleh seluruh player di dunia? Ikuti langkah praktis ini:

1.  Hubungkan folder proyekmu ke GitHub.
2.  Masuk ke dashboard [Vercel](https://vercel.com) dan buat proyek baru.
3.  Impor repository GitHub tersebut.
4.  Vercel akan mendeteksi setup **Vite** secara otomatis. Cukup klik tombol **Deploy**.
5.  Selesai! Website informatif servermu sudah online dalam hitungan detik dengan SSL gratis!

---

## 📜 Lisensi & Aturan Kontribusi

Proyek ini dirilis di bawah lisensi **MIT**. Kamu dibebaskan penuh untuk memodifikasi, mendistribusikan, dan menggunakan website ini untuk keperluan komersial maupun komunitas server Minecraft pribadimu.

---

## 💝 Credits & Apresiasi

*   **JAYANTARA SERVER** — Komunitas luar biasa yang menghadirkan petualangan Survival Economy & RPG Minecraft terbaik.
*   **Developed by RAN DEV** (WhatsApp: `0895602592430`) — Menyediakan layanan pembuatan website profesional, landing page modern, dan integrasi digital yang mudah dipahami. Hubungi kami jika ingin membuat website keren seperti ini!

Selamat bertualang di JAYANTARA SERVER! Semoga harimu menyenangkan dan grinding-mu selalu lancar! 🔥🛡️✨
