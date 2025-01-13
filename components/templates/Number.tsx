// Essentially a SingleLineText component but only accepts numbers

// NOTE: This component is not used in the PDF generation, it is only used for displaying a preview of the template in
// the pages/templates/[id].tsx page
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
