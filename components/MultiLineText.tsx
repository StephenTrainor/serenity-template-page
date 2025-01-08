const MultiLineText = ({ answerOptions } : { answerOptions: string[]}) => {
  const placeHolderText: string = answerOptions[0] || ""

  return (
    <textarea
      className="multi-line-input w-full"
      autoComplete="off"
      placeholder={placeHolderText}
    ></textarea>
  );
};

export default MultiLineText;
