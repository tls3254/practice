"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body =body; //body는 해당하는 데이터를 들고 다님
    }

    login() {
        const body =this.body;
        const { id, psword } = UserStorage.getUsersInfo(body.id); //클라이언트가 입력한 아이디 값

        if(id){
            if(id === body.id && psword === body.psword){
                return { success: true};
            }
            return{ success: false ,msg:"비밀번호가 틀렸습니다."};
        }
        return{ success: false, msg: "존재하지 않는 아이디 입니다."};
    }
}

module.exports = User;