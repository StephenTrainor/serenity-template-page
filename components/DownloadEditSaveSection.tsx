import FilledButton from "./FilledButton";
import OutlineButtonWithIcon from "./OutlineButtonWithIcon";

// This component groups the two buttons together so they can be reused in parts of the website. Also accepts two
// functions that are passed down to the buttons so they can be functional if needed down the road
const DownloadEditSaveSection = ({
  downloadOnClick, editAndSaveOnClick } : {
  downloadOnClick: () => void, editAndSaveOnClick: () => void,
}) => {
  return (
    <div className="flex flex-row justify-center space-x-6">
      <OutlineButtonWithIcon
        classes=""
        buttonText="Download PDF"
        buttonClass="w-44"
        src="/download-icon-64px.png"
        size={20}
        alt="Download Icon"
        onClick={downloadOnClick}
      />
      <FilledButton 
        classes="my-auto ml-1"
        buttonText="Edit and Save"
        buttonClass="button-dark w-44"
        src="/edit-icon-64px.png"
        alt="Edit Icon"
        onClick={editAndSaveOnClick}
      />
    </div>
  );
};

DownloadEditSaveSection.defaultProps = {
  downloadOnClick: () => {},
  editAndSaveOnClick: () => {},
}

export default DownloadEditSaveSection;
