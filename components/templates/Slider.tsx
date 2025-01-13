import { useState } from "react";
import SingleLineText from "@/components/templates/SingleLineText";

// This Slider component can be removed since a Slider wouldn't even be used in a physical checklist form. This
// component is mostly eye candy for displaying input fields. If needed for a template, a number input field can be
// used instead

// NOTE: This component is not used in the PDF generation, it is only used for displaying a preview of the template in
// the pages/templates/[id].tsx page
const Slider = ({ answerOptions } : { answerOptions: string[]}) => {
  var min = 0;
  var max = 10;

  try {
    // get the upper and lower bounds for the slider
    min = parseInt(answerOptions[0]);
    max = parseInt(answerOptions[1]);
  } catch (e) {
    // if the component was used incorrectly, a default input field is displayed instead of crashing
    return (
      <SingleLineText answerOptions={[""]}/>
    )
  }

  // sliderValue could be used with further styling to show the current value but not necessary
  const [sliderValue, setSliderValue] = useState<number>(min);

  return (
    <div className="flex flex-col">
      <input
        type="range"
        value={sliderValue}
        className="slider"
        step="1"
        min={min}
        max={max}
        onChange={(e) => setSliderValue(e.target.valueAsNumber)}
      />
      <div className="flex flex-row">
        <div className="pl-[5px] mr-auto">{min}</div>
        <div className="ml-auto">{max}</div>
      </div>
    </div>
  );
};

export default Slider;
