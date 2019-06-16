import React from "react";
import resume from "../../constants/resume";
import "./timeline.css";

//<i className="fas fa-file-certificate"></i>
class Timeline extends React.Component {
  generateBullets(data) {
    const returnedData = [];
    data.forEach((element, index) => {
      returnedData.push(<p key={index}>{element}</p>);
    });
    return returnedData;
  }

  generateSkills(data) {
    const returnedSkills = [];
    data.forEach((element, index) => {
      returnedSkills.push(<li key={index}>{element}</li>);
    });
    return returnedSkills;
  }

  createTimeline() {
    const timelineData = resume.timeline;
    const tData = [];
    timelineData.forEach((timeline, index) => {
      tData.push(
        <div key={index} className="cd-timeline-block">
          <div className="cd-timeline-img cd-picture" />
          <div className="cd-timeline-content">
            <h2>{timeline.name}</h2>
            <div className="timeline-content-info">
              <span className="timeline-content-info-title">
                {timeline.title}
              </span>
              <span className="timeline-content-info-date">
                {timeline.duration}
              </span>
            </div>
            {this.generateBullets(timeline.bulletPoints)}
            <ul className="content-skills">
              {this.generateSkills(timeline.skills)}
            </ul>
          </div>
        </div>
      );
    });
    return tData;
  }

  render() {
    return (
      <div className="timeline-section" id="timeline">
        <section id="cd-timeline" className="cd-container">
          {this.createTimeline()}
        </section>
      </div>
    );
  }
}

export default Timeline;
