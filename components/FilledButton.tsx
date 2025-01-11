import Image from "next/image";

const FilledButton = ({
  buttonText, buttonClass, classes, src, size=20, alt, onClick
} : { buttonText: string, buttonClass: string, classes: string, src: string, size: number, alt: string, onClick: () => void
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
          onClick={onClick}
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
  onClick: () => {}
};

export default FilledButton;
