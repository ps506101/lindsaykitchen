import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${new URL('/attached_assets/WhatsApp Image 2025-01-22 at 6.51.06 PM.jpeg', import.meta.url).href})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Lindsay Kitchen
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Delicious homestyle cooking at your local gas station
          </p>
          <Button 
            size="lg"
            variant="secondary"
            className="group bg-white text-black hover:bg-white/90"
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