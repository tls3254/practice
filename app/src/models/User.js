"use strict";

const { response } = require("express");
const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body =body; //body는 해당하는 데이터를 들고 다님
    }
    //로그인
    async login() {
        const client =this.body;
        try{
            //await promise 반환하는 것에만 할 수 있다. async안에서만 사용가능
            const { id, psword } = await UserStorage.getUsersInfo(client.id); //클라이언트가 입력한 아이디 값

            if(id){
                if(id === client.id && psword === client.psword){
                    return { success: true};
                }
                return{ success: false ,msg:"비밀번호가 틀렸습니다."};
            }
            return{ success: false, msg: "존재하지 않는 아이디 입니다."};
        }catch(err){
            return{success:false, msg: err};
        };
    }
    //회원가입
    async register(){
        const client =this.body;
        try{
        const response = await UserStorage.save(client);
        return response;
        }catch(err){
            return { success: false , msg: err };
        }
    }

    //아이디 중복 체크
    async idcheck(){
        const client =this.body;
        try{
        const { id } = await UserStorage.getUsersInfo(client.id); //클라이언트가 입력한 아이디 값
            if(id === client.id || id === null){
                return { success: false };
            }
        }catch(err){
            return { success: true };
        }
    }
    //id 찾기
    async id_found(){
        const client =this.body;
        try{
        const { mail } = await UserStorage.mail_found(client.mail);
        const { name } = await UserStorage.name_found(client.name);
        if(name === client.name && mail === client.mail){
            return { success: true };
        }
        }catch(err){
            return { success: false };
        }
    }
    async password_found(){
        const client =this.body;
        try{
        const { mail } = await UserStorage.mail_found(client.mail);
        const { id } = await UserStorage.getUsersInfo(client.id);
        if(id === client.id && mail === client.mail){
            return { success: true };
        }
        }catch(err){
            return { success: false };
        }
    }
}

module.exports = User;