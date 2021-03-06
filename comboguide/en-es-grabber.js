function  mecLMbull (enes, lm1, lm2, lm3, lm4, lm5, lm6) {
	// checks value of 'ESP_Selection' (enes) and then all LM fields to pull correct text file
	if ((enes != "") && (lm1 || lm2 || lm3 || lm4 || lm5 || lm6 != "")){
		return "coverage-MECandLM_ESP.xft";
	} else if (lm1 || lm2 || lm3 || lm4 || lm5 || lm6 != "") {
		return "coverage-MECandLM.xft";
	} else {
		return "";
	}

};

function  mecBenefit (enes, lm1, lm2, lm3, lm4, lm5, lm6, mec1) {
	//checks value of 'ESP_Selection and then all LM + mec fields to pull correct text file
	if ((enes != "") && (lm1 || lm2 || lm3 || lm4 || lm5 || lm6 || mec1 != "")){
		return "planbenefit_MEC_ESP.xft";
	} else if (lm1 || lm2 || lm3 || lm4 || lm5 || lm6 || mec1 != "") {
		return "planbenefit_MEC.xft";
	} else {
		return "";
	}

};

function  lmBenefit (enes, lm1, lm2, lm3, lm4, lm5, lm6, mvp2, mvp3) {
	//checks value of 'ESP_Selection and then all LM + MVP2 + MVP3 fields to pull correct text file
	if ((enes != "") && (lm1 || lm2 || lm3 || lm4 || lm5 || lm6 || mvp2 || mvp3 != "")){
		return "planbenefit_LM_ESP.xft";
	} else if (lm1 || lm2 || lm3 || lm4 || lm5 || lm6 || mvp2 || mvp3 != "") {
		return "planbenefit_LM.xft";
	} else {
		return "";
	}

};

function  mvpFootnote (enes, mvp1, mvp2, mvp3) {
	//checks value of 'ESP_Selection and then all MVP# fields to pull correct text file
	if ((enes != "") && (mvp1 || mvp2 || mvp3 != "")){
		return "MVP_Footnote_ESP.xft";
	} else if (mvp1 || mvp2 || mvp3 != "") {
		return "MVP_Footnote.xft";
	} else {
		return "";
	}

};

function  mecLMtitle (enes, lm1, lm2, lm3, lm4, lm5, lm6) {
	//checks value of 'ESP_Selection and then all LM fields to pull correct text
	if ((enes != "") && (lm1 || lm2 || lm3 || lm4 || lm5 || lm6 != "")){
		return "y Médicos Limitados";
	} else if (lm1 || lm2 || lm3 || lm4 || lm5 || lm6 != "") {
		return "& Limited Medical";
	} else {
		return "";
	}

};

function  mvpFAQ (enes, mvp1, mvp2, mvp3) {
	//checks value of 'ESP_Selection and then all LM fields to pull correct text
	if ((enes != "") && (mvp1 || mvp2 || mvp3 != "")){
		return "faq7-mvp_ESP.xfp";
	} else {
		return "faq7-mvp.xfp";
	}

};
