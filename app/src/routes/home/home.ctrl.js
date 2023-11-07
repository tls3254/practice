"use strict";

const User = require("../../models/User");

const output ={
    hello : (req, res) => { //기능 function hello()와 같은 기능
        res.render("home/index");
    },
    login :(req, res) =>{ //로그인
        res.render("home/login");
    },
    register : (req, res)=>{//회원가입
        res.render("home/register")
    },
    id_found : (req, res)=>{//아이디 찾기
        res.render("home/id_found")
    },
    password_found : (req, res)=>{//아이디 찾기
        res.render("home/password_found")
    },
};

const process = {
    //로그인
    login: async (req, res) => {
        const user = new User(req.body); //인스턴스를 할떄 req.body를 넣어서 함
        const response = await user.login(); //awit 값을 다 받아올 때 까지 대기
        return res.json(response);
    },
    //회원가입
    register: async (req,res) => {
        const user = new User(req.body); //인스턴스를 할떄 req.body를 넣어서 함
        const response = await user.register();
        return res.json(response);
    },
    //아이디 중복확인
    idcheck: async (req,res) => {
        const user = new User(req.body); //인스턴스를 할떄 req.body를 넣어서 함
        const response = await user.idcheck();
        return res.json(response);
    },
    //id찾기
    id_found: async (req,res) => {
        const user = new User(req.body); //인스턴스를 할떄 req.body를 넣어서 함
        const response = await user.id_found();
        return res.json(response);
    },
    password_found: async (req,res) => {
        const user = new User(req.body); //인스턴스를 할떄 req.body를 넣어서 함
        const response = await user.password_found();
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};
