import SingleLineText from "./SingleLineText";

const Date = ({ answerOptions } : { answerOptions: string[]}) => {
  const placeHolderText: string = answerOptions[0] || "";

  return (
    <SingleLineText answerOptions={[placeHolderText]}/>
  );
};

export default Date;
