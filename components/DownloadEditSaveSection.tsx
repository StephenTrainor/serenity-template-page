import OutlineButtonWithIcon from "./OutlineButtonWithIcon";
import FilledButton from "./FilledButton";

const DownloadEditSaveSection = () => {
  return (
    <div className="flex flex-row justify-center space-x-6">
      <OutlineButtonWithIcon
        classes=""
        buttonText="Download PDF"
        buttonClass="w-44"
        src="/download-icon-64px.png"
        size={20}
        alt="Download Icon"
      />
      <FilledButton 
        classes="my-auto ml-1"
        buttonText="Edit and Save"
        buttonClass="button-dark w-44"
        src="/edit-icon-64px.png"
        alt="Edit Icon"
      />
    </div>
  );
};

export default DownloadEditSaveSection;
