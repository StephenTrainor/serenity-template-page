import {DEFAULT_TEMPLATE_ICON_URL, Template} from "@/types/template";
import Image from "next/image";

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
