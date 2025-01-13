import {TemplateSection, TemplateSectionItem} from "@/types/template";

// TemplateSectionPage is responsible for creating a page per section of checklist questions. The checklist items are
// put into a table that is dynamically generated based on the number of answer options and the number of checklist
// items. The corresponding styling for the table is found in styles/globals.css and creates a rounded border
const TemplateSectionPage = ({
  templateSection, answerOptions=["Yes", "No", "N/A"]
} : {
  templateSection: TemplateSection, answerOptions: string[]
}) => {
  return (
    <div className={"page"}>
      <p className={"text-3xl m-2 text-center"}>{templateSection.sectionName}</p>
      <div className={"w-4/5 mx-auto mb-4"}>
        <p className={"text-xl text-center"}>{templateSection.sectionDescription}</p>
      </div>
      <table className={"checklist-table mx-auto"}>
        <thead>
          <tr>
            <th className={"w-1/5"}>Details</th>
            <th className={"w-1/5"}>Assertion</th>
            {/* Create a column/header for each possible option */}
            {answerOptions?.map((option) => (
              <th>{option}</th>
            ))}
            <th className={"w-2/5"}>Comments</th>
          </tr>
        </thead>
        <tbody>
          {templateSection?.sectionItems?.map((sectionItem: TemplateSectionItem) => (
            <tr>
              <td>{sectionItem.fieldDetails}</td>
              <td>{sectionItem.fieldTitle}</td>
              {answerOptions?.map((_) => (
                <td>{/* Placeholder for each option answer, mapping the correct number of empty cells*/}</td>
              ))}
              <td>{/* Placeholder for the comments cell*/}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TemplateSectionPage.defaultProps = {
  answerOptions: ["Yes", "No", "N/A"],
}

export default TemplateSectionPage;
