import React from 'react';
import Form from "next/form";
import Navbar from "@/components/Navbar";
import { Template } from "@/types/template";
import TemplatePreview from "@/components/TemplatePreview";
import OutlineButtonWithIcon from "@/components/OutlineButtonWithIcon";
import GenerateTemplateSection from "@/components/GenerateTemplateSection";
import SerenityDivider from "@/components/SerenityDivider";

const Home: React.FC = () => {
  // real data could be fetched from a server or db using getServerSideProps
  // and subsequent requests could be made asynchronously 
  // mock data for the retrieved templates
  const templates: Template[] = [
    {
      id: 1,
      name: "Healthcare Checklist",
      author: "CVS Pharmaceuticals",
      // imageUrl: "/1.png",
    },
    {
      id: 2,
      name: "Construction Checklist",
      author: "CAT Industries",
      imageUrl: "/2.png",
    },
    {
      id: 3,
      name: "Administrative Checklist",
      author: "Goldman Sachs",
      imageUrl: "/3.png",
    },
    {
      id: 4,
      name: "Digital Transfer Inspection",
      author: "Coinbase",
      imageUrl: "/4.png",
    },
    {
      id: 5,
      name: "Fire Safety Inspection",
      author: "SD Fire Department",
      imageUrl: "/5.png",
      
    },
    {
      id: 6,
      name: "Accounting Checklist",
      author: "S&P Retirement",
      imageUrl: "/6.png",
    },
    {
      id: 7,
      name: "Roof Finishing Checklist",
      author: "Anning and Johnson Roofing",
      imageUrl: "/7.png",
    },
    {
      id: 8,
      name: "Seatbelt Inspection",
      author: "Nissan Automotives",
      imageUrl: "/8.png",
    },
  ]

  return (
    <div>
      <Navbar />
      <div className="main-page-container space-y-8">
        <div className="title mx-auto mt-8">
            <div>Browse Serenity's</div>
            <div>Inspection Templates</div>
        </div>
        <SerenityDivider />
        <GenerateTemplateSection />
        <SerenityDivider />
        <div className="flex flex-row w-10/12">
          {/* The form is set up but the current buttons do nothing */}
          <Form action="/" className="flex flex-col half my-auto">
            <input 
              className="single-line-input mx-auto mb-2 w-10/12"
              placeholder="Search Templates"
            />
            <div className="flex flex-row mx-auto space-x-2">
              <OutlineButtonWithIcon 
                buttonText="Filter"
                src="/filter-icon-64px.png"
                size={20}
                alt="Filter Icon"
              />
              <OutlineButtonWithIcon 
                buttonText="Sort"
                src="/sort-icon-64px.png"
                size={20}
                alt="Sorting Icon"
              />
              <button className="button-light-blue round-soft py-1 px-4">Search</button>
            </div>
          </Form>
          <div className="flex flex-col half text-center space-y-3">
            <p className="subtitle">Instantly Utilize Preexisting Templates</p>
            <p className="dark-text w-2/3 mx-auto">Browse 100000+ existing templates by category, popularity, and more. Inspection templates can be downloaded and used for free.</p>
          </div>
        </div>
        <SerenityDivider />
        <div className="flex flex-wrap justify-center">
          {templates.map((template: Template) => (
            <TemplatePreview
              key={template.id}
              id={template.id}
              name={template.name}
              author={template.author}
              imageUrl={template.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
