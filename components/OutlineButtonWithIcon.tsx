import Image from "next/image";

const OutlineButtonWithIcon = ({
  buttonText, buttonClass, classes, src, size, alt, onClick
} : {
  buttonText: string, buttonClass: string, classes: string, src: string, size: number, alt: string, onClick: () => void
}) => {
  return (
    <div className={`button-outline py-1 px-3 ${buttonClass}`}>
      <button onClick={onClick}>{buttonText}</button>
      <Image 
        className={`self-center ml-1 ${classes}`}
        src={src}
        width={size}
        height={size}
        alt={alt || `${buttonText} Icon`}
      />
    </div>
  );
};

OutlineButtonWithIcon.defaultProps = {
  onClick: () => {},
  classes: "",
  buttonClass: "",
}

export default OutlineButtonWithIcon;
