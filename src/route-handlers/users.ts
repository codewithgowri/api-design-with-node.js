import prisma from "../db";
import { createJWT, hashPassword, comparePasswords } from "../modules/auth";
export const createUser = async (req, res) => {
  const hash = await hashPassword(req.body.password);
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: hash,
    },
  });

  //   const { username, password } = req.body;
  //   const user = await prisma.user.create({
  //     data: {
  //       username,
  //       password: hashPassword(password),
  //     },
  //   });
  const token = createJWT(user);
  res.send({ token });
};
export const signInUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });
  const isValid = await comparePasswords(password, user.password);
  if (!isValid) {
    res.status(401);
    res.send({ message: "unauthorized user " });
  }
  const token = createJWT(user);
  res.send({ token });
};
