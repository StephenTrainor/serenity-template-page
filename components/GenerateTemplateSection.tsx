import Form from "next/form";

// Text input field that is used for the AI generation of templates. It currently routes to a dummy route but can be
// replaced with something else
const GenerateTemplateSection = () => {
  return (
    <div className="flex flex-row w-10/12">
      <div className="flex flex-col half text-center space-y-3">
        <p className="subtitle">Generate Tailored Templates with AI</p>
        <p className="dark-text w-2/3 mx-auto">Enter a description of how the template will be used or a few keywords and we'll take care of the rest.</p>
      </div>

      {/* Since the textarea is part of a form, the description is automatically passed as a query parameter */}
      <Form action="/TODO" className="flex flex-col half p-4">
        <textarea
          className="multi-line-input"
          name="description"
          autoComplete="off"
          placeholder="Enter Template Description"
        ></textarea>
        <button className="button-light-blue rounded-full py-2 px-6 max-[1330px]:w-2/5 mx-auto my-2">
          Generate Now
        </button>
      </Form>
    </div>
  );
};

export default GenerateTemplateSection;
