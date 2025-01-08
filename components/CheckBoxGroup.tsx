import CheckBoxItem from "./CheckBoxItem";

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
