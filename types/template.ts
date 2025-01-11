export const DEFAULT_TEMPLATE_ICON_URL = "/default-template-icon-64px.png";

export type Template = {
  id: number;
  name: string;
  author: string;
  imageUrl?: string;
}

export type TemplateSection  = {
  sectionName: string;
  sectionDescription: string;
  sectionItems: TemplateSectionItem[];
}

export type TemplateSectionItem = {
  answerOptions: string[];
  fieldTitle: string;
  fieldDetails: string;
  fieldType: "singleLineText" |
      "multiLineText" |
      "number" |
      "date" |
      "slider" |
      "radio" |
      "checkBoxGroup"
}


