//测试标题
module('2014年11月');
//测试内容
test("11日 typeOfParam", function() {
    var exist = typeof typeOfParam;
    // empty function
    function T__1 () {
    }

    ok(exist, 'typeOfParam函数存在检测');
    if (exist) {
        equal(typeOfParam(12345), 'number', 'number类型检测');
        equal(typeOfParam(true), 'boolean', 'boolean类型检测');
        equal(typeOfParam("test"), 'string', 'string类型检测');
        equal(typeOfParam({}), 'object', 'object类型检测');
        equal(typeOfParam(null), 'null', 'null类型检测');
        equal(typeOfParam(undefined), 'undefined', 'undefined类型检测');
        var obj = new T__1();
        equal(typeOfParam(obj), 'T__1', 'customized class check');
        equal(typeOfParam(T__1), 'function', 'function类型检测');
    }
});

test("12日 sign", function(){
    var exist = typeof sign;
    ok(exist, 'sign函数存在检测');
    if (exist) {
        equal(sign(3), 1, '正数检测');
        equal(sign(-3), -1, '负数检测');
        equal(sign(0), 0, '0检测');
        equal(sign(NaN), "NaN", 'NaN检测');
        equal(sign("foo"), "NaN", '字符串检测');
        equal(sign(), "NaN", '空参数检测');
        equal(sign([42]), 1, '正数单元素数组检测');
        equal(sign([-42]), -1, '负数单元素数组检测');
        equal(sign([0]), 0, '0单元素数组检测');
        equal(sign([4,2]), "NaN", '多元素数组检测');
        equal(sign(['42']), 1, '单正数字符串元素数组检测');
        equal(sign(['-42']), -1, '单负数字符串元素数组检测');
        equal(sign(['0']), 0, '字符串0元素数组检测');
        equal(sign(['4','2']), "NaN", '多字符串元素数组检测');
    }
});

test("13日 reverse", function(){
    var exist = typeof String.prototype.reverse;
    console.log(exist);
    ok(exist, "reverse方法检测");
    if(exist){
        equal("asdfasdfasdf".reverse(), "fdsafdsafdsa","reverse测试1");
        equal("1234567890".reverse(), "0987654321","reverse测试1");
    }
});