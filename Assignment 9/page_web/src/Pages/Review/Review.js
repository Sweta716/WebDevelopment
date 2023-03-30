import React from "react";
import AboutCard from "../../Components/Review/Review";
import MainScreen from "../../Components/MainScreen/MainScreen";
import about from "../../Data/review";
import "./Review.css"; // import custom CSS file

const AboutPage = () => {
  const data = () => {
    return about;
  };
  return (
    <>
      <MainScreen title="Review" />
      <div className="cards-container"> {/* add a new container element */}
        {data().map((data) => (
          <AboutCard
            title={data.title}
            loc={data.location}
            image={data.image}
            key={data.key}
            content={data.content}
          />
        ))}
      </div>
    </>
  );
};

export default AboutPage;
