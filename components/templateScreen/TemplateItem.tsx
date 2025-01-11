import Date from "@/components/templateScreen/Date";
import Radio from "@/components/templateScreen/Radio";
import Number from "@/components/templateScreen/Number";
import Slider from "./Slider";
import CheckBoxGroup from "@/components/templateScreen/CheckBoxGroup";
import MultiLineText from "@/components/templateScreen/MultiLineText";
import SingleLineText from "@/components/templateScreen/SingleLineText";
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
