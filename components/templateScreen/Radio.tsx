import { useState } from "react";
import RadioItem from "./RadioItem";

type RadioValue = {
  [key: string]: boolean;
}

const Radio = ({ answerOptions } : { answerOptions: string[] }) => {
  const radioControllerDefault: RadioValue = answerOptions.reduce((acc, option) => ({
    ...acc,
    [option]: false
  }), {});

  const [radioState, setRadioState] = useState<RadioValue>(radioControllerDefault);

  const updateRadioController = (name: string) => {
    setRadioState(Object.entries(radioState).reduce((acc, options) => ({
      ...acc,
      [options[0]]: options[0] === name
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
