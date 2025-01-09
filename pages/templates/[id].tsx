import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import { Template } from "@/types/template";
import { TemplateField } from "@/types/templateField";
import TemplateItem from "@/components/TemplateItem";
import FilledButton from "@/components/FilledButton";
import OutlineButtonWithIcon from "@/components/OutlineButtonWithIcon";

export async function getServerSideProps({ params } : { params: any}) {
  // This is where you would fetch any data from the server
  // const res = await fetch();
  // console.log(params.id);

  // mock data for a fire safety inspection template
  const templateFields: Array<TemplateField> = [
    {
      fieldTitle: "Inspector Name",
      answerOptions: ["Name"],
      fieldType: "singleLineText",
    }, {
      fieldTitle: "Signature",
      answerOptions: ["Sign Here"],
      fieldType: "singleLineText",
    }, {
      fieldTitle: "Date",
      answerOptions: ["MM/DD/YYYY"],
      fieldType: "date",
    }, {
      fieldTitle: "Describe Exit Conditions",
      answerOptions: ["Enter Description"],
      fieldType: "multiLineText",
    }, {
      fieldTitle: "Are all fire extinguishers operational?",
      answerOptions: ["Yes", "No", "Some"],
      fieldType: "radio",
    }, {
      fieldTitle: "Rate smoke ventilation quality for the room (1-10)",
      answerOptions: ["1", "10"],
      fieldType: "slider",
    }, {
      fieldTitle: "Is there electronic equipment that looks broken or not working properly?",
      answerOptions: ["If yes, record observations"],
      fieldType: "singleLineText",
    }, {
      fieldTitle: "How many smoke detectors are in the room?",
      answerOptions: ["15"],
      fieldType: "number",
    }
  ];

  // more mock data for what would be retrived from the server
  const template: Template = {
    id: params.id,
    name: "Fire Safety Inspection",
    author: "SD Fire Department",
    imageUrl: "/5.png",
  };

  // pass retrieved data as props for the page
  return { props: { 
    templateFields,
    template
  }};
}

const TemplatePage = ({
    templateFields, template
  } : {
    templateFields: Array<TemplateField>, template: Template
  }) => {
  // use the router hook to get the template id and route to other pages if necessary
  const router = useRouter();

  // get the id for the template
  const id: number = typeof router.query.id === "string" ? parseInt(router.query.id) : 0;

  return (
    <div>
      <Navbar />
      <div className="main-page-container my-6">
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
            <div className="flex flex-row justify-center space-x-6">
              <OutlineButtonWithIcon
                classes=""
                buttonText="Download PDF"
                buttonClass="w-44"
                src="/download-icon-64px.png"
                size={20}
                alt="Download Icon"
              />
              <FilledButton 
                classes="my-auto ml-1"
                buttonText="Edit and Save"
                buttonClass="button-dark w-44"
                src="/edit-icon-64px.png"
                alt="Edit Icon"
              />
            </div>
          </div>
          <div className="flex1 flex flex-row justify-end">
            <div className="flex flex-col">
              <div className="ml-auto">
                <OutlineButtonWithIcon 
                  buttonText="Copy Link"
                  src="/copy-icon-64px.png"
                  size={20}
                  alt="Copy Link Icon"
                />
              </div>
              <div className="ml-auto">
                <OutlineButtonWithIcon 
                  buttonText="Share"
                  src="/share-icon-64px.png"
                  size={20}
                  alt="Share Template Icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form-container m-6">
          {templateFields.map((templateField) => (
            <TemplateItem 
              key={id}
              templateField={templateField}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;
