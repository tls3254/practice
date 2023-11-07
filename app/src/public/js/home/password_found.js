"use strict";

const id = document.querySelector("#id"),  //질의 선택자
    mail = document.querySelector("#mail"),
    foundBtn = document.querySelector("#button");

foundBtn.addEventListener("click", password_found);

function password_found(){
    const req ={
        id : id.value,
        mail: mail.value,
    };

    fetch("/password_found", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success) {
            return alert("맞습니다");
        }
    }).catch((err) => {
        console.error(new Error("아이디와 메일이 맞지 않습니다."));
    });
    
 }