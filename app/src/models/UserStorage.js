"use strict";

const db = require("../config/db")
class UserStorage {

    static getUsersInfo(id){
        return new Promise((resolve, reject) => { //promise안에 있는 구문이 성공하게 되면 resolve반환 실패시 reject반환
            const query ="SELECT * FROM login WHERE id = ?";
            db.query(query, [id] ,(err, data)=>{
                if(err) reject(`${err}`);
                resolve(data[0]);
            });
        });
    }

    static async save(userInfo){
        return new Promise((resolve, reject) => { //promise안에 있는 구문이 성공하게 되면 resolve반환 실패시 reject반환
            const query ="INSERT INTO login(id, psword , name) VALUES(?,?,?)";
            db.query(
                query, 
                [userInfo.id,userInfo.psword,userInfo.name],
                (err)=>{
                    if(err) reject(`${err}`);
                    resolve({ success: true });
            });
        });
    }
}

module.exports =UserStorage;