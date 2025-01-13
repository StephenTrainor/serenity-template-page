import { TemplateSectionItem } from "@/types/template";
import Date from "@/components/templates/Date";
import Radio from "@/components/templates/Radio";
import Number from "@/components/templates/Number";
import Slider from "@/components/templates/Slider";
import CheckBoxGroup from "@/components/templates/CheckBoxGroup";
import MultiLineText from "@/components/templates/MultiLineText";
import SingleLineText from "@/components/templates/SingleLineText";
import TextWithToolTip from "@/components/TextWithToolTip";

// TemplateItem will take in a templateSection and render the appropriate component to display, again these components
// are not used in the PDF generation
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
      {/* Incorporate the appropriate field details in addition to the field assertion/question */}
      <TextWithToolTip
        toolTipText={templateSectionItem.fieldDetails}
        mainText={templateSectionItem.fieldTitle}
        mainTextClasses={"text-left"}
        centeredText={false}
      />
      {/* Map the section item to the proper component and render it */}
      {components[templateSectionItem.fieldType]}
    </div>
  );
};

export default TemplateItem;
