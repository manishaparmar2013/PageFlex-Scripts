﻿////////// clean up inputs, convert to usable numbers /////////

function intConvert (value) {
	
	var errValues = ["", "0", "$0", 0, NaN]; // array of unacceptable values

	for (var i = 0; i < errValues.length; i++) {
		if (value == errValues[i]) {
			var num = 0; 
			// matched values get changed to 0, this waterfalls through the program
		} else {
			var num = parseFloat(value.replace(/[^\d.-]/g, ""));
			// unmatched values get changed to floating point number values
		}
	}
	
	return num;
}

function percentConvert (value) {
	var percent = intConvert(value) / 100;
	return percent;
}

/////////// calculators //////////

function providerPayment (a, b, c) {
	var billed = intConvert(a);
	var medicare = percentConvert(b);
	var multiple = intConvert(c);

	var mult = (billed * medicare * multiple);
	var providerTotal = dollarAmounts(mult);
	return providerTotal;
}

function competitionBilledCharge(a,b) {
	var billed = intConvert(a);
	var percentOfBilled = percentConvert(b);

	var mult = (billed * percentOfBilled);
	var billedCharges = dollarAmounts(mult);
	return billedCharges;
}

function hhcSavings(a, b, c) {
	var billed = intConvert(a);
	var multiple = percentConvert(b);
	var savings = percentConvert(c);

	var formula = billed * (1 - multiple) * savings;
	var result = dollarAmounts(formula);
	return result;
}

function hhcPEPM(a,b) {
	var members = intConvert(a);
	var pepm = intConvert(b);

	var formula = members * pepm * 12;
	var result = dollarAmounts(formula); 

	return result;
}

function hhcPerClaim(a,b){
	var claims = intConvert(a);
	var costPer = intConvert(b);

	var formula = claims * costPer;
	var result = dollarAmounts(formula);

	return result;
}

function hhcReducedSavings (a,b,c,d) {
	var postBilled = intConvert(competitionBilledCharge(a,b));
	var PostSavings = intConvert(hhcSavings(a,c,d)); 

	var subtract = postBilled - PostSavings; 
	var difference = dollarAmounts(subtract);
	return difference;
}

function hhcReducedPEPM (a,b,c,d) {
	var postBilled = intConvert(competitionBilledCharge(a,b));
	var postPepm = intConvert(hhcPEPM(c,d));

	var subtract = postBilled - postPepm;
	var difference = dollarAmounts(subtract);
	return difference;
} 

function hhcReducedPerClaim (a,b,c,d) {
	var postBilled = intConvert(competitionBilledCharge(a,b));
	var postPerClaim = intConvert(hhcPerClaim(c,d));

	var subtract = postBilled - postPerClaim;
	var difference = dollarAmounts(subtract);
	return difference;
} 

/////////// string coverters for PF to display back //////////

function wholeNumbers (value) { // display as plain numbers
	var num = Math.round(intConvert(value)).toString();
	return num;
}

function decimals (value) { // display as plain numbers
	var num = intConvert(value).toString();
	return num;
}

function dollarAmounts (value) { // display as dollar amounts

	var errValues = ["", "0", "$0", 0, NaN]; // create array of unnacceptable values

	for (var i = 0; i < errValues.length; i++) {
		if (value == errValues[i]) { // matched values get changed to "N/A"
			value = "N/A";
		} else {
			if (typeof value === 'number') {
				value = value.toString();
			} else {
				// leave the string as is
			}
			value = "$" + Math.round(intConvert(value)).toLocaleString('en').split(".")[0];

			if (value == "$NaN") {
				value = "N/A";
			} else {
				// dont change value
			}
		}
	}

	return value;
}

function percentages (value) { // display as percentages
	var percent = intConvert(value).toString();
	return percent + "%";
}
