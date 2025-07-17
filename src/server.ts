import express from "express"; //importing express
import router from "./routers"; //importing the router from routes file
import { protect } from "./modules/auth";
import { createUser, signInUser } from "./route-handlers/users"; //importing the createUser handler
const app = express(); //api or server is same
app.use(express.json());

// app.use((req, res, next) => {
//   req.shh_secret = "doggy";
//   next();
// });
app.get("/", (req, res) => {
  res.status(200);
  res.json({
    message: "hello world",
  });
});

app.post("/createUser", createUser);
app.post("/signInUser", signInUser);

app.use("/api", protect, router);

export default app; //exporting the app
