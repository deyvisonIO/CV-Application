import React from "react";
import uniqid from "uniqid";

import { CvForm } from "./CvForm/CvForm";
import { CvViewer } from "./CvView/CvViewer";


export class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInformation: {
        name: '',
        email: '',
        phone: '',
        photo: '',
      },
      educationalExperience: [],
      practicalExperience: [],
    }

    this.changeGeneralInformation = this.changeGeneralInformation.bind(this);
    this.addEducationalExperience = this.addEducationalExperience.bind(this);
    this.addPracticalExperience = this.addPracticalExperience.bind(this);
  }
  


  changeGeneralInformation = (newGeneralInformation) => {
    this.setState({
      generalInformation: {...newGeneralInformation}
    })
  }
  
  addEducationalExperience = (newEducationalExperience) => {
    this.setState({
      educationalExperience: newEducationalExperience
    })
  }

  addPracticalExperience = (newPracticalExperience) => {
    this.setState({
      practicalExperience: newPracticalExperience
    })
  }

  render() {


    return (
      <main className="content">
        <CvForm 
          changeGeneralInformation={this.changeGeneralInformation}
          addEducationalExperience={this.addEducationalExperience} 
          addPracticalExperience={this.addPracticalExperience} 
        />
        <CvViewer 
          generalInformation={this.state.generalInformation}
          educationalExperience={this.state.educationalExperience}
          practicalExperience={this.state.practicalExperience}
        />
      </main>
    );
  }
}