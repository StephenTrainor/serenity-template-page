import { TemplateSection, TemplateSectionItem } from "@/types/template";
import TextWithToolTip from "@/components/TextWithToolTip";
import TemplateItem from "@/components/templates/TemplateItem";

// Parent component for rendering all the TemplateItem components
const TemplateItems = ({ templateSection }: { templateSection: TemplateSection }) => {
  const templateSectionItems: TemplateSectionItem[] = templateSection.sectionItems;

  return (
    <div className={"templates-container"}>
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
    </div>
  );
};

export default TemplateItems;
