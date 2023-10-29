"use strict";

const app =require("../app");

const Port =3000;

app.listen(Port, () =>{ //listen 이라는 명령어로 서버를 띄울 수 있음 3000
    console.log("서버 가동");
});  