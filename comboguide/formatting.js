function phoneLabelFormat(phone, label){
	if ((phone ==="") || (label === "")){
		return "";
	} else {
		return label + ": " + phone;
	}
};