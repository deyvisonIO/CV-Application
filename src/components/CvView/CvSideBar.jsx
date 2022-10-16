import React from "react";
import { CvSideBarText } from "./CvSideBarText";

export class CvSideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { name, email, phone, photo } = this.props;

    console.log(this.props);

    return (
      <div className="CvSidebar">
        <img src={photo || "./giphy.gif"} alt="" className="profilePicture" />
        <CvSideBarText title="Name:" subtitle={name} />
        <CvSideBarText title="Email:" subtitle={email} />
        <CvSideBarText title="Phone-Number:" subtitle={phone} />
      </div>
    );
  }
}