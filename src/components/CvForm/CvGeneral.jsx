import React from "react";
import { FormInput } from './FormInput';


export class CvGeneral extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInformation: {
        name: '',
        email: '',
        phone: '',
        photo: '',
      }
    }
  }

  changeName = (event) => {
    this.setState({
      generalInformation: {
        ...this.state.generalInformation,
        name: event.target.value
      }
      
    })
    this.props.changeGeneralInformation(this.state.generalInformation);
  }

  changeEmail = (event) => {
    this.setState({
      generalInformation: {
        ...this.state.generalInformation,
        email: event.target.value
        
      }
    })
    this.props.changeGeneralInformation(this.state.generalInformation);
  }

  changePhone = (event) => {
    this.setState({
      generalInformation: {
        ...this.state.generalInformation,
        phone: event.target.value
        
      }
    })
    this.props.changeGeneralInformation(this.state.generalInformation);
  }

  changePhoto = (event) => {
    // Not Working!
    const file = event.target.files[0];

    if(file){
      let fileUrl = '';
      let reader = new FileReader();
      reader.onload = () => fileUrl = reader.result;
      reader.readAsDataURL(file);
      this.setState({
        generalInformation: {
          ...this.state.generalInformation,
          photo: fileUrl
          
        }
      })
      this.props.changeGeneralInformation(this.state.generalInformation);
    }
  }

  render() {
    return (
      <div>
        <FormInput onChange={this.changeName} inputName='name' labelText='Name:' inputType='text' pHolder='Write your Name' />
        <FormInput onChange={this.changeEmail} inputName='email' labelText='Email:' inputType='email' pHolder='name@example.com' />
        <FormInput onChange={this.changePhone} inputName='phoneNumber' labelText='Phone Name:' inputType='text' pHolder='(123) 456 7890' pattern='/^\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/' />
        <FormInput onChange={this.changePhoto} inputName='photo' labelText='Photo:' inputType='file' pHolder='photo' accept='image/*' />
      </div>
    );
  }
}