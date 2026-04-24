"use client";

import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import MenuCategories from "@/components/MenuCategories";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FoodGallery from "@/components/FoodGallery";
import SpecialDishes from "@/components/SpecialDishes";
import Testimonials from "@/components/Testimonials";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-charcoal overflow-x-hidden">
      <Navbar />
      <HeroSlider />
      <MenuCategories />
      <AboutSection />
      <WhyChooseUs />
      <FoodGallery />
      <SpecialDishes />
      <Testimonials />
      <BookingSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
