import { useState } from "react";

// NOTE: This component is not used in the PDF generation, it is only used for displaying a preview of the template in
// the pages/templates/[id].tsx page
const CheckBoxItem = ({ checkBoxText } : { checkBoxText: string }) => {
  // each check box controls its own state because multiple check boxes can be selected
  // nothing is done with the value since it is purely visual and not used in PDF generation
  const [isChecked, setIsChecked] = useState(false);

  return (
    <button className={isChecked ? "flex1 button-light-blue round-soft py-1" : "flex1 button-outline bg-white py-1"} onClick={() => setIsChecked(!isChecked)}>
      {checkBoxText}
    </button>
  );
};

export default CheckBoxItem;
