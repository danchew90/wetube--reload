import express from "express";
import {
  watch,
  getUpload,
  getEdit,
  postEdit,
  postUpload,
} from "../controllers/videoController";

const viedoRouter = express.Router();

viedoRouter.get("/:id(\\d+)", watch);
viedoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
viedoRouter.route("/upload").get(getUpload).post(postUpload);

export default viedoRouter;
