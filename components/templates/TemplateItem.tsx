import Date from "@/components/templates/Date";
import Radio from "@/components/templates/Radio";
import Number from "@/components/templates/Number";
import Slider from "./Slider";
import CheckBoxGroup from "@/components/templates/CheckBoxGroup";
import MultiLineText from "@/components/templates/MultiLineText";
import SingleLineText from "@/components/templates/SingleLineText";
import {TemplateSectionItem} from "@/types/template";
import TextWithToolTip from "@/components/TextWithToolTip";

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
      {/*<p className="pb-1">{templateSectionItem.fieldTitle}</p>*/}
      <TextWithToolTip
        toolTipText={templateSectionItem.fieldDetails}
        mainText={templateSectionItem.fieldTitle}
        mainTextClasses={"text-left"}
        centeredText={false}
      />
      {components[templateSectionItem.fieldType]}
    </div>
  );
};

export default TemplateItem;
