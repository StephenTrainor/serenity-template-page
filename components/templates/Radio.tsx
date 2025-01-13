import { useState } from "react";
import RadioItem from "./RadioItem";

// custom type used for the radioState
type RadioValue = {
  [key: string]: boolean;
}

// NOTE: This component is not used in the PDF generation, it is only used for displaying a preview of the template in
// the pages/templates/[id].tsx page
const Radio = ({ answerOptions } : { answerOptions: string[] }) => {
  // Using some reduce tricks to generate an object (RadioValue) that has all options set to false initially
  const radioControllerDefault: RadioValue = answerOptions.reduce((acc, option) => ({
    ...acc,
    [option]: false
  }), {});

  const [radioState, setRadioState] = useState<RadioValue>(radioControllerDefault);

  // Uses reduce to set the radioState to true if and only if the key matches the key of the RadioItem that called the
  // update function originally
  const updateRadioController = (name: string) => {
    setRadioState(Object.entries(radioState).reduce((acc, options) => ({
      ...acc,
      [options[0]]: options[0] === name // ensures that all other entries are false to maintain radio invariant
    }), {}));
  };

  return (
    <div className="flex flex-row space-x-2">
      {answerOptions.map((option) => (
        <RadioItem
          name={option}
          isActive={radioState[option]}
          update={updateRadioController}
        />
      ))}
    </div>
  );
};

export default Radio;
