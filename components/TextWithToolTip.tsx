import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";

// The ToolTip icon is a component that can be hovered over and displays extra text such as the details for an
// assertion in the inspection checklist
const TextWithToolTip = ({
  toolTipText, mainText, mainTextClasses, centeredText=true, serenityColor=false
} : {
  toolTipText: string, mainText: string, mainTextClasses: string, centeredText: boolean, serenityColor: boolean
}) => {
  return (
    <div className="flex flex-row">
      {/* flex1 class is used to avoid or center the mainText depending on the use case */}
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
            {/* use a ternary expression to load the appropriate icon color, a quick fix for dealing with the MUI
            default styles */}
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
  serenityColor: false
};

export default TextWithToolTip;
