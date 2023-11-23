import React, { useState } from "react";
import { useEffect } from "react";
const FrontPage = (params) => {
  const [frontPagers, setFrontPagers] = useState();
  const todaysJobsMaker = () => {
    const jobs = [];
    if (frontPagers && frontPagers.todaysjob) {
      frontPagers.todaysjob.items.forEach((element) => {
        jobs.push(
          <a href="#hello" target="_blank" className="single-job">
            <div className="title">{element.title}</div>
            <div className="description">{element.content}</div>
          </a>
        );
      });
    }
    return jobs;
  };
  useEffect(() => {
    console.log("UseEffect");
    console.log("Else");
    fetch(`http://localhost:3100/frontPagers`, { method: "GET" })
      .then((response) => response.text())
      .then((result) => {
        setFrontPagers(JSON.parse(result));
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);
  return (
    <div className="front-page">
      <div className="todays">
        <div className="todays-title">
          Todays Jobs 
          <span className="badge bg-secondary rounded">
            {frontPagers && frontPagers.todaysjob.count ? frontPagers.todaysjob.count : 0}
          </span>
        </div>
        <div className="divider"></div>
        <div className="todays-body">{todaysJobsMaker()}</div>
      </div>
    </div>
  );
};

export default FrontPage;
