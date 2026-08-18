import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import ServicesOverview from "@/components/site/ServicesOverview";
import UberFleetSection from "@/components/site/UberFleetSection";
import DeliverySection from "@/components/site/DeliverySection";
import FoodDeliverySection from "@/components/site/FoodDeliverySection";
import CleaningSection from "@/components/site/CleaningSection";
import BaustellenSection from "@/components/site/BaustellenSection";
import WhyChooseUs from "@/components/site/WhyChooseUs";
import BusinessClients from "@/components/site/BusinessClients";
import AboutUs from "@/components/site/AboutUs";
import ContactSection from "@/components/site/ContactSection";
import FinalCTA from "@/components/site/FinalCTA";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="bg-carbon">
      <Navbar />
      <main>
        <Hero />
        <ServicesOverview />
        <UberFleetSection />
        <DeliverySection />
        <FoodDeliverySection />
        <CleaningSection />
        <BaustellenSection />
        <WhyChooseUs />
        <BusinessClients />
        <AboutUs />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}