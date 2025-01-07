import Link from "next/link";
import Image from "next/image";
import { Template } from "@/types/template";

const TemplatePreview: React.FC<Template> = ({id, imageUrl, name, author}: Template) => {
  return (
    <Link href={`/templates/${id}`} className="template-preview">
      <div className="flex flex-row">
        <Image 
          className="mx-2"
          src={imageUrl}
          height={84}
          width={84}
          alt={`Icon for ${name} template`}
        />
        <div className="flex flex-col my-auto">
          <p className="subparagraph">{author}</p>
          <p className="">{name}</p>
        </div>
      </div>
    </Link>
  );
};

export default TemplatePreview;
