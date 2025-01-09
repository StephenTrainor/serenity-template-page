import { TemplateField } from "@/types/templateField";
import Date from "./Date";
import Radio from "./Radio";
import Number from "./Number";
import Slider from "./Slider";
import CheckBoxGroup from "./CheckBoxGroup";
import MultiLineText from "./MultiLineText";
import SingleLineText from "./SingleLineText";

const TemplateItem = ({ templateField } : {templateField: TemplateField}) => {
  const components = {
    "checkBoxGroup": <CheckBoxGroup answerOptions={templateField.answerOptions}/>,
    "multiLineText": <MultiLineText answerOptions={templateField.answerOptions}/>,
    "singleLineText": <SingleLineText answerOptions={templateField.answerOptions}/>,
    "number": <Number answerOptions={templateField.answerOptions}/>,
    "radio": <Radio answerOptions={templateField .answerOptions}/>,
    "date": <Date answerOptions={templateField.answerOptions}/>,
    "slider": <Slider answerOptions={templateField.answerOptions}/>,
  };

  return (
    <div className="">
      <p className="pb-1">{templateField.fieldTitle}</p>
      {components[templateField.fieldType]}
    </div>
  );
};

export default TemplateItem;
