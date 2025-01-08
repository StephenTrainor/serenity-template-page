const Number = ({ answerOptions } : { answerOptions: string[]}) => {
  const placeHolderText: string = answerOptions[0] || "0";

  return (
    <input 
      className="single-line-input round-soft w-full"
      type="number"
      placeholder={placeHolderText}
    />
  );
};

export default Number;
