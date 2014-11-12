function sign(number){
    var num = new Number(number);
    console.log(number + ":" + num);
    return num>0?1:(num==0?0:(num<0?-1:("NaN")));
}