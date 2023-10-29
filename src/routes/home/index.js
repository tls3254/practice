"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.hello); //기능

router.get("/login", ctrl.login); //로그인

module.exports = router;