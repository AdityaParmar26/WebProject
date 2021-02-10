const day = document.getElementById("day");
const date = document.getElementById("date");
const cityName = document.getElementById("cityName");
const checkWeather = document.getElementById("checkWeather");
const temp_output_city_name = document.getElementById("temp_output_city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const bottom_data_temp = document.querySelector(".bottom_data_temp");

const getTempInfo = async(e) => {
    e.preventDefault();
    let cityNameVal = cityName.value;
    if (cityNameVal === "") {
        temp_output_city_name.innerText = "Please provide the name of City..";
        bottom_data_temp.classList.add('hide_data');
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityNameVal}&units=metric&appid=cde78ce32e86514207e9cce26eb633ee`;
            const response = await fetch(url);
            const data = await response.json();
            const array_data = [data];
            // console.log(data);
            temp.innerText = `${array_data[0].main.temp}`;
            temp_output_city_name.innerText = `${array_data[0].name}, ${array_data[0].sys.country}`;
            const tempStatus = array_data[0].weather[0].main;
            if (tempStatus == "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            } else if (tempStatus == "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempStatus == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-rain' style='color: #a4b0be;'></i>";
            } else {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }
            bottom_data_temp.classList.remove('hide_data');
        } catch {
            temp_output_city_name.innerText = `Please Enter the Proper Name`;
            bottom_data_temp.classList.add('hide_data');
        }
    }
}

const gettingDay = () => {
    var today = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[today.getDay()];
    day.innerText = n;
}

const gettingDate = () => {
    var d = new Date();
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    var month = months[d.getMonth()];
    var today_date = d.getDate();
    date.innerText = `${today_date} ${month}`;
}


gettingDate();
gettingDay();
checkWeather.addEventListener("click", getTempInfo);