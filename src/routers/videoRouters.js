import express from "express";
import { see, edit, deleteVideo, upload } from "../controllers/videoController";

const viedoRouter = express.Router();

viedoRouter.get("/:id(\\d+)", see);
viedoRouter.get("/:id(\\d+)/edit", edit);
viedoRouter.get("/:id(\\d+)/delete", deleteVideo);
viedoRouter.get("/upload", upload);

export default viedoRouter;
