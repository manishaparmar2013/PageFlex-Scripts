function LMPlanNumber_2(LM1, LM2, LM3, LM4, LM5, LM6){

planArray = [LM1, LM2, LM3, LM4, LM5, LM6];

j=0;

var currentLM;

for (i=0;i<planArray.length;i++) {
	if(planArray[i] == '') {
	 //Do Nothing.
	}else{
	 j++;
	}
	// i should be the array item you're looking for
	if(i == 1){
	 currentLM=j;
	}
}
currentLM=currentLM.toString();
return currentLM;
}