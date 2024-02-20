//creacion de ruta

import { Router } from "express";
import { register ,login } from "../controllers/auth.controller.js";

const router = Router();

router.post("/register",register);//ruta registra
router.post("/login",login);//ruta iniciar sesion

export default router;