import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";

const TextWithToolTip = ({
  toolTipText, mainText, mainTextClasses, centeredText=true, serenityColor=false
} : {
  toolTipText: string, mainText: string, mainTextClasses: string, centeredText: boolean, serenityColor: boolean
}) => {
  return (
    <div className="flex flex-row">
      <div className={centeredText ? "flex1" : ""}></div>
      <div className="my-auto">
        <p className={mainTextClasses}>{mainText}</p>
      </div>
      <div className="flex1">
        <Tooltip
          title={toolTipText}
          className="float-right"
        >
          <IconButton>
            {serenityColor ? <InfoIcon style={{ color: "#162560"}}/> : <InfoIcon />}
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

TextWithToolTip.defaultProps = {
  mainTextClasses: "",
  centeredText: true,
  serenityColor: false,
}

export default TextWithToolTip;
