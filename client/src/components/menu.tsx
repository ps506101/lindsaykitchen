import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Utensils } from "lucide-react";

const categories = ["Breakfast", "Special Cuisine", "Lunch", "Sides", "Drinks"];

const defaultImages = {
  "Breakfast": "/assets/menu-images/breakfast-default.jpg",
  "Special Cuisine": "/assets/menu-images/special-cuisine-default.jpg",
  "Lunch": "/assets/menu-images/lunch-default.jpg",
  "Sides": "/assets/menu-images/sides-default.jpg",
  "Drinks": "/assets/menu-images/drinks-default.jpg"
};

export default function Menu() {
  const { data: menuItems } = useQuery({
    queryKey: ["/api/menu"],
  });

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Menu</h2>

          <Tabs defaultValue="Breakfast" className="w-full">
            <TabsList className="w-full justify-center mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {menuItems?.filter(item => item.category === category)
                    .map((item) => (
                      <Card key={item.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <CardContent className="p-4">
                          {item.image && (
                            <div className="relative w-full h-40 mb-3 rounded-lg overflow-hidden">
                              <img
                                src={item.image.startsWith('/') ? item.image : `/assets/menu-images/${item.image}`}
                                alt={item.name}
                                onError={(e) => {
                                  e.currentTarget.src = defaultImages[category];
                                }}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            <span className="text-lg font-medium text-primary">
                              {item.price}
                            </span>
                          </div>
                          {item.description && (
                            <p className="text-sm text-muted-foreground mb-2">
                              {item.description}
                            </p>
                          )}
                          {item.customizations && item.customizations.length > 0 && (
                            <div className="mt-2 pt-2 border-t border-border">
                              <p className="text-xs font-medium mb-1">Customizations:</p>
                              <ul className="text-xs text-muted-foreground">
                                {item.customizations.map((option, index) => (
                                  <li key={index} className="mb-0.5">
                                    {option}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}