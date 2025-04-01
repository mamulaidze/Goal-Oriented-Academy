import express from "express"
import {geFavorites} from "../controllers/getFavorite.collections.js"

const faovritesRoutes = express.Router()


faovritesRoutes.get("/get-favorites", geFavorites)
export {faovritesRoutes}