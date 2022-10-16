import React from 'react';

export class FormTextArea extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { inputName, labelText, pHolder, ...rest } = this.props;

    return (
      <div className='formInputDiv'>
        <label htmlFor={inputName} className="formLabel"> {labelText} </label>
        <textarea id={inputName}  placeholder={pHolder} {...rest} className="formInput" />
      </div>
    );
  }
}