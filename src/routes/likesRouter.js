import { Router } from "express";
import { getLikesContr,postLike} from "../controllers/likesController.js";
import { getLikesMd } from "../middlewares/getLikesMiddleware.js";
import { postLikeMd } from "../middlewares/postLikeMiddleware.js";

const likesRouter = Router();

likesRouter.get("/likes",getLikesMd,getLikesContr);
likesRouter.post("/likes",postLikeMd,postLike);

export default likesRouter;