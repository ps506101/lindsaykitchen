import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

const menuData = [
  // Breakfast Items
  {
    name: "Breakfast Burrito",
    description: "Eggs, cheese, potatoes with choice of bacon, sausage or chorizo",
    price: "$4.99",
    category: "Breakfast",
    image: "breakfast-burrito.jpg"
  },
  {
    name: "Breakfast Sandwich",
    description: "Eggs and cheese with choice of bacon, sausage or ham",
    price: "$3.99",
    category: "Breakfast",
    image: "breakfast-sandwich.jpg"
  },
  {
    name: "Pancake Platter",
    description: "3 fluffy pancakes served with butter and syrup",
    price: "$4.99",
    category: "Breakfast",
    image: "pancakes.jpg"
  },
  {
    name: "Biscuits & Gravy",
    description: "Fresh baked biscuits topped with savory sausage gravy",
    price: "$4.99",
    category: "Breakfast",
    image: "biscuits-gravy.jpg"
  },
  // Special Cuisine (Indian Food)
  {
    name: "Chicken Biryani",
    description: "Aromatic basmati rice cooked with tender chicken and special spices",
    price: "$12.99",
    category: "Special Cuisine",
    image: "biryani.jpg"
  },
  {
    name: "Butter Chicken",
    description: "Tender chicken in a rich, creamy tomato sauce",
    price: "$11.99",
    category: "Special Cuisine",
    image: "butter-chicken.jpg"
  },
  {
    name: "Tandoori Chicken",
    description: "Marinated chicken cooked in traditional clay oven",
    price: "$11.99",
    category: "Special Cuisine",
    image: "tandoori-chicken.jpg"
  },
  {
    name: "Vegetable Curry",
    description: "Mixed vegetables in a flavorful curry sauce",
    price: "$9.99",
    category: "Special Cuisine",
    image: "veg-curry.jpg"
  },
  {
    name: "Naan Bread",
    description: "Traditional Indian flatbread",
    price: "$2.49",
    category: "Special Cuisine",
    image: "naan.jpg"
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

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/menu", (_req, res) => {
    res.json(menuData);
  });

  const httpServer = createServer(app);
  return httpServer;
}