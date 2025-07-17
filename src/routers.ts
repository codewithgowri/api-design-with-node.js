import { Router } from "express";

const router = Router();

/**
 * products router
 */
router.get("/products", (req, res) => {
  res.end(req.shh_secret);
});
router.get("/products/:id", (req, res) => {
  res.end(`Product with id ${req.params.id}`);
});
router.post("/products", (req, res) => {
  res.end("Create a new product");
});
router.put("/products/:id", (req, res) => {
  res.end(`Update product with id ${req.params.id}`);
});
router.delete("/products/:id", (req, res) => {
  res.end(`Delete product with id ${req.params.id}`);
});

/**updates */

router.get("/updates", (req, res) => {
  res.end("List of updates");
});
router.get("/updates/:id", (req, res) => {
  res.end(`Product with id ${req.params.id}`);
});
router.post("/updates", (req, res) => {
  res.end("Create a new product");
});
router.put("/updates/:id", (req, res) => {
  res.end(`Update product with id ${req.params.id}`);
});
router.delete("/updates/:id", (req, res) => {
  res.end(`Delete product with id ${req.params.id}`);
});

/**update points */

router.get("/updatepoints", (req, res) => {
  res.end("List of updatepoints");
});
router.get("/updatepoints/:id", (req, res) => {
  res.end(`Product with id ${req.params.id}`);
});
router.post("/updatepoints", (req, res) => {
  res.end("Create a new product");
});
router.put("/updatepoints/:id", (req, res) => {
  res.end(`Update product with id ${req.params.id}`);
});
router.delete("/updatepoints/:id", (req, res) => {
  res.end(`Delete product with id ${req.params.id}`);
});

export default router;
