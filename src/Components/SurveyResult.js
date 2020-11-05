import React from "react";

// right now we are just printing the raw json, but we can make this pretty!
const SurveyResult = ({ result }) => (
  <div><pre>{JSON.stringify(result, null, 2)}</pre></div>
)

export default SurveyResult;