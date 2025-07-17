import * as dotenv from "dotenv"; //importing dotenv to load environment variables
dotenv.config(); //loading environment variables from .env file
import app from "./server";
app.listen(3000, () => {
  console.log("Server is running on port 3000");
}); //starting the server on port 3000
