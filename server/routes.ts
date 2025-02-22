import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with a test API key that allows a few emails per day
sgMail.setApiKey('SG.1234'); // Using a minimal test API key for now

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/menu", (_req, res) => {
    try {
      if (!menuData || !Array.isArray(menuData)) {
        console.error("Menu data is invalid or not properly initialized");
        return res.status(500).json({ error: "Invalid menu data structure" });
      }

      // Validate each menu item has required fields
      const validMenuData = menuData.filter(item => {
        return item && typeof item === 'object' && 
               'name' in item && 
               'price' in item && 
               'category' in item;
      });

      if (validMenuData.length === 0) {
        console.error("No valid menu items found");
        return res.status(500).json({ error: "No valid menu items available" });
      }

      console.log(`Serving ${validMenuData.length} valid menu items`);
      return res.json(validMenuData);
    } catch (error) {
      console.error("Error serving menu data:", error);
      return res.status(500).json({ error: "Failed to fetch menu data" });
    }
  });

  app.post("/api/subscribe", async (req, res) => {
    try {
      const { name, phone } = req.body;

      const msg = {
        to: 'busunnativentures@gmail.com',
        from: 'subscribe@lindsaykitchen.com', // Verified sender email
        subject: 'New Special Deals Subscriber',
        html: `
          <h2>New Subscriber Details:</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
        `,
      };

      await sgMail.send(msg);
      res.json({ success: true });
    } catch (error) {
      console.error("Subscription error:", error);
      res.status(500).json({ error: "Failed to process subscription" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

// Keep the existing menuData array here but export it
export const menuData = [
  // Breakfast Items
  {
    name: "Tex-Mex Tacos",
    description: "Egg, Cheese & Choice of Meat (Chorizo, Bacon, Ham, Sausage). Side of Salsa included",
    price: "$10.99",
    category: "Breakfast",
    customizations: ["Add Potatoes +$1"],
    image: "breakfast-tacos.jpg"
  },
  {
    name: "Omelette",
    description: "2 Farm Eggs (Any Style) with Choice of Cheese (American, Cheddar, Swiss, Pepper Jack)",
    price: "$9.99",
    category: "Breakfast",
    customizations: [
      "Add Onions, Tomatoes, Bell Peppers +$1",
      "Add Mushrooms, Spinach +$1.50",
      "Add Bacon, Sausage, Ham +$2",
      "Add Avocado +$2"
    ],
    image: "omelette.jpg"
  },
  {
    name: "Single Pancake",
    description: "One fluffy pancake",
    price: "$3.99",
    category: "Breakfast",
    customizations: [
      "Add Chocolate Chips or Blueberries +$1",
      "Add Banana & Whip Cream +$2"
    ],
    image: "pancake.jpg"
  },
  {
    name: "Double Pancakes",
    description: "Two fluffy pancakes",
    price: "$6.99",
    category: "Breakfast",
    customizations: [
      "Add Chocolate Chips or Blueberries +$1",
      "Add Banana & Whip Cream +$2"
    ],
    image: "double-pancakes.jpg"
  },
  {
    name: "Triple Pancakes",
    description: "Three fluffy pancakes",
    price: "$8.99",
    category: "Breakfast",
    customizations: [
      "Add Chocolate Chips or Blueberries +$1",
      "Add Banana & Whip Cream +$2"
    ],
    image: "triple-pancakes.jpg"
  },
  {
    name: "Waffle",
    description: "One fresh waffle",
    price: "$4.99",
    category: "Breakfast",
    customizations: [
      "Add Chocolate Chips or Blueberries +$1",
      "Add Banana & Whip Cream +$2"
    ],
    image: "waffle.jpg"
  },
  {
    name: "French Toast",
    description: "2 Pieces of French Toast",
    price: "$7.99",
    category: "Breakfast",
    customizations: [
      "Add Chocolate Chips or Blueberries +$1",
      "Add Banana & Whip Cream +$2"
    ],
    image: "french-toast.jpg"
  },
  // Breakfast Sides
  {
    name: "Two Eggs Any Style",
    description: "Fresh farm eggs cooked to your preference",
    price: "$3.99",
    category: "Breakfast",
    image: "eggs.jpg"
  },
  {
    name: "Bacon",
    description: "3 pieces of crispy bacon",
    price: "$4.99",
    category: "Breakfast",
    image: "bacon.jpg"
  },
  {
    name: "Sausage",
    description: "2 pieces of breakfast sausage",
    price: "$4.99",
    category: "Breakfast",
    image: "sausage.jpg"
  },
  {
    name: "Breakfast Potatoes",
    description: "Seasoned breakfast potatoes",
    price: "$3.99",
    category: "Breakfast",
    image: "potatoes.jpg"
  },
  {
    name: "Toast",
    description: "Choice of White, Wheat, or Sourdough",
    price: "$2.99",
    category: "Breakfast",
    image: "toast.jpg"
  },
  // Breakfast Beverages
  {
    name: "Small Coffee",
    description: "Fresh brewed coffee",
    price: "$2.50",
    category: "Drinks",
    image: "small-coffee.jpg"
  },
  {
    name: "Large Coffee",
    description: "Fresh brewed coffee",
    price: "$3.50",
    category: "Drinks",
    image: "large-coffee.jpg"
  },
  {
    name: "Hot Tea",
    description: "Choice of tea varieties",
    price: "$2.50",
    category: "Drinks",
    image: "tea.jpg"
  },
  {
    name: "Orange Juice",
    description: "Fresh orange juice",
    price: "$2.50",
    category: "Drinks",
    image: "orange-juice.jpg"
  },
  {
    name: "Apple Juice",
    description: "Fresh apple juice",
    price: "$2.50",
    category: "Drinks",
    image: "apple-juice.jpg"
  },
  {
    name: "Bottled Water",
    description: "Pure bottled water",
    price: "$1.50",
    category: "Drinks",
    image: "water.jpg"
  },
  {
    name: "Soft Drinks",
    description: "Choice of Coke, Diet Coke, or Sprite",
    price: "$2.50",
    category: "Drinks",
    image: "soda.jpg"
  },
  // Special Cuisine (Indian Food)
  // Veg Appetizers
  {
    name: "Samosa (2 pcs)",
    description: "Golden-brown pastry filled with spiced potatoes and peas",
    price: "$4.99",
    category: "Special Cuisine",
    image: "samosa.jpg"
  },
  {
    name: "Mix Veg Pakora",
    description: "Assorted vegetable fritters with Indian spices",
    price: "$5.99",
    category: "Special Cuisine",
    image: "pakora.jpg"
  },
  {
    name: "Aloo Tikki (3 pcs)",
    description: "Spiced potato patties served with chutney",
    price: "$5.99",
    category: "Special Cuisine",
    image: "aloo-tikki.jpg"
  },
  {
    name: "Sabudana Vada (3 pcs)",
    description: "Crispy sago pearls patties, traditional fasting food",
    price: "$5.99",
    category: "Special Cuisine",
    image: "sabudana-vada.jpg"
  },
  {
    name: "Batata Vada (2 pcs)",
    description: "Spiced potato fritters served with chutney",
    price: "$4.99",
    category: "Special Cuisine",
    image: "batata-vada.jpg"
  },
  {
    name: "Veg Manchuria",
    description: "Vegetable balls in Indo-Chinese sauce",
    price: "$7.99",
    category: "Special Cuisine",
    image: "veg-manchuria.jpg"
  },
  {
    name: "Gobi Manchuria",
    description: "Crispy cauliflower in Indo-Chinese sauce",
    price: "$7.99",
    category: "Special Cuisine",
    image: "gobi-manchuria.jpg"
  },
  {
    name: "Honey Chilli Cauliflower",
    description: "Crispy cauliflower in sweet and spicy sauce",
    price: "$7.99",
    category: "Special Cuisine",
    image: "honey-chilli-cauliflower.jpg"
  },
  // Non-Veg Appetizers
  {
    name: "Chicken Samosa (2 pcs)",
    description: "Crispy pastry filled with spiced chicken",
    price: "$5.99",
    category: "Special Cuisine",
    image: "chicken-samosa.jpg"
  },
  {
    name: "Beef Samosa (2 pcs)",
    description: "Crispy pastry filled with spiced beef",
    price: "$5.99",
    category: "Special Cuisine",
    image: "beef-samosa.jpg"
  },
  {
    name: "Chicken 65",
    description: "Spicy, deep-fried chicken with curry leaves",
    price: "$8.99",
    category: "Special Cuisine",
    image: "chicken-65.jpg"
  },
  {
    name: "Chicken Lollipop (5 pcs)",
    description: "Spiced and crispy chicken winglets",
    price: "$9.99",
    category: "Special Cuisine",
    image: "chicken-lollipop.jpg"
  },
  {
    name: "Fish 65",
    description: "Spicy, deep-fried fish with Indian spices",
    price: "$9.99",
    category: "Special Cuisine",
    image: "fish-65.jpg"
  },
  {
    name: "Shrimp 65",
    description: "Spicy, deep-fried shrimp with Indian spices",
    price: "$10.99",
    category: "Special Cuisine",
    image: "shrimp-65.jpg"
  },
  {
    name: "Meatballs (6 pcs)",
    description: "Spiced meatballs in rich sauce",
    price: "$8.99",
    category: "Special Cuisine",
    image: "meatballs.jpg"
  },
  // Veg Entries
  {
    name: "Channa Masala",
    description: "Chickpeas in spiced tomato gravy",
    price: "$11.99",
    category: "Special Cuisine",
    image: "channa-masala.jpg"
  },
  {
    name: "Bendi Masala",
    description: "Okra cooked with onions and Indian spices",
    price: "$11.99",
    category: "Special Cuisine",
    image: "bendi-masala.jpg"
  },
  {
    name: "Baigan Bartha",
    description: "Smoky mashed eggplant with spices",
    price: "$11.99",
    category: "Special Cuisine",
    image: "baigan-bartha.jpg"
  },
  {
    name: "Palak Paneer",
    description: "Cottage cheese cubes in creamy spinach sauce",
    price: "$12.99",
    category: "Special Cuisine",
    image: "palak-paneer.jpg"
  },
  {
    name: "Navarathan Kurma",
    description: "Mixed vegetables in rich cream sauce",
    price: "$12.99",
    category: "Special Cuisine",
    image: "navarathan-kurma.jpg"
  },
  {
    name: "Malai Kofta",
    description: "Vegetable and cheese dumplings in rich cream sauce",
    price: "$13.99",
    category: "Special Cuisine",
    image: "malai-kofta.jpg"
  },
  {
    name: "Paneer Butter Masala",
    description: "Cottage cheese in rich tomato-cream sauce",
    price: "$13.99",
    category: "Special Cuisine",
    image: "paneer-butter-masala.jpg"
  },
  {
    name: "Paneer Tikka Masala",
    description: "Grilled cottage cheese in spiced gravy",
    price: "$13.99",
    category: "Special Cuisine",
    image: "paneer-tikka-masala.jpg"
  },
  // Non-Veg Entries
  {
    name: "Chicken Curry",
    description: "Traditional Indian chicken curry",
    price: "$13.99",
    category: "Special Cuisine",
    image: "chicken-curry.jpg"
  },
  {
    name: "Chicken Vindaloo",
    description: "Spicy curry with potatoes and chicken",
    price: "$14.99",
    category: "Special Cuisine",
    image: "chicken-vindaloo.jpg"
  },
  {
    name: "Butter Chicken",
    description: "Tender chicken in a rich, creamy tomato sauce",
    price: "$14.99",
    category: "Special Cuisine",
    image: "butter-chicken.jpg"
  },
  {
    name: "Chicken Tikka Masala",
    description: "Grilled chicken in spiced tomato gravy",
    price: "$14.99",
    category: "Special Cuisine",
    image: "chicken-tikka-masala.jpg"
  },
  {
    name: "Chicken Saag",
    description: "Chicken cooked with creamy spinach",
    price: "$14.99",
    category: "Special Cuisine",
    image: "chicken-saag.jpg"
  },
  {
    name: "Beef Curry",
    description: "Traditional Indian beef curry",
    price: "$15.99",
    category: "Special Cuisine",
    image: "beef-curry.jpg"
  },
  {
    name: "Lamb Curry",
    description: "Traditional Indian lamb curry",
    price: "$15.99",
    category: "Special Cuisine",
    image: "lamb-curry.jpg"
  },
  {
    name: "Lamb Saag",
    description: "Lamb cooked with creamy spinach",
    price: "$15.99",
    category: "Special Cuisine",
    image: "lamb-saag.jpg"
  },
  {
    name: "Shrimp Curry",
    description: "Shrimp cooked in aromatic curry sauce",
    price: "$15.99",
    category: "Special Cuisine",
    image: "shrimp-curry.jpg"
  },
  {
    name: "Fish Curry",
    description: "Fish cooked in traditional spices",
    price: "$14.99",
    category: "Special Cuisine",
    image: "fish-curry.jpg"
  },
  {
    name: "Tandoori Chicken",
    description: "Clay oven roasted chicken with Indian spices",
    price: "$13.99",
    category: "Special Cuisine",
    image: "tandoori-chicken.jpg"
  },
  // Lunch Items
  {
    name: "Hamburger",
    description: "1/3 lb patty with lettuce, tomato, onion, pickles, and mayo",
    price: "$6.99",
    category: "Lunch",
    image: "hamburger.jpg"
  },
  {
    name: "Cheeseburger",
    description: "1/3 lb patty with American cheese and fresh toppings",
    price: "$7.49",
    category: "Lunch",
    image: "cheeseburger.jpg"
  },
  {
    name: "Double Meat Burger",
    description: "Two 1/3 lb patties with fresh toppings",
    price: "$8.99",
    category: "Lunch",
    image: "double-burger.jpg"
  },
  {
    name: "Double Cheese Burger",
    description: "Two 1/3 lb patties with double cheese and fresh toppings",
    price: "$9.49",
    category: "Lunch",
    image: "double-cheeseburger.jpg"
  },
  {
    name: "Chicken Sandwich",
    description: "Grilled or crispy chicken with lettuce, tomato, and mayo",
    price: "$6.99",
    category: "Lunch",
    image: "chicken-sandwich.jpg"
  },
  {
    name: "Chicken Strip Basket",
    description: "4 crispy chicken strips served with fries and gravy",
    price: "$7.99",
    category: "Lunch",
    image: "chicken-strips.jpg"
  },
  {
    name: "BLT Sandwich",
    description: "Bacon, lettuce, and tomato with mayo on Texas toast",
    price: "$5.99",
    category: "Lunch",
    image: "blt.jpg"
  },
  {
    name: "Grilled Cheese",
    description: "Melted American cheese on Texas toast",
    price: "$3.99",
    category: "Lunch",
    image: "grilled-cheese.jpg"
  },
  // Sides
  {
    name: "French Fries",
    description: "Crispy golden fries",
    price: "$2.99",
    category: "Sides",
    image: "fries.jpg"
  },
  {
    name: "Tater Tots",
    description: "Crispy potato tots",
    price: "$2.99",
    category: "Sides",
    image: "tots.jpg"
  },
  {
    name: "Onion Rings",
    description: "Breaded and fried onion rings",
    price: "$3.49",
    category: "Sides",
    image: "onion-rings.jpg"
  },
  {
    name: "Side Salad",
    description: "Fresh lettuce, tomato, and cheese",
    price: "$2.99",
    category: "Sides",
    image: "side-salad.jpg"
  },
  // Drinks
  {
    name: "Fountain Drink",
    description: "Various sodas and beverages",
    price: "$1.99",
    category: "Drinks",
    image: "drink.jpg"
  },
  {
    name: "Coffee",
    description: "Fresh brewed coffee",
    price: "$1.49",
    category: "Drinks",
    image: "coffee.jpg"
  },
  {
    name: "Iced Tea",
    description: "Sweet or unsweet tea",
    price: "$1.99",
    category: "Drinks",
    image: "tea.jpg"
  }
];