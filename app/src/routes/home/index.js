"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.hello); //기능
router.get("/login", ctrl.output.login); //로그인
router.get("/register", ctrl.output.register);
router.get("/id_found", ctrl.output.id_found);
router.get("/password_found", ctrl.output.password_found);

router.post("/login", ctrl.process.login);
router.post("/idcheck",ctrl.process.idcheck);
router.post("/register", ctrl.process.register);
router.post("/password_found", ctrl.process.password_found);

module.exports = router;