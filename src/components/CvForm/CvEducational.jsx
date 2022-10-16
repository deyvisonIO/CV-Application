import React from "react";
import { FormInput } from './FormInput';


export class CvEducational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      educationalItem: {
        id: this.props.id,
        schoolName: this.props.schoolName,
        studyTitle: this.props.studyTitle,
        studyDateStart: this.props.studyDateStart,
        studyDateEnd: this.props.studyDateEnd
      }
    }
  }

  changeSchoolName = (event) => {
    this.setState({
      educationalItem: {
        ...this.state.educationalItem,
        schoolName: event.target.value
      }
    });
    this.props.changeEducationalComponent(this.state.educationalItem.id, this.state.educationalItem);
  }

  changeStudyTitle = (event) => {
    this.setState({
      educationalItem: {
        ...this.state.educationalItem,
        studyTitle: event.target.value
      }
    });
    this.props.changeEducationalComponent(this.state.educationalItem.id, this.state.educationalItem);
  }

  changeStudyDateStart = (event) => {
    this.setState({
      educationalItem: {
        ...this.state.educationalItem,
        studyDateStart: event.target.value
      }
    });
    this.props.changeEducationalComponent(this.state.educationalItem.id, this.state.educationalItem);
  }

  changeStudyDateEnd = (event) => {
    this.setState({
      educationalItem: {
        ...this.state.educationalItem,
        studyDateEnd: event.target.value
      }
    });
    this.props.changeEducationalComponent(this.state.educationalItem.id, this.state.educationalItem);
  }


  render() {

    return (
      <div className="educationalSection" >
        <FormInput onChange={this.changeSchoolName} inputName='schoolName' labelText='School Name:' inputType='text' pHolder='School Name' />
        <FormInput onChange={this.changeStudyTitle} inputName='studyTitle' labelText='Study Title:' inputType='text' pHolder='Study Title' />
        <FormInput onChange={this.changeStudyDateStart} inputName='studyDateStart' labelText='Start Year:' inputType='text' pHolder='Start Year' />
        <FormInput onChange={this.changeStudyDateEnd} inputName='studyDateEnd' labelText='End Year:' inputType='text' pHolder='End Year' />
      </div>
    );
  }
}