import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

var moment = require("moment");

function WeatherData(props) {
  let _date = new Date();
  const weekday = props.reading.dt * 1000;
  _date.setTime(weekday);
  const _img = `owf owf-${props.reading.weather[0].id} owf-5x`;
  const fahrenheitMax = props.reading.main.temp_max.toFixed(2);

  const fahrenheitMin = props.reading.main.temp_min.toFixed(2);

  const farenheitTemp = props.reading.main.temp.toFixed(2);

  return (
    <>
      <div id="weatherCard" className="col-2">
        <Link
          to={{
            pathname: `/hourlyForecast/${props.reading.day}`,
            state: {
              completeData: props.completeData,
              cityName: props.cityName,
            },
          }}
        >
          <h4 className="text-secondary">
            {moment(_date).format("MMMM D YYYY")}{" "}
          </h4>
          <h5>{props.reading.day}</h5>
          <i className={_img}></i>
          <p>{props.reading.weather[0].description}</p>
          <h5>Temperature: {farenheitTemp}°F</h5>
          <p>
            Minimum: {fahrenheitMin}°F and Maximum: {fahrenheitMax}°F
          </p>
        </Link>
      </div>
    </>
  );
}

export default withRouter(WeatherData);
