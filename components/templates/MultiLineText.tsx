// A textarea is used instead of input so that multiple lines can be typed without the need for scrolling

// NOTE: This component is not used in the PDF generation, it is only used for displaying a preview of the template in
// the pages/templates/[id].tsx page
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
