import { Template } from "@/types/template";
import MultiLineWrittenField from "@/components/pdf/MultiLineWrittenField";
import ThinLineSignatureField from "@/components/pdf/ThinLineSignatureField";
import PoweredBySerenityFooter from "@/components/pdf/PoweredBySerenityFooter";
import TemplateIcon from "@/components/templates/TemplateIcon";

const TitlePage = ({
  template
} : {
  template: Template
}) => {
  return (
    <div className={"page"}>
      <div className={"page-container mb-16"}>
        <div>
          <p className={"title"}>{template.name}</p>
          <p className={"subtitle"}>{template.author}</p>
          <TemplateIcon template={template}/>
        </div>
        <div className={"my-auto flex flex-wrap justify-center"}>
          <MultiLineWrittenField text={"Inspection Site Address:"} lines={4}/>
          <MultiLineWrittenField text={"Inspection Site Name:"} lines={4}/>
          <div className={"flex flex-col my-8 w-full"}>
            <MultiLineWrittenField text={"Start of Inspection (HH:MM)"} lines={1}/>
            <MultiLineWrittenField text={"End of Inspection (HH:MM)"} lines={1}/>
          </div>
        </div>
      </div>
      <div className={"mt-auto"}>
        <div className={"mx-12"}>
          <p className={"subtitle"}>Acknowledgement</p>
          <p className={"tiny-text"}>I hereby confirm that the inspection will be conducted thoroughly and accurately to the best of my ability. By signing, I understand that the information provided in this checklist may be used as evidence in a court of law if required, and I accept full responsibility for the accuracy and completeness of this report. Furthermore, I acknowledge that any negligence or misrepresentation may result in personal liability.</p>
        </div>
        <div className={"mt-12 mb-8 flex flex-wrap justify-center"}>
          <ThinLineSignatureField text={"Signature"}/>
          <ThinLineSignatureField text={"Print Name"}/>
          <ThinLineSignatureField text={"Date"}/>
        </div>
        <PoweredBySerenityFooter/>
      </div>
    </div>
  );
};

export default TitlePage;
