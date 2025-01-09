import { useState } from "react";

const CheckBoxItem = ({ checkBoxText } : { checkBoxText: string }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <button className={isChecked ? "flex1 button-light-blue round-soft py-1" : "flex1 button-outline bg-white py-1"} onClick={() => setIsChecked(!isChecked)}>
      {checkBoxText}
    </button>
  );
};

export default CheckBoxItem;
