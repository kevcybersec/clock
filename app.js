function makeDate() {
	let currentDate = new Date();

	let secs = currentDate.getSeconds(),
		mins = currentDate.getMinutes(),
		hours = currentDate.getHours(),
		day = currentDate.getDay(),
		date = currentDate.getDate(),
		month = currentDate.getMonth(),
		year = currentDate.getFullYear(),
        period = "AM",
        greeting = "Good Morning";
	if (secs < 10) {
		secs = `0${secs}`;
	}
	/*if (hours < 10) {
		hours = `0${hours}`;
	}*/
    if (hours == 0){
        hours = 12;
    }
    if(hours > 12){
        hours = hours - 12;
        period = "PM";
        greeting = "Good Afternoon"
    }
    /*if(hours > 12){
        hours = hours + 6;
        period = "PM";
        greeting = "Good Evening"
    }*/
    /*if(hours < 12){
        let greeting = "Good Morning";
    }else{
        let greeting = "Good Afternoon";
    }*/
    
	if (mins < 10) {
		mins = `0${mins}`;
	}
    
	let daysOfTheWeek = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"thursday",
		"Friday",
		"Saturday",
	];
	let formattedDay = daysOfTheWeek[day];

	let monthsOfTheYear = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	let formattedMonth = monthsOfTheYear[month];

	document.getElementById("day").innerText = formattedDay;
	document.getElementById("date").innerText = date;
	document.getElementById("month").innerText = formattedMonth;
	document.getElementById("year").innerText = year;
	document.getElementById("hours").innerText = hours;
	document.getElementById("mins").innerText = mins;
	document.getElementById("secs").innerText = secs;
    document.getElementById("period").innerText = period;
    document.getElementById("greeting").innerText = greeting;
}

setInterval(makeDate, 1000);

//setInterval(makeDate, );

//to do
//have am/pm
//greeting depending on time
//style clock
//bonus (post fix) 11th