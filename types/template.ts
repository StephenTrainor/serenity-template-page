export type Template = {
  id: number;
  name: string;
  author: string;
  imageUrl: string;
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


