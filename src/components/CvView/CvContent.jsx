import React from "react";

export class CvContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, email, phone,  educationalExperience, practicalExperience} = this.props;

    return (
      <div className="CvContent">
        <h2>Educational Experience</h2>
        {
        educationalExperience.map(item => (
          <div key={item.id} className="educationalExperience">
            <div > From: {item.studyDateStart} To: {item.studyDateEnd} </div>
            <div>
              <p>School: {item.schoolName} </p>
              <p>Study Title: {item.studyTitle} </p> 
            </div>
          </div>
        ))
        }
        <h2>Practical Experience</h2>
        {
        practicalExperience.map(item => (
          <div key={item.id} className="practicalExperience">
            <div className="company">
              <div > <h3>From:</h3> {item.practicalDateStart} <h3>To:</h3> {item.practicalDateEnd} </div>
              <div>
                <p>Company Name: {item.companyName} </p>
                <p>Position Title: {item.positionTitle} </p>
              </div>
            </div>
            <div>
              <h3>Main Tasks</h3>
              {item.mainTasks}
            </div>
          </div>
          ))
        }
      </div>
    );
  }
}