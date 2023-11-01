"use strict";

class UserStorage {
    static #users = {
        id: ["woorimIT", "나개발", "김팀장"],
        psword: ["1234", "1234", "1234"],
        name:["우리밋","나개발","김팀장"],
    };

    static getUsers(...fields){
        const users =this.#users;
        const newUsers =fields.reduce((newUsers, field) =>{
            console.log(newUsers,field);
            if(users.hasOwnProperty(field)){
                newUsers[field] =users[field];
            }
            return newUsers;
        } , {});
        return newUsers;
    }

    static getUsersInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id); 
        const usersKeys = Object.keys(users); //Object.keys(users) -> [id,psword,name]
        const userInfo = usersKeys.reduce((newUser, info) =>{
            newUser[info] = users[info][idx];
            return newUser;
        }, {});//초기값

        return userInfo;
    }
    
    static save(userInfo){
        const users =this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return { success:true };
    }
}

module.exports =UserStorage;