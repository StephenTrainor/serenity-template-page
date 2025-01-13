import SingleLineText from "./SingleLineText";

// Date component builds off the SingleLineText component and has a placeholder, the string is not formatted because
// this component is only used in displaying the template, the user input is not used

// NOTE: This component is not used in the PDF generation, it is only used for displaying a preview of the template in
// the pages/templates/[id].tsx page
const Date = ({ answerOptions } : { answerOptions: string[]}) => {
  const placeHolderText: string = answerOptions[0] || "MM/DD/YYYY";

  return (
    <SingleLineText answerOptions={[placeHolderText]}/>
  );
};

export default Date;
