import Date from "./Date";
import Radio from "./Radio";
import Number from "./Number";
import Slider from "./Slider";
import CheckBoxGroup from "./CheckBoxGroup";
import MultiLineText from "./MultiLineText";
import SingleLineText from "./SingleLineText";
import {TemplateSectionItem} from "@/types/template";

const TemplateItem = ({ templateSectionItem } : {templateSectionItem: TemplateSectionItem}) => {
  const components = {
    "singleLineText": <SingleLineText answerOptions={templateSectionItem.answerOptions}/>,
    "multiLineText": <MultiLineText answerOptions={templateSectionItem.answerOptions}/>,
    "number": <Number answerOptions={templateSectionItem.answerOptions}/>,
    "date": <Date answerOptions={templateSectionItem.answerOptions}/>,
    "slider": <Slider answerOptions={templateSectionItem.answerOptions}/>,
    "radio": <Radio answerOptions={templateSectionItem.answerOptions}/>,
    "checkBoxGroup": <CheckBoxGroup answerOptions={templateSectionItem.answerOptions}/>,
  };

  return (
    <div className="">
      <p className="pb-1">{templateSectionItem.fieldTitle}</p>
      {components[templateSectionItem.fieldType]}
    </div>
  );
};

export default TemplateItem;
