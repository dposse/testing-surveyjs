import React from "react";
import IndividualSurvey from "./IndividualSurvey";
import BorrowerInformationFormJSON from "../Surveys/BorrowerInformationForm.json";

const SurveyContainer = () => {
  return (
    <IndividualSurvey surveyJSON={BorrowerInformationFormJSON} />
  )
}

export default SurveyContainer;