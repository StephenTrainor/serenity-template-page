import Image from "next/image";

const PoweredBySerenityFooter = () => {
  return (
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
