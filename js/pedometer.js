
//var currentSteps = document.getElementById('steps');

function startPedometer(){
	function onchangedCB(pedometerInfo) {
		var pData = {
	            calorie: pedometerInfo.cumulativeCalorie,
	            distance: pedometerInfo.cumulativeDistance,
	            runDownStep: pedometerInfo.cumulativeRunDownStepCount,
	            runStep: pedometerInfo.cumulativeRunStepCount,
	            runUpStep: pedometerInfo.cumulativeRunUpStepCount,
	            speed: pedometerInfo.speed,
	            stepStatus: pedometerInfo.stepStatus,
	            totalStep: pedometerInfo.cumulativeTotalStepCount,
	            walkDownStep: pedometerInfo.cumulativeWalkDownStepCount,
	            walkStep: pedometerInfo.cumulativeWalkStepCount,
	            walkUpStep: pedometerInfo.cumulativeWalkUpStepCount,
	            walkingFrequency: pedometerInfo.walkingFrequency
	         };
		
		console.log(pedometerInfo.cumulativeTotalStepCount);
	    //currentSteps.innerHTML = pedometerInfo.cumulativeTotalStepCount;
	    sendMessage(pedometerInfo.cumulativeTotalStepCount, 'pedometer');
	}

	function errorCallback(info) {
		console.log(info);
	}
	
	try {
		tizen.humanactivitymonitor.start('PEDOMETER', onchangedCB, errorCallback);
	} catch (info) {
		console.log(info);
	}
	
}

startPedometer();




