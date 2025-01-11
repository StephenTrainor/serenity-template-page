import Link from "next/link";
import Image from "next/image";
import {DEFAULT_TEMPLATE_ICON_URL, Template} from "@/types/template";

const TemplatePreview: React.FC<Template> = ({id, imageUrl, name, author}: Template) => {
  return (
    <Link href={`/templates/${id}`} className="template-preview">
      <div className="flex flex-row">
        {imageUrl ? <Image 
          className="mx-2"
          src={imageUrl}
          height={84}
          width={84}
          alt={`Icon for ${name} template`}
        /> : <Image 
          className="mx-2"
          src={DEFAULT_TEMPLATE_ICON_URL}
          height={84}
          width={84}
          alt="Default icon of a checklist"
        />}
        <div className="flex flex-col my-auto">
          <p className="subparagraph">{author}</p>
          <p className="">{name}</p>
        </div>
      </div>
    </Link>
  );
};

export default TemplatePreview;
