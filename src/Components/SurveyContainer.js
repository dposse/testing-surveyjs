import React, { useState } from "react";
import IndividualSurvey from "./IndividualSurvey";
import BorrowerInformationFormJSON from "../Surveys/BorrowerInformationForm.json";

const SurveyContainer = () => {
  //for now importing JSON files and manually adding - I would love to figure out a way of getting all JSONs in a directory
  // maybe shell script would be better for that
  //  iterate through files in /Surveys, add import statement, add to useState?
  const [surveysToDisplay] = useState([BorrowerInformationFormJSON]);

  if (surveysToDisplay.length === 0) {
    return <div>No surveys to display.</div>
  }

  return surveysToDisplay.map(survey => (
    <IndividualSurvey surveyJSON={survey} />
  ))
}

export default SurveyContainer;