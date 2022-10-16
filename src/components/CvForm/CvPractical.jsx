import React from "react";
import { FormInput } from './FormInput';
import { FormTextArea } from './FormTextArea';


export class CvPratical extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      practicalItem: {
        id: this.props.id,
        companyName: this.props.companyName,
        positionTitle: this.props.positionTitle,
        mainTasks: this.props.mainTasks,
        practicalDateStart: this.props.practicalDateStart,
        practicalDateEnd: this.props.practicalDateEnd,
      }
    }
  }

  changeCompanyName = (event) => {
    this.setState({
      practicalItem: {
        ...this.state.practicalItem,
        companyName: event.target.value
      }
    })

    this.props.changePracticalComponent(this.state.practicalItem.id, this.state.practicalItem);
  }

  changePositionTitle = (event) => {
    this.setState({
      practicalItem: {
        ...this.state.practicalItem,
        positionTitle: event.target.value
      }
    })
    this.props.changePracticalComponent(this.state.practicalItem.id, this.state.practicalItem);
  }

  changeMainTasks = (event) => {
    this.setState({
      practicalItem: {
        ...this.state.practicalItem,
        mainTasks: event.target.value
      }
    })
    this.props.changePracticalComponent(this.state.practicalItem.id, this.state.practicalItem);
  }

  changePracticalDateStart = (event) => {
    this.setState({
      practicalItem: {
        ...this.state.practicalItem,
        practicalDateStart: event.target.value
      }
    })
    this.props.changePracticalComponent(this.state.practicalItem.id, this.state.practicalItem);
  }

  changePracticalDateEnd = (event) => {
    this.setState({
      practicalItem: {
        ...this.state.practicalItem,
        practicalDateEnd: event.target.value
      }
    })
    this.props.changePracticalComponent(this.state.practicalItem.id, this.state.practicalItem);
  }

  render() {
    return (
      <div>
        <FormInput onChange={this.changeCompanyName} inputName='companyName' labelText='Company Name:' inputType='text' pHolder='Company Name' />
        <FormInput onChange={this.changePositionTitle} inputName='positionTitle' labelText='Position Title' inputType='text' pHolder='Position Title' />
        <FormTextArea onChange={this.changeMainTasks} inputName='mainTasks' labelText='Main Tasks' pHolder='Main Tasks' rows='4' />
        <FormInput onChange={this.changePracticalDateStart} inputName='practicalDateStart' labelText='Start Year:' inputType='text' pHolder='Start Year' />
        <FormInput onChange={this.changePracticalDateEnd} inputName='practicalDateEnd' labelText='End Year' inputType='text' pHolder='End Year' />
      </div>
    );
  }
}