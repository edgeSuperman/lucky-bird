/**
 * Created by JetBrains PhpStorm.
 * User: Administrator
 * Date: 12-6-28
 * Time: 下午10:21
 * find out interest
 */


users = (function(){
    var count = 100;
    var result = [];
    while(count){
        result.push({
            index: count-1,
            avatar: "imgs/1.jpg",
            name:"李开复"+ count,
            weight: 0
        });
        count--;
    }
    return result;
})();