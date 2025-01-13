// This component is used to display a written field for something like an address
// This component can be used as a single line written field for a signature by setting the number of lines to be 1
const MultiLineWrittenField = ({
  text, lines
} : {
  text: string, lines: number
}) => {
  return (
    <div className={"w-1/2 p-4 flex flex-row mx-auto"}>
      {/* text-nowrap forces the text to be on one line and then in turn forces the width of the written lines to
      adjust accordingly*/}
      <p className={"text-xs text-nowrap"}>{text}</p>
      <div className={"flex flex-col w-full"}>
        {/* I generate an array with a length the same as the number of lines and use that to properly count out the
        right number of lines */}
        {Array.from({ length: lines }).map((_) => (
          <div className={"mt-4 h-0 signature-line"}></div>
        ))}
      </div>
    </div>
  );
};

export default MultiLineWrittenField;
