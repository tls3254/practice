"use strict";

const User = require("../../models/User");

const output ={
    hello : (req, res) => { //기능 function hello()와 같은 기능
        res.render("home/index");
    },
    
    login :(req, res) =>{ //로그인
        res.render("home/login");
    },
    register : (req, res)=>{
        res.render("home/register")
    }
};


const process = {
    login: async (req, res) => {
        const user = new User(req.body); //인스턴스를 할떄 req.body를 넣어서 함
        const response = await user.login();
        return res.json(response);
    },
    register: async (req,res) => {
        const user = new User(req.body); //인스턴스를 할떄 req.body를 넣어서 함
        const response = await user.register();
        return res.json(response);
    }
};

module.exports = {
    output,
    process,
};
