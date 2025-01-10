import {TemplateSection, TemplateSectionItem} from "@/types/template";
import TemplateItem from "@/components/TemplateItem";

const TemplateItems = ({ templateSection }: { templateSection: TemplateSection }) => {
  const templateSectionItems: TemplateSectionItem[] = templateSection.sectionItems;

  // TODO: incorporate the section name and description somehow
  return (
    <>
      {templateSectionItems.map((templateSectionItem, i) => (
        <TemplateItem
          key={i}
          templateSectionItem={templateSectionItem}
        />
      ))}
    </>
  );
};

export default TemplateItems;
