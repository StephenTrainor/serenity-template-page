import {TemplateSection, TemplateSectionItem} from "@/types/template";

const TemplateSectionPage = ({
  templateSection, pageNumber
} : {
  templateSection: TemplateSection, pageNumber: number
}) => {
  const answerOptions: string[] = ["Yes", "No", "N/A"];

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
            <th>Yes</th>
            <th>No</th>
            <th>N/A</th>
            <th className={"w-2/5"}>Comments</th>
          </tr>
        </thead>
        <tbody>
          {templateSection?.sectionItems?.map((sectionItem: TemplateSectionItem) => (
            <tr>
              <td>{sectionItem.fieldDetails}</td>
              <td>{sectionItem.fieldTitle}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Tried to create an additional comments section, ran out of time */}

      {/*<div className={"w-4/5 mx-auto"}>*/}
      {/*  <p className={"subparagraph"}>Additional Comments:</p>*/}
      {/*  <div className={"round-soft border serenity-text h-32"}></div>*/}
      {/*</div>*/}
    </div>
  );
};

export default TemplateSectionPage;
