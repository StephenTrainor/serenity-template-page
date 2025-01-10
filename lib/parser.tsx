import {TemplateSection, TemplateSectionItem} from "@/types/template";

// allow us to set a default type, might remove if JSON eventually comes with fieldType
const DEFAULT_FIELD_TYPE = "singleLineText"

const extractSectionItems = (section: any): TemplateSectionItem[] => {
  // quick check to avoid indexing an undefined field
  if (!section["generatedSectionItems"]) {
    return [];
  }

  // for each inspection checklist item, convert it to a TemplateSectionItem from the template
  return section["generatedSectionItems"]?.map((sectionItem: any) => {
    // populate a TemplateSectionItem with the respective values for the user defined type
    const templateSectionItem: TemplateSectionItem = {
      answerOptions: [""],
      fieldTitle: sectionItem["Assertion"],
      fieldType: DEFAULT_FIELD_TYPE,
      fieldDetails: sectionItem["Details"]
    };

    return templateSectionItem;
  });
};

const parseGeneratedSections = (sections: any[]) => {
  const templateSections: TemplateSection[] = sections?.map((section: any) => {
    // get the section items required for creating a TemplateSection type
    const templateSectionItems = extractSectionItems(section);

    // populate new object of type TemplateSection with the proper values from the given JSON
    const newTemplateSection: TemplateSection = {
      sectionName: section["Section name"],
      sectionDescription: section["Section description"],
      sectionItems: templateSectionItems,
    };

    return newTemplateSection;
  });

  return templateSections;
};

export default parseGeneratedSections;
