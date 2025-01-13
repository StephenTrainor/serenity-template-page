import Image from "next/image";

// The same as FilledButton but requires that an image src exists. Displays the button with a border instead of being
// filled
const OutlineButtonWithIcon = ({
  buttonText, buttonClass, classes, src, size, alt, onClick
} : {
  buttonText: string, buttonClass: string, classes: string, src: string, size: number, alt: string, onClick: () => void
}) => {
  return (
    // ensure that the entire div acts as the button, not just the image or button tags themselves
    <div className={`button-outline py-1 px-3 ${buttonClass}`} onClick={onClick}>
      <button>{buttonText}</button>
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
