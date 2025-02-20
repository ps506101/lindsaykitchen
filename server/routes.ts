import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

const menuData = [
  {
    name: "Breakfast Burrito",
    description: "Eggs, cheese, potatoes and choice of meat",
    price: "$5.99",
    category: "Breakfast",
    image: "breakfast-burrito.jpg"
  },
  {
    name: "Pancake Platter",
    description: "Stack of fluffy pancakes with syrup",
    price: "$6.99", 
    category: "Breakfast",
    image: "pancakes.jpg"
  },
  {
    name: "Hamburger",
    description: "1/3 lb patty with lettuce, tomato, onion",
    price: "$7.99",
    category: "Lunch",
    image: "hamburger.jpg"
  },
  {
    name: "Chicken Sandwich",
    description: "Grilled or crispy chicken with toppings",
    price: "$7.99",
    category: "Lunch",
    image: "chicken-sandwich.jpg"
  },
  {
    name: "French Fries",
    description: "Crispy golden fries",
    price: "$2.99",
    category: "Sides",
    image: "fries.jpg"
  },
  {
    name: "Fountain Drink",
    description: "Various sodas and beverages",
    price: "$1.99",
    category: "Drinks",
    image: "drink.jpg"
  }
];

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/menu", (_req, res) => {
    res.json(menuData);
  });

  const httpServer = createServer(app);
  return httpServer;
}
