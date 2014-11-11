//测试标题
module('2014年11月11日 22:44:49');
//测试内容
test("typeOfParam", function() {

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
