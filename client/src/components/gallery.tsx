import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const menuImages = [
  {
    url: "/menu-images/biryani.jpg",
    title: "Chicken Biryani",
    category: "Special Cuisine"
  },
  {
    url: "/menu-images/butter-chicken.jpg",
    title: "Butter Chicken",
    category: "Special Cuisine"
  },
  {
    url: "/menu-images/tandoori.jpg",
    title: "Tandoori Chicken",
    category: "Special Cuisine"
  },
  {
    url: "/menu-images/breakfast-burrito.jpg",
    title: "Breakfast Burrito",
    category: "Breakfast"
  },
  {
    url: "/menu-images/pancakes.jpg",
    title: "Pancake Platter",
    category: "Breakfast"
  },
  {
    url: "/menu-images/biscuits-gravy.jpg",
    title: "Biscuits & Gravy",
    category: "Breakfast"
  },
  {
    url: "/menu-images/burger.jpg",
    title: "Classic Hamburger",
    category: "Lunch"
  },
  {
    url: "/menu-images/chicken-strips.jpg",
    title: "Chicken Strip Basket",
    category: "Lunch"
  },
  {
    url: "/menu-images/blt.jpg",
    title: "BLT Sandwich",
    category: "Lunch"
  },
  {
    url: "/menu-images/fries.jpg",
    title: "French Fries",
    category: "Sides"
  }
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % menuImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % menuImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + menuImages.length) % menuImages.length);
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
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                    <h3 className="text-xl font-semibold">{menuImages[currentIndex].title}</h3>
                    <p className="text-sm opacity-75">{menuImages[currentIndex].category}</p>
                  </div>
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

            <div className="flex justify-center mt-4 gap-2">
              {menuImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
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