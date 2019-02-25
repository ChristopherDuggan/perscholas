//display current time
const timeDisp = () => {
	let date = new Date ();
  //pull hours minutes and seconds out of new Date
	let h = date.getHours();
	let m = date.getMinutes();
	let s = date.getSeconds();


//################## originally intended to do a 12 hour clock, but ran out of time (heheheh) before I could figure out how to get the AM/PM time conversion to work with the alarm so commented out####################
  // //am/pm toggle
	// let cycle = 'AM';
	//
  // //remove 00:00 o'clock
	// if (h === 0) {
	// 	h= 12;
	// }
	//
  // //convert to 12 hour clock
	// if (h > 12) {
	// 	h = h - 12;
	// }
	//
  // //switch am to pm after noon
	// if (h >= 12) {
	// cycle = "PM"
	// }

  //add 0 to start of display to maintain 2 digit display
	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;

  //lay out variables in readable format
	let time = h + ":" + m + ":" + s;

  //push to HTML element
	document.getElementById('clock').innerHTML = time;

  //update every 1000 miliseconds (1 second)
	setTimeout(timeDisp, 1000);
}

//take in time from user to set alarm
const setAlarm = () => {
	let hr = document.getElementById('hr').value;
	let min = document.getElementById('min').value;

//get the difference in time between now and the intended alarm
	let alarmTime = new Date();
	alarmTime.setHours(hr, min,00);

//Printing the alarm time to the document
	document.getElementById('list').innerHTML = alarmTime;

//when the time has elasped, display hidden video iframe, prompt user to play
//############################## Originally inteded for video to auto play but ran out of time (hohoho) before I could figure that out ##########################
	let timeElapse = alarmTime - new Date()
	setTimeout(
		() => {
			document.getElementById('ifr').style.display = 'block';
			window.alert('Hit play!');
		},
		alarmTime - Date.now()
	)
}
