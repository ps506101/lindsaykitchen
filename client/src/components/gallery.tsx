import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const menuImages = [
  {
    url: "/assets/menu-images/WhatsApp Image 2025-02-07 at 6.39.32 PM.jpeg",
    title: "Chicken Biryani",
    category: "Special Cuisine"
  },
  {
    url: "/assets/menu-images/WhatsApp Image 2025-02-07 at 6.39.32 PM (1).jpeg",
    title: "Butter Chicken",
    category: "Special Cuisine"
  },
  {
    url: "/assets/menu-images/WhatsApp Image 2025-02-07 at 6.39.59 PM.jpeg",
    title: "Tandoori Chicken",
    category: "Special Cuisine"
  },
  {
    url: "/assets/menu-images/WhatsApp Image 2025-02-07 at 6.40.00 PM.jpeg",
    title: "Vegetable Curry",
    category: "Special Cuisine"
  },
  {
    url: "/assets/menu-images/WhatsApp Image 2025-02-10 at 9.38.43 AM.jpeg",
    title: "Breakfast Burrito",
    category: "Breakfast"
  },
  {
    url: "/assets/menu-images/WhatsApp Image 2025-02-10 at 9.39.02 AM.jpeg",
    title: "Pancake Platter",
    category: "Breakfast"
  },
  {
    url: "/assets/menu-images/WhatsApp Image 2025-02-10 at 9.39.55 AM.jpeg",
    title: "Burger Combo",
    category: "Lunch"
  },
  {
    url: "/assets/menu-images/WhatsApp Image 2025-02-10 at 9.53.47 AM.jpeg",
    title: "Chicken Strip Basket",
    category: "Lunch"
  },
  {
    url: "/assets/menu-images/WhatsApp Image 2025-02-10 at 12.24.56 PM.jpeg",
    title: "Naan Bread",
    category: "Special Cuisine"
  }
];

const fallbackImage = "/assets/menu-images/default-food.jpg";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!isPaused) {
      timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % menuImages.length);
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % menuImages.length);
    setImageError(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + menuImages.length) % menuImages.length);
    setImageError(false);
  };

  const togglePause = () => {
    setIsPaused(prev => !prev);
  };

  return (
    <section id="gallery" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Food Gallery</h2>

          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video"
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0 relative">
                  <img
                    src={menuImages[currentIndex].url}
                    alt={menuImages[currentIndex].title}
                    onError={(e) => {
                      if (!imageError) {
                        setImageError(true);
                        e.currentTarget.src = fallbackImage;
                      }
                    }}
                    className="w-full h-[500px] object-cover"
                  />
                </CardContent>
              </Card>
            </motion.div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <button
              onClick={togglePause}
              className="absolute right-4 top-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
            >
              {isPaused ? (
                <Play className="h-6 w-6" />
              ) : (
                <Pause className="h-6 w-6" />
              )}
            </button>

            <div className="flex justify-center mt-4 gap-2">
              {menuImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setImageError(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}