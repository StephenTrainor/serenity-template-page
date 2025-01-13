import Image from "next/image";

// The PoweredBySerenityFooter is a small detail added to keep the brand of Serenity on the template, can be made
// smaller if necessary to avoid it being an eye sore
const PoweredBySerenityFooter = () => {
  return (
    // tailwind styling ensures that the footer stays anchored in the bottom right corner and the content is pushed to
    // the right-most position of the div
    <div className="flex flex-row fixed bottom-0 right-0">
      <p className={"ml-auto my-auto pr-[5px] pb-[3px] text-xs"}>powered by</p>
      <Image
        src={"/serenity-logo-blue-text.svg"}
        width={118}
        height={28}
        alt={"Serenity Logo"}
      />
    </div>
  );
};

export default PoweredBySerenityFooter;
