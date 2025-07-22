import * as dotenv from "dotenv"; //importing dotenv to load environment variables
import config from "./config";
dotenv.config(); //loading environment variables from .env file
import app from "./server";

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
}); //starting the server on port 3001
