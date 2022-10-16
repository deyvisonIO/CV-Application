import React from 'react';

export class FormInput extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { inputName, labelText, inputType, pHolder, ...rest } = this.props;

    return (
      <div className='formInputDiv'>
        <label htmlFor={inputName} className="formLabel"> {labelText} </label>
        <input id={inputName} type={inputType} placeholder={pHolder} {...rest} className="formInput" />
      </div>
    );
  }
}