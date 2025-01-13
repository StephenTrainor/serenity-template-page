const MultiLineWrittenField = ({
  text, lines
} : {
  text: string, lines: number
}) => {
  return (
    <div className={"w-1/2 p-4 flex flex-row mx-auto"}>
      <p className={"text-xs text-nowrap"}>{text}</p>
      <div className={"flex flex-col w-full"}>
        {Array.from({ length: lines}).map((_) => (
          <div className={"mt-4 h-0 signature-line"}></div>
        ))}
      </div>
    </div>
  );
};

export default MultiLineWrittenField;
