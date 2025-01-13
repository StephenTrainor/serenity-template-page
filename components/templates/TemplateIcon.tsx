import Image from "next/image";
import {DEFAULT_TEMPLATE_ICON_URL, Template} from "@/types/template";

// TemplateIcon is used to generate the corresponding icon for a template. If an image is not found or the url is wrong,
// a default icon is displayed
const TemplateIcon = ({ template
} : {
  template: Template
}) => {
  return (
    <Image
      className="mx-auto my-6"
      src={template.imageUrl || DEFAULT_TEMPLATE_ICON_URL}
      width={128}
      height={128}
      alt={`Icon for ${template.name} template`}
    />
  );
}

export default TemplateIcon;
