"use strict";

const fs = require("fs").promises;
class UserStorage {
    static #getUserInfo(data, id){
        const users =JSON.parse(data);
        const idx = users.id.indexOf(id); 
        const usersKeys = Object.keys(users); //Object.keys(users) -> [id,psword,name]
        const userInfo = usersKeys.reduce((newUser, info) =>{
            newUser[info] = users[info][idx];
            return newUser;
        }, {});//초기값

        return userInfo;
    }

    static getUsers(...fields){
//        const users =this.#users;
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
        return fs
            .readFile("./src/databases/users.json")
            .then((data) => {     //성공했을때
                return this.#getUserInfo(data, id);
            })
            .catch(console.error);  //실패했을때 
    }

    
    
    static save(userInfo){
//        const users =this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return { success:true };
    }
}

module.exports =UserStorage;