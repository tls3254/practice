"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.hello); //기능
router.get("/login", ctrl.output.login); //로그인
router.post("/login", ctrl.process.login);

module.exports = router;