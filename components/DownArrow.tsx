import Image from "next/image";

export default function DownArrow() {
  return (
    <Image
      className="ml-1"
      src="/down-arrow.png"
      width={22}
      height={4}
      alt="Down arrow"
    />
  );
}