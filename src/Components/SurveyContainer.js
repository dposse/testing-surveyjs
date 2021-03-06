import React, { useState } from "react";
import IndividualSurvey from "./IndividualSurvey";
import SurveyResult from "./SurveyResult";
import BorrowerInformationFormJSON from "../Surveys/BorrowerInformationForm.json";
import PersonalFinancialStatementJSON from "../Surveys/PersonalFinancialStatement.json";

const SurveyContainer = () => {
  //for now importing JSON files and manually adding - I would love to figure out a way of getting all JSONs in a directory
  // maybe shell script would be better for that
  //  iterate through files in /Surveys, add import statement, add to useState?
  const [surveysToDisplay] = useState([BorrowerInformationFormJSON,PersonalFinancialStatementJSON]);
  const [surveyResults, setSurveyResults] = useState([]);

  //if I had more time I would put the results in state management
  function saveResults(survey) {
    //right now I'm assuming SurveyJS is working as expected
    // with more time I'd probably make this a key/value pair to know if we somehow got the survey completed multiple times
    const updatedSurveyResults = [...surveyResults, survey.data];
    setSurveyResults(updatedSurveyResults);
  }

  if (surveysToDisplay.length === 0) {
    return <div>No surveys to display.</div>
  }

  return (
    <>
      {surveysToDisplay.map((survey, index) => (
        <IndividualSurvey surveyJSON={survey} onComplete={saveResults} key={`survey${index}`} />
      ))}
      {surveyResults.map((surveyResult, index) => (
        <SurveyResult result={surveyResult} key={`result${index}`} />
      ))}
    </>
  )
  
    
}

export default SurveyContainer;