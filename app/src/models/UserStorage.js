"use strict";

const db = require("../config/db")
class UserStorage {
    //아이디 정보
    static getUsersInfo(id){
        return new Promise((resolve, reject) => { //promise안에 있는 구문이 성공하게 되면 resolve반환 실패시 reject반환
            const query ="SELECT * FROM login WHERE id = ?";
            db.query(query, [id] ,(err, data)=>{
                if(err) reject(`${err}`);
                resolve(data[0]);
            });
        });
    }
    //정보 저장
    static async save(userInfo){
        return new Promise((resolve, reject) => { //promise안에 있는 구문이 성공하게 되면 resolve반환 실패시 reject반환
            const query ="INSERT INTO login(id, psword , name ,mail) VALUES(?,?,?,?)";
            db.query(
                query, 
                [userInfo.id,userInfo.psword,userInfo.name,userInfo.mail],
                (err)=>{
                    if(err) reject(`${err}`);
                    resolve({ success: true });
            });
        });
    }
    //mail 정보 찾기
    static mail_found(mail){
        return new Promise((resolve, reject) => { //promise안에 있는 구문이 성공하게 되면 resolve반환 실패시 reject반환
            const query ="SELECT * FROM login WHERE mail =?";
            db.query(query, [mail], (err, data)=>{
                if(err) reject(`${err}`);
                resolve(data[0]);
            });
        });
    }
    //이름 찾기
    static name_found(name){
        return new Promise((resolve, reject) => { //promise안에 있는 구문이 성공하게 되면 resolve반환 실패시 reject반환
            const query ="SELECT * FROM login WHERE name =?";
            db.query(query, [name], (err, data)=>{
                if(err) reject(`${err}`);
                resolve(data[0]);
            });
        });
    }
}

module.exports =UserStorage;