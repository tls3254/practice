"use strict";

//모듈
const express = require("express"); //require명령어로 express라는 모듈 다운
const app = express();  //app이라는 변수 안에 express를 실행 시킨다

//라우팅
const home = require("./src/routes/home"); //상대적으로 명시해줘야됨
// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/" , home); //use->미들 웨어를 등록해주는 메서드.

module.exports =app;