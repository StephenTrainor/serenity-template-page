export type TemplateField = {
  answerOptions: string[];
  fieldTitle: string;
  fieldType: "singleLineText" | 
              "multiLineText" | 
              "number" | 
              "date" |
              "slider" | 
              "dropdown" |
              "radio" |
              "checkBoxGroup"
}
