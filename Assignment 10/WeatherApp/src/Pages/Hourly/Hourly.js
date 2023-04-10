import React, { useState, useEffect } from "react";
import HourlyCityForecast from "./HourlyCityForecast";
import moment from "moment";

function Hourly(props) {
  console.log(props);
  let completeData = props.location.state.completeData;
  let _selectedParam = props.match.params;

  const [_data, _setData] = useState([]);

  useEffect(() => {
    // Filter data for the selected day
    const tempData = completeData.filter((cd) => cd.day == _selectedParam.day);

    // Create an array of hourly data for the selected day
    const hourlyData = [];
    for (let i = 0; i < 24; i++) {
      const hourData = tempData.find(
        (d) => moment(d.dt_txt).hour() === i && moment(d.dt_txt).day() === moment().day(_selectedParam.day).day()
      );
      hourlyData.push(hourData || {});
    }

    _setData(hourlyData);
    console.log(_data);
  }, []);

  return (
    <div className="container">
      <h4 className="py-3">
        {" "}
        {props.location.state.cityName} {_selectedParam.day} Report
      </h4>
      <div className="justify-content-center m-2">{displayHourlyData()}</div>
    </div>
  );

  function displayHourlyData() {
    console.log("All Hours: ", _data);
    return _data.map((value, index) => (
      <HourlyCityForecast data={value} key={index} />
    ));
  }
}

export default Hourly;
