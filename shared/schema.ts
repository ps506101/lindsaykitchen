import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const menuItemSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  price: z.string(),
  category: z.string(),
  image: z.string().optional(),
  customizations: z.array(z.string()).optional()
});

export type MenuItem = z.infer<typeof menuItemSchema>;

export const menuItems = pgTable("menu_items", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  price: text("price").notNull(),
  category: text("category").notNull(),
  image: text("image"),
  customizations: text("customizations").array()
});

export const insertMenuItemSchema = createInsertSchema(menuItems);
export type InsertMenuItem = z.infer<typeof insertMenuItemSchema>;