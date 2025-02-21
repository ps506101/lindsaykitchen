import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bell, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { SubscribeForm } from "./subscribe-form";

export default function Hero() {
  const [subscribeOpen, setSubscribeOpen] = useState(false);

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/90 to-primary text-white">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{
          backgroundImage: 'url("/assets/menu-images/Logo.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          mixBlendMode: 'multiply'
        }}
      />
      <div 
        className="absolute inset-0 bg-black/40 z-[1]"
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 z-[2] relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg">
            One Stop Lindsay Kitchen
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-shadow">
            Delicious homestyle cooking at your local gas station
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              variant="secondary"
              className="group w-full sm:w-auto"
              onClick={() => window.location.href = "tel:9405801868"}
            >
              <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Call to Order: (940) 580-1868
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="group w-full sm:w-auto bg-white/10 hover:bg-white/20 border-white/50"
              onClick={() => setSubscribeOpen(true)}
            >
              <Bell className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Subscribe to Special Deals
            </Button>
          </div>
        </motion.div>
      </div>
      <SubscribeForm open={subscribeOpen} onOpenChange={setSubscribeOpen} />
    </section>
  );
}