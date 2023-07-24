function clock() {
    let days : string[] = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    let months : string [] = [
        "January",
        "Febuary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]


    let hrs : any = document.getElementById("hours")
    let min : any = document.getElementById("minutes")
    let sec : any = document.getElementById("seconds")
    let periods : any = document.getElementById("Am_Pm")
    let date  : any = document.getElementById("ddmmyy")
    let day  : any = document.getElementById("dd")

    let time = new Date();
    let h : number | String = time.getHours()
    let m : number | String = time.getMinutes()
    let s : number | String = time.getSeconds()
    let dy = time.getDay()
    let dd = time.getDate()
    let mm = time.getMonth()
    let yy = time.getFullYear()

    if( h > 12 ) {
        h = h - 12
    }
    if( h == 0 ) {
        h = 12
    }

    let ampm = h <= 12 ? "AM" : "PM";

    h = h < 10 ? "0"+h : h;
    m = m < 10 ? "0"+m : m; 
    s = s < 10 ? "0"+s : s;  

    hrs.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
    periods.innerHTML = ampm;
    day.innerHTML= days[dy];
    date.innerHTML = months [mm] + " " + dd + ", " + yy;
}

setInterval(clock, 1000)