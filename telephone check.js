/*

validate bracket placement, country code, and bracket distance between open and closing
invalidate any entries with more than 2 hyphens

replace user input with telephone number not including any dashes, spaces, or brackets
user input is valid with 10 digits
user input is valid with 11 digits where the first digit is 1 indicating US country code

*/


function telephoneCheck(str) {
	if (str.indexOf("(") === -1 && str.indexOf(")") > -1) return false;
	if (str.indexOf(")") - str.indexOf("(") >= 5) return false;
	if (countHyphens(str) > 2) return false;
	if (str[0] === "-") return false;

	let numOnlyString = str.replace(/-| /g, "");

	if (numOnlyString.indexOf("(") < numOnlyString.indexOf(")")) {
		numOnlyString = numOnlyString.replace(/\(|\)/g, "");
	}

	if (numOnlyString.length == 10) {
		return true;
	} else if (numOnlyString.length == 11 && (numOnlyString.charAt(0) == "1")) {
		return true;
	}
	return false;
};

function countHyphens(str) {
	var temp = str;
	var count = (temp.match(/-/g) || []).length;
	return count;
}; 