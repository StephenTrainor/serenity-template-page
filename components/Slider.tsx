import { useState } from "react";
import Radio from "./Radio";
import SingleLineText from "./SingleLineText";

const Slider = ({ answerOptions } : { answerOptions: string[]}) => {
  var min = 0;
  var max = 10;

  try {
    min = parseInt(answerOptions[0]);
    max = parseInt(answerOptions[1]);
  } catch (e) {
    return (
      <SingleLineText answerOptions={[""]}/>
    )
  }

  var s = [];

  for (var i = min; i <= max; i++) {
    s.push(`${i}`);
  }

  return (
    <Radio answerOptions={s}/>
  );
  // const [sliderValue, setSliderValue] = useState<number>(min);

  // return (
  //   <div className="flex flex-col">
  //     <input 
  //       type="range" 
  //       value={sliderValue} 
  //       className="slider"
  //       step="1"
  //       min={min}
  //       max={max}
  //       onChange={(e) => setSliderValue(e.target.valueAsNumber)}
  //     />
  //     <div className="flex flex-row">
  //       <div className="pl-[5px] mr-auto">{min}</div>
  //       <div className="ml-auto">{max}</div>
  //     </div>
  //   </div>
  // );
};

export default Slider;
