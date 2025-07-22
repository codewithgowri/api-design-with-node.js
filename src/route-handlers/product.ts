import prisma from "../db";

export const getProducts = async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await prisma.product.findUnique({
    where: { id },
  });
  res.json(product);
};

export const createProduct = async (req, res) => {
  const product = await prisma.product.create({
    data: {
      name: req.body.name,
      belongsToId: req.user.id,
    },
  });
  res.status(201).json(product);
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;

  const updatedProduct = await prisma.product.update({
    where: { id, belongsToId: req.user.id },
    data: {
      name: req.body.name,
      belongsToId: req.user.id,
    },
  });
  res.json(updatedProduct);
};

export const deleteProduct = async (req, res) => {
  const deleted = await prisma.product.delete({
    where: {
      id_belongsToId: {
        id: req.params.id,
        belongsToId: req.user.id,
      },
    },
  });
  res.json({ data: deleted });
};
