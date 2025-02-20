import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/90 to-primary text-white">
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
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
            className="group"
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