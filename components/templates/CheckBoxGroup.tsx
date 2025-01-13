import CheckBoxItem from "./CheckBoxItem";

// CheckBoxGroup simply maps all the options to their own CheckBoxItem component and serves as a wrapper

// NOTE: This component is not used in the PDF generation, it is only used for displaying a preview of the template in
// the pages/templates/[id].tsx page
const CheckBoxGroup = ({ answerOptions } : { answerOptions: string[] }) => {
  return (
    <div className="flex flex-row space-x-4">
      {answerOptions.map((checkBoxOption) => (
        <CheckBoxItem 
          checkBoxText={checkBoxOption}
        />
      ))}
    </div>
  );
};

export default CheckBoxGroup;
