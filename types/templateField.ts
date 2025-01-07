export type TemplateField = {
  answerOptions: string[];
  fieldTitle: string;
  fieldType: "singleLineText" | 
              "multiLineText" | 
              "number" | 
              "checkbox" | 
              "date" |
              "slider" | 
              "dropdown" |
              "checkboxGroup"
}
