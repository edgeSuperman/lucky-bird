/**
 * Created by JetBrains PhpStorm.
 * User: Administrator
 * Date: 12-6-28
 * Time: 下午10:18
 * find out interest
 */
var util = {
    rand: function(max){
        return Math.round (Math.random()*max+0.5);
    }
};

var luckyFish = {
    init: function(users){
        this._users = users;
        this._winners = [];
    },

    //计算哪八个参加，而最终获胜者是谁
    computeLotteryQueue: function(){
        var start = util.rand(this._users.length);
        var chosenUsers = this._users.slice(start, start + 8);
        if(chosenUsers.length < 8){

            //看缺几个 补上到8个
            chosenUsers = chosenUsers.concat(chosenUsers.slice(0, 8-chosenUsers.length));
        }

        //参加折腾的同学
        this._chosenUsers = chosenUsers;

        //中奖的同学
        this._selected = util.rand(8);
        this._winner = this._chosenUsers[this._selected];
    },
    computeFight: function(){
        var result = [this._chosenUsers];
        var compute = function(){
            var oldResult = result[result.length - 1];
            if(oldResult.length != 1){
                var newResult = [];
                for(var i = 0, len = oldResult.length; i < len; i+=2){
                    var userA = oldResult[i];
                    var userB = oldResult[i+1];
                    //TODO 各种判断计算 8 4 2 1的顺序
                }
                result.push(newResult)
                compute();
            }
        };
        compute();
        this._fightResult = result;
    },

    //交换两个user数组中一个元素
    _swapUserBetweenArray: function(user, from, to){
        for(var i = 0, len = from.length; i < len ;i++){
            if(user.index == from[i].index){
                from.splice(i, 1);
                to.push(user);
            }
        }
    },
    //胜出
    winUp: function(user){
        this._swapUserBetweenArray(user, this._users, this._winners);
    },

    //玩过的人，将他恢复
    revertUser: function(user){
        this._swapUserBetweenArray(user, this._winners, this._users);
    }
};


//动画开始，从8个角逐到1个
var luckyFishMovie = {
    reset: function(){},
    start: function(){},
    pause: function(){},
    stop: function(){}
};

//决出冠军，然后冠军秀一下
var championMovie = {
    reset: function(){},
    start: function(){},
    pause: function(){},
    stop: function(){}
};