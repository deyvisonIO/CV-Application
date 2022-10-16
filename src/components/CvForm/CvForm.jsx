import React from 'react';

import { CvEducational } from './CvEducational';
import { CvGeneral } from './CvGeneral';
import { CvPratical } from './CvPractical';

import uniqid from 'uniqid';


export class CvForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      educationalExperience: [],
      practicalExperience: [],
    }

    this.deleteEducationItem = this.deleteEducationItem.bind(this);
    this.deletePracticalItem = this.deletePracticalItem.bind(this);

    this.addEducationalComponent = this.addEducationalComponent.bind(this);
    this.addPracticalComponent = this.addPracticalComponent.bind(this);

    this.changeEducationalComponent = this.changeEducationalComponent.bind(this);
    this.changePracticalComponent = this.changePracticalComponent.bind(this);
  }

  deleteEducationItem = (id) => {
    this.setState({
      educationalExperience: this.state.educationalExperience.filter(item => item.id !== id)
    })
    this.props.addEducationalExperience(this.state.educationalExperience)
  }

  addEducationalComponent = () => {
    this.setState({
      educationalExperience: this.state.educationalExperience.concat({
        id: uniqid(),
        schoolName: '',
        studyTitle: '',
        studyDateStart: '',
        studyDateEnd: '',
      })
    })
    this.props.addEducationalExperience(this.state.educationalExperience)
  }

  changeEducationalComponent = (id, newProps) => {
    const itemIndex = this.state.educationalExperience.findIndex(item => item.id === id);
    if (itemIndex > -1) {
      const newEducationalExperience = this.state.educationalExperience.slice();
      newEducationalExperience[itemIndex] = { ...newProps }
      this.setState({
        educationalExperience: newEducationalExperience
      })
    }
    this.props.addEducationalExperience(this.state.educationalExperience)
  }

  deletePracticalItem = (id) => {
    this.setState({
      practicalExperience: this.state.practicalExperience.filter(item => item.id !== id)
    })
    this.props.addPracticalExperience(this.state.practicalExperience)
  }

  addPracticalComponent = () => {
    this.setState({
      practicalExperience: this.state.practicalExperience.concat({
        id: uniqid(),
        companyName: '',
        positionTitle: '',
        mainTasks: '',
        practicalDateStart: '',
        practicalDateEnd: '',
      })
    })
    this.props.addPracticalExperience(this.state.practicalExperience)
  }

  changePracticalComponent = (id, newProps) => {
    const itemIndex = this.state.practicalExperience.findIndex(item => item.id === id);
    if (itemIndex > -1) {
      const newPracticalExperience = this.state.practicalExperience.slice();
      newPracticalExperience[itemIndex] = { ...newProps };
      this.setState({
        practicalExperience: newPracticalExperience
      })
    }
    this.props.addPracticalExperience(this.state.practicalExperience)
  }


  render() {
    return (      
      <div className="formDiv" >
        <form action="" className="form">
          <div className='formSection'>
            <h2 className='formSectionTitle'>General Information</h2>
            <CvGeneral changeGeneralInformation={this.props.changeGeneralInformation} />
          </div>
          <div className='formSection'>
            <h2 className='formSectionTitle'>Educational Experience</h2>
            {this.state.educationalExperience.map(item => (
              <div key={item.id}>
                <CvEducational 
                  key={item.id} 
                  changeEducationalComponent={this.changeEducationalComponent} 
                  id={item.id} 
                  schoolName={item.schoolName}
                  studyTitle={item.studyTitle}
                  studyDateStart={item.studyDateStart}
                  studyDateEnd={item.studyDateEnd}
                />
                <button onClick={(event, id = item.id) => this.deleteEducationItem(id)} type="button" className='deleteBtn' >Remove</button>
              </div>
            ))}
            <button onClick={this.addEducationalComponent} type="button" className='addBtn' >Add</button>
          </div>
          <div className='formSection'>
            <h2 className='formSectionTitle'>Practical Experience</h2>
            {this.state.practicalExperience.map(item => (
              <div key={item.id}>
                <CvPratical
                  key={item.id} 
                  changePracticalComponent={this.changePracticalComponent} 
                  id={item.id} 
                  companyName={item.companyName}
                  positionTitle={item.positionTitle}
                  mainTasks={item.mainTasks}
                  practicalDateStart={item.practicalDateStart}
                  practicalDateEnd={item.practicalDateEnd}
                />
                <button onClick={(event, id = item.id) => this.deletePracticalItem(id)} type="button" className='deleteBtn' >Remove</button>
              </div>
            ))}
            <button onClick={this.addPracticalComponent} type="button" className='addBtn' >Add</button>
          </div>
        </form>
      </div>
    );
  }
}