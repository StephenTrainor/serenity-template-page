import {Template, TemplateSection} from "@/types/template";
import TitlePage from "@/components/pdf/TitlePage";
import FinalPage from "@/components/pdf/FinalPage";
import TemplateSectionPage from "@/components/pdf/TemplateSectionPage";

// This is the main component that will be printed by react-to-print and passes its props to the respective components
const PDF = ({
  template, templateSections
} : {
  template: Template, templateSections: TemplateSection[]
}) => {
  return (
    <div className={""}>
      <TitlePage template={template}/>
      {/* For each template section, a page (or multiple pages) is generated */}
      {templateSections?.map((templateSection: TemplateSection) => (
        <TemplateSectionPage
          templateSection={templateSection}
        />
      ))}
      <FinalPage />
    </div>
  );
};

export default PDF;
