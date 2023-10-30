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

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success) {
            location.href = "/";
        }else{
            alert(res.msg);
        }
    }).catch((err) => {
        console.error(new Error("로그인 중 에러 발생"));
    });
    
 }


//DOM //html의 존재하는 데이터들을 사용