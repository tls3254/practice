"use strict";

const id = document.querySelector("#id"),  //질의 선택자
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req ={
        id : id.value,
        psword: psword.value,
    };
    console.log(req);
    
 }


//DOM //html의 존재하는 데이터들을 사용