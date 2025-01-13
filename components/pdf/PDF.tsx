import TitlePage from "@/components/pdf/TitlePage";
import {Template, TemplateSection} from "@/types/template";
import TemplateSectionPage from "@/components/pdf/TemplateSectionPage";
import FinalPage from "@/components/pdf/FinalPage";

const PDF = ({
  template, templateSections
} : {
  template: Template, templateSections: TemplateSection[]
}) => {
  return (
    <div className={""}>
      <TitlePage template={template}/>
      {templateSections?.map((templateSection: TemplateSection, index: number) => (
        <TemplateSectionPage
          templateSection={templateSection}
          pageNumber={index + 2}
        />
      ))}
      <FinalPage />
    </div>
  );
};

export default PDF;
