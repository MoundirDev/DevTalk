import express from "express";
import {requestEmailVerification, verifyEmailAndCreateUser, login} from "../controllers/auth.js";

export const router = express.Router();

router.post('/request-verification', requestEmailVerification);

router.post('/verify-email', verifyEmailAndCreateUser);

router.post('/login', login);

// ! logout is done by front-end