function totItemsSelected (value) {
	var value = parseFloat(value.replace(/[^\d]/g, ""));
	var diff = value - 3; 
	var sumStr = diff.toString();
	
	if (sumStr > 3) {
		return "9811_chartpages2.xdt"; 
		} else {
		return "9811_chartpages3.xdt"
};
