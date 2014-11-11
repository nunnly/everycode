/**
 * 
 * @param {string} param to be judged
 * @return {string} "null", "undefined", "object", "boolean", etc.
 *                  CAUTIONS, customized class object will be returned 
 *                  its class name. eg-> function Person(){}; var obj = new Person();
 *                  typeOfParam(obj); // "Person"
 *                  function object will return "function"
 *-------------------------------------------------------------------------------------
 */

function typeOfParam(param) {
	if(param === null){
		return "null";
	}else if(typeof param == "object" && param.constructor.name !== "Object"){
		return param.constructor.name;
	}
	return typeof param;
}