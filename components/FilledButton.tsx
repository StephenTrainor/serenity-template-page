import Image from "next/image";

const FilledButton = ({
  buttonText, buttonClass, classes, src, size=20, alt
} : { buttonText: string, buttonClass: string, classes: string, src: string, size: number, alt: string 
}) => {
  return (
    <div className={buttonClass}> 
      <button>{buttonText}</button>
      {src !== "" ? 
        <Image 
          className={classes}
          src={src}
          width={size}
          height={size}
          alt={alt}
        /> : <></>
      }
    </div>
  );
};

FilledButton.defaultProps = {
  src: "",
  size: 20,
  buttonClass: "button-light-blue",
  classes: "",
};

export default FilledButton;
