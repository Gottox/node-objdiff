var util = require('util');

var diffbody = function(oldObj, newObj, key, diff) {
	if((key in oldObj) !== (key in newObj) || oldObj[key] !== newObj[key]) {
		diff[key] = { '$changed': true };
		if(key in oldObj)
			diff[key]['-'] = oldObj[key];
		if(key in newObj)
			diff[key]['+'] = newObj[key];
	}
	else if(oldObj[key] instanceof Object || oldObj[key] instanceof Array) {
		var subDiff = objdiff(oldObj[key], newObj[key]);
		for(var subKey in subDiff) {
			diff[key] = subDiff;
			break;
		}
	}
}

exports.objdiff = function(oldObj, newObj) {
	var diff = {}
	for(var key in oldObj) {
		diffbody(oldObj, newObj, key, diff);
	}
	for(var key in newObj) {
		if(!(key in oldObj))
			diffbody(oldObj, newObj, key, diff);
	}

	return diff;
}

exports.isdiff = function(obj) {
	return obj.$changed === true;
}
