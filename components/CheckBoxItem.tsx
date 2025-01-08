const CheckBoxItem = ({ checkBoxText } : { checkBoxText: string }) => {
  return (
    <div className="flex1 button-outline py-1">{checkBoxText}</div>
  );
};

export default CheckBoxItem;
