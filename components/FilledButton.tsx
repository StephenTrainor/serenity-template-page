import Image from "next/image";

// Displays a button and icon (if specified) as a button with a filled background
const FilledButton = ({
  buttonText, buttonClass, classes, src, size=20, alt, onClick
} : { buttonText: string, buttonClass: string, classes: string, src: string, size: number, alt: string, onClick: () => void
}) => {
  return (
    // ensure that the entire div acts as the button, not just the image or button tags themselves
    <div className={buttonClass} onClick={onClick}>
      <button>{buttonText}</button>

      {/* Check src before trying to render image to avoid errors */}
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
  onClick: () => {}
};

export default FilledButton;
