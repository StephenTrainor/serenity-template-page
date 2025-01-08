const SingleLineText = ({ answerOptions } : { answerOptions: string[]}) => {
  const placeHolderText: string = answerOptions[0] || "";

  return (
    <input 
      className="single-line-input round-soft w-full"
      autoComplete="off"
      placeholder={placeHolderText}
    />
  );
};

export default SingleLineText;
