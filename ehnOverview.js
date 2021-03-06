var logoStack = { // store logos
	"M&S" : "M-and-S.pdf",
	"ECM" : "ECM.pdf",
	"RSA" : "RSA.pdf",
	"AJG" : "AJG_Co.pdf"
}

// return different sets of copy based on selections
function _inState(networkState, omit){ 
	if(networkState != 'general') {
		if(omit != ''){
			return networkState;
		}
		
		return ' in ' + networkState;
	}
	return '';
}

// allows user to upload a logo if a preloaded one is not what they want to use
function getLogo(control, choice){
	var logo = " ";
	
	if (control != " "){ 
		logo = logoStack[choice]; 
	} 
	return logo;
}

// chose a cover for the brochure - but only if FL or SC is not already selected
function coverOption(control, generalCoverSelect){
	var coverDefault = '12076_EHN_E1_OverviewBrochure.pdf';
	var coverAlt ;
	
	switch(control) {
		case 'Florida':
			coverAlt = '12076-cover-puppet.pdf';
			break;
		case 'general':
			if(generalCoverSelect == "puppet") {
				coverAlt = '12076-cover-puppet.pdf';
			}
			break;
	}
	
	return coverAlt || coverDefault;
}