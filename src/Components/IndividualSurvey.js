import * as Survey from "survey-react";
import "survey-react/survey.css";
import BorrowerInformationFormJSON from "../Surveys/BorrowerInformationForm.json";

const IndividualSurvey = () => {
  return (
    <Survey.Survey json={BorrowerInformationFormJSON} />
  )
}

export default IndividualSurvey;