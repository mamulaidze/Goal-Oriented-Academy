import express from "express"
import { getFavorites } from "../controllers/getFavorite.collections.js"

const favoriteRoutes = express.Router()
favoriteRoutes.get("/get-favorites", getFavorites)
export default favoriteRoutes 