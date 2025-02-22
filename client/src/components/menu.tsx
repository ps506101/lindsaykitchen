import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import type { MenuItem } from "@shared/schema";

const categories = ["Breakfast", "Special Cuisine", "Lunch", "Sides", "Drinks"];

const defaultImages = {
  "Breakfast": "/assets/menu-images/breakfast-default.jpg",
  "Special Cuisine": "/assets/menu-images/special-cuisine-default.jpg",
  "Lunch": "/assets/menu-images/lunch-default.jpg",
  "Sides": "/assets/menu-images/sides-default.jpg",
  "Drinks": "/assets/menu-images/drinks-default.jpg"
} as const;

export default function Menu() {
  const { data: menuItems, isLoading, error } = useQuery<MenuItem[]>({
    queryKey: ["/api/menu"],
    onError: (error) => {
      console.error("Failed to fetch menu items:", error);
    },
    onSuccess: (data) => {
      console.log("Successfully fetched menu items:", data?.length);
    }
  });

  if (isLoading) {
    console.log("Loading menu items...");
    return (
      <section id="menu" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Loading Menu...</h2>
        </div>
      </section>
    );
  }

  if (error) {
    console.error("Error in Menu component:", error);
    return (
      <section id="menu" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Error Loading Menu</h2>
          <p className="text-center text-red-500">
            {error instanceof Error ? error.message : "Please try again later."}
          </p>
        </div>
      </section>
    );
  }

  if (!menuItems || menuItems.length === 0) {
    console.log("No menu items available");
    return (
      <section id="menu" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">No Menu Items Available</h2>
        </div>
      </section>
    );
  }

  console.log(`Rendering ${menuItems.length} menu items`);

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

            {categories.map((category) => {
              const categoryItems = menuItems.filter(item => item.category === category);
              console.log(`Category ${category} has ${categoryItems.length} items`);

              return (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {categoryItems.map((item) => (
                      <Card key={item.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <CardContent className="p-2">
                          {item.image && (
                            <div className="relative w-full h-32 mb-2 rounded overflow-hidden">
                              <img
                                src={item.image.startsWith('/') ? item.image : `/assets/menu-images/${item.image}`}
                                alt={item.name}
                                onError={(e) => {
                                  console.log(`Image load error for ${item.name}, using default`);
                                  e.currentTarget.src = defaultImages[category as keyof typeof defaultImages];
                                }}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="text-sm font-semibold">{item.name}</h3>
                            <span className="text-sm font-medium text-primary">
                              {item.price}
                            </span>
                          </div>
                          {item.description && (
                            <p className="text-xs text-muted-foreground mb-1 line-clamp-2">
                              {item.description}
                            </p>
                          )}
                          {item.customizations && item.customizations.length > 0 && (
                            <div className="mt-1 pt-1 border-t border-border">
                              <p className="text-xs font-medium mb-1">Customizations:</p>
                              <ul className="text-xs text-muted-foreground">
                                {item.customizations.map((option, index) => (
                                  <li key={index} className="mb-0.5 line-clamp-1">
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
              );
            })}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}