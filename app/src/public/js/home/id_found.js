"use strict";

const name = document.querySelector("#name"),  //질의 선택자
    mail = document.querySelector("#mail"),
    foundBtn = document.querySelector("#button");

foundBtn.addEventListener("click", id_found);

function id_found(){
    const req ={
        name : name.value,
        mail: mail.value,
    };

    fetch("/id_found", {
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
        console.error(new Error("이름과 메일이 맞지 않습니다."));
    });
    
 }