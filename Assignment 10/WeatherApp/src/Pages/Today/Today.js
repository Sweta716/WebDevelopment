// import React, { useState, useEffect } from "react";
// import WeatherData from "../../Components/Weather Data/WeatherData";
// import TextField from "@material-ui/core/TextField";
// import { useHistoryState } from "../../useHistroy";
// import "./Today.css"; 
// var moment = require("moment");

// function Today() {
//   const [completeData, setCompleteData] = useState([]);
//   const [dailyData, setDailyData] = useState(
//     JSON.parse(localStorage.getItem("data")) || []
//   );
//   const [cityName, setCityName] = useState("");
//   const [hasError, setHasError] = useState(false);

//   useEffect(() => {
//     setDailyData(JSON.parse(localStorage.getItem("data")) || []);
//     if (dailyData.length <= 0) refreshData();
//   }, []);

//   let display;
//   if (completeData.length > 0 || hasError == false) {
//     display = displayData();
//   }
//   function changeText(event) {
//     setCityName(event.target.value);
//   }

//   function displayData() {
//     return dailyData.map((reading, index) => (
//       <WeatherData
//         reading={reading}
//         key={index}
//         completeData={completeData}
//         cityName={cityName}
//       />
//     ));
//   }
 
  
//   function refreshData() {
//     const _url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&cnt=48&APPID=393a057f11f7b91f4fae8005177c4fd6`;
//     fetch(_url)
//       .then((res) => res.json())
//       .then((data) => {
//         const _data = data.list.filter((reading) =>
//           reading.dt_txt.includes("00:00:00")
//         );
//         data.list.map(function (name) {
//           let _date = new Date();
//           const weekday = name.dt * 1000;
//           _date.setTime(weekday);
//           name.day = moment(_date).format("dddd");
//         });

//         setCompleteData(data.list);
//         setHasError(false);
//         setDailyData(_data);
//         localStorage.setItem("data", JSON.stringify(_data));
//         setDailyData(JSON.parse(localStorage.getItem("data")) || []);
//       })
//       .catch((err) => {
//         setCompleteData([]);
//         setHasError(true);
//         setDailyData([]);
//       });
//   }

import React, { useState, useEffect } from "react";
import WeatherData from "../../Components/Weather Data/WeatherData";
import TextField from "@material-ui/core/TextField";
import moment from "moment";
import axios from "axios";
import "./Today.css";

function Today() {
  const [completeData, setCompleteData] = useState([]);
  const [dailyData, setDailyData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  const [cityName, setCityName] = useState("");
  const [hasError, setHasError] = useState(false);
  const [hourlyData, setHourlyData] = useState([]);

  useEffect(() => {
    setDailyData(JSON.parse(localStorage.getItem("data")) || []);
    if (dailyData.length <= 0) refreshData();
  }, []);

  useEffect(() => {
    if (cityName !== "") {
      const apiKey = "YOUR_API_KEY";
      const apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${apiKey}`;
      axios.get(apiURL).then((res) => {
        const hourlyData = res.data.list.filter((data, index) => index % 8 === 0);
        setHourlyData(hourlyData);
      });
    }
  }, [cityName]);

  let display;
  if (completeData.length > 0 || hasError === false) {
    display = displayData();
  }

  function changeText(event) {
    setCityName(event.target.value);
  }

  function displayData() {
    return dailyData.map((reading, index) => (
      <WeatherData
        reading={reading}
        key={index}
        completeData={completeData}
        cityName={cityName}
        hourlyData={hourlyData}
      />
    ));
  }

  function refreshData() {
    const _url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&cnt=48&APPID=393a057f11f7b91f4fae8005177c4fd6`;
    fetch(_url)
      .then((res) => res.json())
      .then((data) => {
        const _data = data.list.filter((reading) =>
          reading.dt_txt.includes("00:00:00")
        );
        data.list.map(function (name) {
          let _date = new Date();
          const weekday = name.dt * 1000;
          _date.setTime(weekday);
          name.day = moment(_date).format("dddd");
        });

        setCompleteData(data.list);
        setHasError(false);
        setDailyData(_data);
        localStorage.setItem("data", JSON.stringify(_data));
        setDailyData(JSON.parse(localStorage.getItem("data")) || []);
      })
      .catch((err) => {
        setCompleteData([]);
        setHasError(true);
        setDailyData([]);
      });
  }

  return (
    <div className="container">
      <br></br>
      <br></br>
      <br></br>

      <h2>Weather Report - : {cityName} </h2>
      <br />
      <br />
      <div>
        <TextField
          id="city-name"
          label="Enter City Name Here"
          value={cityName}
          onChange={changeText}
        />
        {"     "}
        <input
          type="button"
          className="btn btn-warning mt-3"
          value="Get Weather Details"
          onClick={refreshData}
          disabled={cityName == 0}
        />
      </div>
      <br />
      <br />

      <br />

      <div>{display}</div>
    </div>
  );
}

export default Today;
