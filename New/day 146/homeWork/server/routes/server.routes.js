import { Router } from "express";
import { 
  getUserApi, 
  postUserApi, 
  deleteUserApi, 
  updateUserApi 
} from "../controllers/user.controller.js";

const routes = Router();

routes.get("/users", getUserApi)
routes.post("/users", postUserApi)
routes.put("/users/:id", updateUserApi)
routes.delete("/users/:id", deleteUserApi)

export default routes;