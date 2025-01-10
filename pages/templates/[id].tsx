import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import {Template, TemplateSection, TemplateSectionItem} from "@/types/template";
import parseGeneratedSections from "@/lib/parser";
import TemplateItem from "@/components/TemplateItem";
import SerenityDivider from "@/components/SerenityDivider";
import OutlineButtonWithIcon from "@/components/OutlineButtonWithIcon";
import ShareDropdown from "@/components/ShareDropdown";
import DownloadEditSaveSection from "@/components/DownloadEditSaveSection";
import GenerateTemplateSection from "@/components/GenerateTemplateSection";
import TemplateItems from "@/components/TemplateItems";

export async function getServerSideProps({ params } : { params: any}) {
  // This is where you would fetch any data from the server
  // const res = await fetch();
  // console.log(params.id);

  // mock data for a fire safety inspection template
  // const templateFields: Array<TemplateField> = [
  //   {
  //     fieldTitle: "Inspector Name",
  //     answerOptions: ["Name"],
  //     fieldType: "singleLineText",
  //   }, {
  //     fieldTitle: "Signature",
  //     answerOptions: ["Sign Here"],
  //     fieldType: "singleLineText",
  //   }, {
  //     fieldTitle: "Date",
  //     answerOptions: ["MM/DD/YYYY"],
  //     fieldType: "date",
  //   }, {
  //     fieldTitle: "Describe Exit Conditions",
  //     answerOptions: ["Enter Description"],
  //     fieldType: "multiLineText",
  //   }, {
  //     fieldTitle: "Are all fire extinguishers operational?",
  //     answerOptions: ["Yes", "No", "Some"],
  //     fieldType: "radio",
  //   }, {
  //     fieldTitle: "Rate smoke ventilation quality for the room (1-10)",
  //     answerOptions: ["1", "10"],
  //     fieldType: "slider",
  //   }, {
  //     fieldTitle: "Is there electronic equipment that looks broken or not working properly?",
  //     answerOptions: ["If yes, record observations"],
  //     fieldType: "singleLineText",
  //   }, {
  //     fieldTitle: "How many smoke detectors are in the room?",
  //     answerOptions: ["15"],
  //     fieldType: "number",
  //   }
  // ];

  const mockData = {
    "generatedSections": [
      {
        "Section name": "Visual Inspection of Breaker Panel",
        "Section description": "Inspect the breaker panel for any signs of damage, corrosion, or overheating.",
        "generatedSectionItems": [
          {
            "Assertion": "Are there any visible signs of damage on the breaker panel?",
            "Details": "Check for cracks, dents, or any physical damage on the surface of the breaker panel."
          },
          {
            "Assertion": "Is there any evidence of corrosion on the breaker panel?",
            "Details": "Look for rust, discoloration, or any signs of deterioration on the metal components of the breaker panel."
          },
          {
            "Assertion": "Are there any indications of overheating on the breaker panel?",
            "Details": "Feel for excessive heat, look for discoloration, or check for any burnt marks near the wiring connections."
          },
          {
            "Assertion": "Are all the wiring connections secure and properly tightened?",
            "Details": "Inspect each wiring connection to ensure they are securely fastened and not loose."
          },
          {
            "Assertion": "Is the breaker panel cover intact and properly secured?",
            "Details": "Check that the cover is not broken, missing screws, and is securely fastened to the panel."
          }
        ]
      },
      {
        "Section name": "Testing of Circuit Breakers",
        "Section description": "Test the functionality of each circuit breaker to ensure they trip properly and can be reset."
      },
      {
        "Section name": "Check for Loose Connections",
        "Section description": "Inspect the connections within the breaker panel to ensure they are securely tightened."
      },
      {
        "Section name": "Verification of Labeling",
        "Section description": "Verify that all breakers are properly labeled for easy identification of circuits."
      },
      {
        "Section name": "Review of Documentation",
        "Section description": "Review and update any documentation related to the breaker panel, such as circuit maps or maintenance records."
      },
      {
        "Section name": "Inspection of Grounding System",
        "Section description": "Inspect the grounding system to ensure it is properly installed and functional."
      },
      {
        "Section name": "Verification of Safety Precautions",
        "Section description": "Check for the presence of safety features such as arc fault circuit interrupters (AFCIs) or ground fault circuit interrupters (GFCIs)."
      },
      {
        "Section name": "Review of Emergency Procedures",
        "Section description": "Review and update emergency procedures related to the breaker panel, including shutdown protocols and contact information for electricians."
      }
    ]
  };

  const templateSections: TemplateSection[] = parseGeneratedSections(mockData["generatedSections"]);

  // more mock data for what would be retrived from the server
  const template: Template = {
    id: params.id,
    name: "Fire Safety Inspection",
    author: "SD Fire Department",
    imageUrl: "/5.png",
  };

  // pass retrieved data as props for the page
  return { props: { 
    templateSections,
    template
  }};
}

const TemplatePage = ({
    templateSections, template
  } : {
    templateSections: TemplateSection[], template: Template
  }) => {
  // use the router hook to get the template id and route to other pages if necessary
  const router = useRouter();

  // get the id for the template
  const id: number = typeof router.query.id === "string" ? parseInt(router.query.id) : 0;

  return (
    <div>
      <Navbar />
      <div className="main-page-container my-6 space-y-6">
        <div className="flex flex-row w-full">
          <div className="flex1">{/* Spacer to get the right-aligned div*/}</div>
          <div className="">
            <p className="title">{template.name}</p>
            <p className="subtitle">{template.author}</p>
            <Image 
              className="mx-auto my-6"
              src={template.imageUrl}
              width={128}
              height={128}
              alt={`Icon for ${template.name} template`}
            />
            <DownloadEditSaveSection />
          </div>
          <div className="flex1 flex flex-row justify-end">
            <div className="flex flex-col space-y-2">
              <div className="ml-auto">
                <OutlineButtonWithIcon 
                  buttonText="Copy Link"
                  src="/copy-icon-64px.png"
                  size={20}
                  onClick={() => {navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`)}}
                  alt="Copy Link Icon"
                />
              </div>
              <div className="ml-auto">
                <ShareDropdown />
              </div>
            </div>
          </div>
        </div>
        <SerenityDivider />
        <div className="form-container m-6">
          {templateSections.map((templateSection: TemplateSection) => (
            <TemplateItems
              key={id}
              templateSection={templateSection}
            />
          ))}
        </div>
        <DownloadEditSaveSection />
        <SerenityDivider />
        <div className="">
          <p className="second-title">Looking For Something Else?</p>
        </div>
        <div className="justify-center flex w-full">
          <GenerateTemplateSection />
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;
