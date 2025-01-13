import Image from "next/image";

// Loads the image for the navbar
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