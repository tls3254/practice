"use strict";

const hello = (req, res) => { //기능 function hello()와 같은 기능
    res.render("home/index");
};

const login =(req, res) =>{ //로그인
    res.render("home/login");
};

module.exports = {
    hello,
    login,
};
