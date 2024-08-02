// Importing the express module to create a router
import express from "express";

// Creating a router instance
const router = express.Router();

// Defining an in-memory array to act as a simple database
const items = [];

// Route to get all items
router.get("/items", (req, res) => {
  res.json(items);
});

// Route to add a new item
router.post("/items", (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

// Route to get a single item by its ID
router.get("/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  const item = items.find(i => i.id === itemId);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// Route to update an item by its ID
router.put("/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  const index = items.findIndex(i => i.id === itemId);
  if (index !== -1) {
    items[index] = req.body;
    res.json(items[index]);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// Route to delete an item by its ID
router.delete("/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  const index = items.findIndex(i => i.id === itemId);
  if (index !== -1) {
    items.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

export default router;
