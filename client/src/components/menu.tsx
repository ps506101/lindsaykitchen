import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { menuData } from "../data/menu";

// Define categories statically to ensure they're bundled
const categories = ["Breakfast", "Special Cuisine", "Lunch", "Sides", "Drinks"];

export default function Menu() {
  // Debug logging
  console.log("[Menu] Component mounted");
  console.log("[Menu] Menu data length:", menuData?.length ?? 0);
  console.log("[Menu] Available categories:", categories);

  // Static error boundary
  if (!Array.isArray(menuData)) {
    console.error("[Menu] Menu data is not an array");
    return (
      <section id="menu" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Menu</h2>
          <p className="text-center">Menu is currently being updated. Please check back later.</p>
        </div>
      </section>
    );
  }

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

          <Tabs defaultValue={categories[0]} className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="px-4 py-2"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => {
              const categoryItems = menuData.filter(item => item.category === category);
              console.log(`[Menu] Items in ${category}:`, categoryItems.length);

              if (categoryItems.length === 0) {
                return (
                  <TabsContent key={category} value={category}>
                    <p className="text-center text-muted-foreground">
                      No items available in this category.
                    </p>
                  </TabsContent>
                );
              }

              return (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categoryItems.map((item, index) => (
                      <div
                        key={`${category}-${index}`}
                        className="bg-card text-card-foreground rounded-lg border shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="p-4">
                          <div className="flex justify-between items-start gap-2">
                            <h3 className="font-semibold flex-1">{item.name}</h3>
                            <span className="text-sm font-medium text-primary whitespace-nowrap">
                              {item.price}
                            </span>
                          </div>
                          {item.description && (
                            <p className="text-sm text-muted-foreground mt-1">
                              {item.description}
                            </p>
                          )}
                          {item.customizations && item.customizations.length > 0 && (
                            <div className="mt-2 pt-2 border-t border-border">
                              <p className="text-sm font-medium">Customizations:</p>
                              <ul className="text-sm text-muted-foreground">
                                {item.customizations.map((option, idx) => (
                                  <li key={idx}>{option}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
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