"use strict";

const id = document.querySelector("#id"),  //질의 선택자
    idcheckBtn = document.querySelector("#a"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    mail = document.querySelector("#mail"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);
idcheckBtn.addEventListener("click", idcheck);
//회원가입
function register(){
    if(!id.value){
        return alert("아이디를 입력해주십시오.");
    }
    if(psword.value !== confirmPsword.value){
        return alert("비밀번호가 일치하지 않습니다.");
    }

    const req ={
        id : id.value,
        name : name.value,
        psword: psword.value,
        mail:mail.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success) {
            location.href = "/login";
        }else{
            alert(res.msg);
        }
    }).catch((err) => {
        console.error(new Error("회원가입 중 에러 발생"));
    });
    
}
//아이디 중복 체크
function idcheck(){
    const req ={
        id : id.value,
    }

    fetch("/idcheck", {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success) {
            return alert("아이디가 사용가능합니다");
        }else{
            return alert("아이디가 사용가능하지 않습니다");
        }
    }).catch((err) => {
        console.error(new Error("아이디 중복"));
    });

}