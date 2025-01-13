import { useRef } from "react";
import { useRouter } from "next/router";
import { useReactToPrint } from "react-to-print";
import parseGeneratedSections from "@/lib/parser";
import { Template, TemplateSection } from "@/types/template";
import PDF from "@/components/pdf/PDF";
import Navbar from "@/components/Navbar";
import ShareDropdown from "@/components/ShareDropdown";
import SerenityDivider from "@/components/SerenityDivider";
import OutlineButtonWithIcon from "@/components/OutlineButtonWithIcon";
import DownloadEditSaveSection from "@/components/DownloadEditSaveSection";
import GenerateTemplateSection from "@/components/GenerateTemplateSection";
import TemplateItems from "@/components/templates/TemplateItems";
import TemplateIcon from "@/components/templates/TemplateIcon";

export async function getServerSideProps({ params } : { params: any}) {
  // This is where you would fetch any data from the server
  // const res = await fetch();
  // console.log(params.id);

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
            "Assertion": "4    Is the breaker panel cover intact and properly secured?",
            "Details": "Check that the cover is not broken, missing screws, and is securely fastened to the panel."
          },
          {
            "Assertion": "5    Is the breaker panel cover intact and properly secured?",
            "Details": "Check that the cover is not broken, missing screws, and is securely fastened to the panel."
          },
          {
            "Assertion": "6    Is the breaker panel cover intact and properly secured?",
            "Details": "Check that the cover is not broken, missing screws, and is securely fastened to the panel."
          },
          {
            "Assertion": "7     Is the breaker panel cover intact and properly secured?",
            "Details": "Check that the cover is not broken, missing screws, and is securely fastened to the panel."
          },
          {
            "Assertion": "8    Is the breaker panel cover intact and properly secured?",
            "Details": "Check that the cover is not broken, missing screws, and is securely fastened to the panel."
          },
        ]
      },
      {
        "Section name": "Inspection of Circuit Breakers",
        "Section description": "Check individual circuit breakers for proper functionality and safety.",
        "generatedSectionItems": [
          {
            "Assertion": "Are all circuit breakers in the correct position?",
            "Details": "Verify that all breakers are set to 'ON' or 'OFF' as required and no breakers are in the tripped position without cause."
          },
          {
            "Assertion": "Are any circuit breakers showing signs of physical damage?",
            "Details": "Check for cracks, discoloration, or damage to the casing of individual breakers."
          },
          {
            "Assertion": "Are circuit breakers properly labeled?",
            "Details": "Ensure that each circuit breaker is clearly labeled to indicate its corresponding circuit or function."
          },
          {
            "Assertion": "Do all circuit breakers operate smoothly?",
            "Details": "Test that breakers can be manually toggled on and off without resistance or difficulty."
          },
          {
            "Assertion": "Are there any signs of overheating on circuit breakers?",
            "Details": "Look for discoloration, a burnt smell, or heat buildup around the breakers."
          }
        ]
      },
      {
        "Section name": "Inspection of Grounding System",
        "Section description": "Ensure the grounding system is intact and functioning correctly.",
        "generatedSectionItems": [
          {
            "Assertion": "Is the grounding wire securely connected to the breaker panel?",
            "Details": "Inspect the grounding wire connection to confirm it is firmly attached and free of corrosion."
          },
          {
            "Assertion": "Is the grounding system free of damage or wear?",
            "Details": "Check the grounding wire and components for signs of fraying, breaks, or deterioration."
          },
          {
            "Assertion": "Does the grounding system meet the required safety standards?",
            "Details": "Verify that the grounding setup complies with applicable electrical codes and standards."
          },
          {
            "Assertion": "Is the grounding rod properly installed and free of corrosion?",
            "Details": "Inspect the grounding rod to ensure it is fully driven into the ground and not visibly corroded."
          }
        ]
      },
      {
        "Section name": "Inspection of Electrical Connections",
        "Section description": "Evaluate the integrity and safety of all electrical connections within the system.",
        "generatedSectionItems": [
          {
            "Assertion": "Are all wire connections properly insulated?",
            "Details": "Check for intact insulation on wires to prevent exposure to live parts."
          },
          {
            "Assertion": "Are any electrical connections showing signs of wear or looseness?",
            "Details": "Inspect for fraying, loose connections, or visible signs of wear on electrical components."
          },
          {
            "Assertion": "Are there any signs of arcing or sparking on connections?",
            "Details": "Look for burnt marks, melted insulation, or unusual smells near electrical connections."
          },
          {
            "Assertion": "Are the neutral and grounding wires correctly connected?",
            "Details": "Verify that neutral and grounding wires are attached to their designated bus bars."
          }
        ]
      }
    ]
  };

  const templateSections: TemplateSection[] = parseGeneratedSections(mockData["generatedSections"]);

  // more mock data for what would be retrieved from the server
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

  // create a ref that will essentially point to which div should be printed
  const contentRef = useRef<HTMLDivElement>(null);

  // function from react-to-print hook that will open the print/save pdf page
  const reactToPrint = useReactToPrint({
    contentRef: contentRef,
    documentTitle: "template"
  });

  const routeAndGenerateTemplate = () => {
    router.push("/TODO-SOME-URL").then(r => {});
  };

  return (
    <div>
      <Navbar/>
      <div className="main-page-container my-6 space-y-6">
        {/* must place the html content to print out somewhere in the page but keep it hidden from the user */}
        <div className={"hidden"}>
          <div ref={contentRef}>
            <PDF
              template={template}
              templateSections={templateSections}
            />
          </div>
        </div>
        <div className="flex flex-row w-full">
          <div className="flex1">{/* Spacer to get the right-aligned div*/}</div>
          <div className="">
            <p className="title">{template.name}</p>
            <p className="subtitle">{template.author}</p>
            <TemplateIcon template={template}/>
            <DownloadEditSaveSection
              downloadOnClick={() => reactToPrint()}
              editAndSaveOnClick={() => routeAndGenerateTemplate()}
            />
          </div>
          <div className="flex1 flex flex-row justify-end">
            <div className="flex flex-col space-y-2">
              <div className="ml-auto">
                <OutlineButtonWithIcon
                  buttonText="Copy Link"
                  src="/copy-icon-64px.png"
                  size={20}
                  onClick={() => {
                    {/* Copies the current path to the clipboard for easy sharing */}
                    navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`).then(r => {})
                  }}
                  alt="Copy Link Icon"
                />
              </div>
              <div className="ml-auto">
                <ShareDropdown/>
              </div>
            </div>
          </div>
        </div>
        <SerenityDivider/>
        <div className="space-y-4 m-6">
          {templateSections?.map((templateSection: TemplateSection) => (
            <TemplateItems
              key={id}
              templateSection={templateSection}
            />
          ))}
        </div>
        <DownloadEditSaveSection
          downloadOnClick={() => reactToPrint()}
          editAndSaveOnClick={() => routeAndGenerateTemplate()}
        />
        <SerenityDivider/>
        <div className="">
          <p className="second-title">Looking For Something Else?</p>
        </div>
        <div className="justify-center flex w-full">
          <GenerateTemplateSection/>
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;
