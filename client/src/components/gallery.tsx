import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const images = [
  "https://images.unsplash.com/photo-1551782450-17144efb9c50",
  "https://images.unsplash.com/photo-1550317138-10000687a72b",
  "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
];

export default function Gallery() {
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={`${image}?auto=format&fit=crop&w=600&q=80`}
                      alt={`Food gallery image ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
