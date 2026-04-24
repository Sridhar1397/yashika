# 🍽️ Yashika Cooking & Catering Website

> **"Flavour Tells a Story"** — A premium, modern catering website built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion & Swiper.js

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# 1. Extract the ZIP / navigate to project folder
cd yashika-catering

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
yashika-catering/
├── src/
│   ├── app/
│   │   ├── globals.css        # Global styles + Swiper overrides + fonts
│   │   ├── layout.tsx         # Root layout with metadata & fonts
│   │   └── page.tsx           # Main page (assembles all sections)
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky navbar with mobile menu
│   │   ├── HeroSlider.tsx     # Full-screen Swiper hero slider (4 slides)
│   │   ├── MenuCategories.tsx # 8 menu category cards with hover effects
│   │   ├── AboutSection.tsx   # About + stats + chef image
│   │   ├── WhyChooseUs.tsx    # 4 feature cards with animations
│   │   ├── FoodGallery.tsx    # 9-image grid with lightbox
│   │   ├── SpecialDishes.tsx  # 4 signature dish highlight cards
│   │   ├── Testimonials.tsx   # Auto-sliding testimonial carousel
│   │   ├── BookingSection.tsx # Event booking form with validation
│   │   ├── ContactSection.tsx # Contact cards + Google Maps embed
│   │   ├── Footer.tsx         # Full footer with links & socials
│   │   └── WhatsAppButton.tsx # Floating WhatsApp button
│   └── types/
│       └── modules.d.ts       # Type declarations for CSS/library modules
├── tailwind.config.ts         # Custom colors, fonts, animations
├── next.config.js             # Image domains config
├── tsconfig.json
└── package.json
```

---

## ✨ Features

| Feature | Details |
|---|---|
| **Hero Slider** | 4 slides, fade effect, 5s autoplay, custom pagination |
| **Menu Categories** | 8 cards with food images, hover animation, icon badges |
| **About Section** | Split layout, floating chef card, animated stats |
| **Why Choose Us** | 4 animated feature cards with glow effects |
| **Food Gallery** | 9-image masonry grid, lightbox on click, zoom on hover |
| **Special Dishes** | 4 signature dish cards with tags & metadata |
| **Testimonials** | 5 reviews, 3-up carousel, star ratings, auto-slide |
| **Booking Form** | Name, phone, event type, date picker, message |
| **Contact Section** | 5 contact cards + WhatsApp CTA + Google Maps (dark) |
| **Footer** | 4-column layout, social icons, quick links |
| **WhatsApp Float** | Animated pulse button with tooltip |
| **Sticky Navbar** | Blur backdrop, active indicator, mobile hamburger |
| **Animations** | Framer Motion scroll-triggered reveals throughout |
| **Responsive** | Mobile-first, works on all screen sizes |

---

## 🎨 Design Tokens

| Token | Value |
|---|---|
| **Primary** | `#FF4500` (Flame Orange) |
| **Accent** | `#FFB800` (Gold) |
| **Background** | `#0A0A0A` (Charcoal) |
| **Card** | `#1A1A1A` |
| **Display Font** | Playfair Display |
| **Body Font** | DM Sans |
| **Accent Font** | Cormorant Garamond |

---

## 📞 Business Details

- **Business**: Yashika Cooking & Catering
- **Owner**: Kiran Gowda
- **Phone**: +91 97318 82878
- **Type**: Veg & Non-Veg Catering
- **Tagline**: Flavour Tells a Story

---

## 🔧 Customization

1. **Images**: Replace Unsplash URLs in each component with your own food photos
2. **Colors**: Edit `tailwind.config.ts` — change `flame`, `ember`, `gold`
3. **Content**: All text is in the component files — search for business name
4. **Map**: Update the Google Maps embed URL in `ContactSection.tsx`
5. **WhatsApp**: Change the phone number in `WhatsAppButton.tsx` and `ContactSection.tsx`

---

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Sliders**: Swiper.js v11
- **Icons**: Lucide React
- **Toasts**: React Hot Toast
- **Fonts**: Google Fonts (Playfair Display, DM Sans, Cormorant Garamond)
