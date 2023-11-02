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

    static #getUsersInfo(data, isAll ,fields){
        const users =JSON.parse(data);
        if (isAll) return users;
        const newUsers =fields.reduce((newUsers, field) =>{
            console.log(newUsers,field);
            if(users.hasOwnProperty(field)){
                newUsers[field] =users[field];
            }
            return newUsers;
        } , {});
        return newUsers;
    }

    static getUsers(isAll, ...fields){
        return fs
            .readFile("./src/databases/users.json")
            .then((data) => {     //성공했을때
                return this.#getUsersInfo(data, isAll, fields);
            })
            .catch(console.error);  //실패했을때       
    }

    static getUsersInfo(id){
        return fs
            .readFile("./src/databases/users.json")
            .then((data) => {     //성공했을때
                return this.#getUserInfo(data, id);
            })
            .catch(console.error);  //실패했을때 
    }

    
    
    static async save(userInfo){
        const users = await this.getUsers(true);
        //데이터 추가
        if(users.id.includes(userInfo.id)){
            throw "이미 존재하는 아이디입니다.";
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return { success: true };
    }
}

module.exports =UserStorage;