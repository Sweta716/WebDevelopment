import React, { useState, useEffect } from "react";
import HourlyCityForecast from "./HourlyCityForecast";
import moment from "moment";

function Hourly(props) {
  console.log(props);
  let completeData = props.location.state.completeData;
  let _selectedParam = props.match.params;

  const [_data, _setData] = useState([]);

  useEffect(() => {
    const tempData = completeData.filter((cd) => cd.day == _selectedParam.day);
    _setData(tempData);
    console.log(_data);
  }, [_selectedParam.day]);

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
