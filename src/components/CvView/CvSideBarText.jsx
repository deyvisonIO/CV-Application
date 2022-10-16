import React from "react";

export class CvSideBarText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { title, subtitle } = this.props;

    return (
      <div className="sidebarText" >
        <h3 className="sidebarTitle"> {title} </h3>
        <p className="sidebarSubtitle"> {subtitle} </p>
      </div>
    );
  }
}