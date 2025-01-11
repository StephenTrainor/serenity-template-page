import { TemplateSection, TemplateSectionItem } from "@/types/template";
import TemplateItem from "@/components/templateScreen/TemplateItem";
import TextWithToolTip from "@/components/TextWithToolTip";

const TemplateItems = ({ templateSection }: { templateSection: TemplateSection }) => {
  const templateSectionItems: TemplateSectionItem[] = templateSection.sectionItems;

  // TODO: incorporate the section name and description somehow
  return (
    <>
      <TextWithToolTip
        toolTipText={templateSection.sectionDescription}
        mainText={templateSection.sectionName}
        mainTextClasses={"section-title"}
        serenityColor={true}
      />
      {templateSectionItems.map((templateSectionItem, i) => (
        <TemplateItem
          key={`${i}`}
          templateSectionItem={templateSectionItem}
        />
      ))}
    </>
  );
};

export default TemplateItems;
