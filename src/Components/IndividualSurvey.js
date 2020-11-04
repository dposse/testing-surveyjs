import React from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";


const IndividualSurvey = ({ surveyJSON, onComplete }) => {
  return (
    <Survey.Survey json={surveyJSON} onComplete={onComplete} />
  )
}

export default IndividualSurvey;