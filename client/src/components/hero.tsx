import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/assets/menu-images/WhatsApp Image 2025-02-01 at 6.33.39 PM.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 z-1" />

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Lindsay Kitchen
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Delicious homestyle cooking at your local gas station
          </p>
          <Button 
            size="lg"
            variant="secondary"
            className="group bg-white/90 hover:bg-white text-black"
            onClick={() => window.location.href = "tel:9405801868"}
          >
            <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            Call to Order: (940) 580-1868
          </Button>
        </motion.div>
      </div>
    </section>
  );
}