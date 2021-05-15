import express from "express";
import { see, edit, deleteVideo, upload } from "../controllers/videoController";

const viedoRouter = express.Router();

viedoRouter.get("/upload", upload);
viedoRouter.get("/:id", see);
viedoRouter.get("/:id/edit", edit);
viedoRouter.get("/:id/delete", deleteVideo);

export default viedoRouter;
