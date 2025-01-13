// ThinLineSignatureField differs from the MultiLineWrittenField component because this component places the text
// centered and below the line
const ThinLineSignatureField = ({
  text
} : {
  text: string
}) => {
  return (
    <div className={"w-1/2 p-4"}>
      <div className={"signature-line"}></div>
      <p className={"tiny-text"}>{text}</p>
    </div>
  );
};

export default ThinLineSignatureField;
