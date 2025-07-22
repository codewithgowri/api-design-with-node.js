import prisma from "../db";

export const getAllUpdates = async (req, res) => {
  const updates = await prisma.update.findMany();
  res.json(updates);
};

export const getUpdateById = async (req, res) => {
  const update = await prisma.update.findUnique({
    where: { id: req.params.id },
  });
  res.json(update);
};

export const createUpdate = async (req, res) => {
  const update = await prisma.update.create({
    data: req.body,
  });
  res.status(201).json(update);
};
export const updateUpdate = async (req, res) => {
  const updateUpdate = await prisma.update.update({
    where: { id: req.params.id },
    data: req.body,
  });
  res.json(updateUpdate);
};

export const deleteUpdate = async (req, res) => {
  const { id } = req.params;
  const update = await prisma.update.findUnique({
    where: { id },
  });
  if (!update) {
    return res.status(404).json({ message: "Update not found" });
  }
  await prisma.update.delete({
    where: { id },
  });
  res.status(204).end();
};
