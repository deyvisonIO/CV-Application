import React from "react";

import { CvContent } from "./CvContent";
import { CvSideBar } from "./CvSideBar";

export class CvViewer extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { generalInformation, educationalExperience, practicalExperience } = this.props;

    return (
      <div className="CvViewer" >
        <CvContent 
          educationalExperience={educationalExperience}
          practicalExperience={practicalExperience}
        />
        <CvSideBar 
          name={generalInformation.name}
          email={generalInformation.email}
          phone={generalInformation.phone}
        />
      </div>
    );
  }
}