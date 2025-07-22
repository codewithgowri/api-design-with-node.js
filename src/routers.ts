import { Router } from "express";
import { body } from "express-validator";
import { inputValidation } from "./middleware";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "./route-handlers/product";
import {
  createUpdate,
  deleteUpdate,
  getAllUpdates,
  getUpdateById,
  updateUpdate,
} from "./route-handlers/update";

const router = Router();

/**
 * products router
 */
router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post(
  "/products",
  body("name").isString().notEmpty(),
  inputValidation,
  createProduct
);
router.put(
  "/products/:id",
  body("name").isString(),
  inputValidation,
  updateProduct
);
router.delete("/products/:id", deleteProduct);

/**updates */

router.get("/updates", getAllUpdates);
router.get("/updates/:id", getUpdateById);
router.post("/updates", createUpdate);
router.put(
  "/updates/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
  body("version").optional(),
  updateUpdate
);
router.delete("/updates/:id", deleteUpdate);

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
