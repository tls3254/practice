"use strict";

const output ={
    hello : (req, res) => { //기능 function hello()와 같은 기능
        res.render("home/index");
    },
    
    login :(req, res) =>{ //로그인
        res.render("home/login");
    },
};

const users = {
    id: ["woorimIT", "나개발", "김팀장"],
    psword: ["1234", "1234", "1234"],
};

const process = {
    login: (req, res) => {
        const id =req.body.id,
          psword =req.body.psword;

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다",
        });
    }
};

module.exports = {
    output,
    process,
};
