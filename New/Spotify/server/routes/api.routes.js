import express from "express"
import { apiMusicRoutes } from "./api.music.js";
import favoriteRoutes from "./api.favorite.js";
const apiRoutes = express.Router()

apiRoutes.use("/music", apiMusicRoutes)
apiRoutes.use("/favorites", favoriteRoutes)

export {apiRoutes}