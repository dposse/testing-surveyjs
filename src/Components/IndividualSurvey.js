import React from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";


const IndividualSurvey = ({ surveyJSON }) => {
  return (
    <Survey.Survey json={surveyJSON} />
  )
}

export default IndividualSurvey;