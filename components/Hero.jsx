import Image from "next/image";
import engineering from "public/engineering.png";

export default function Hero() {
  return (
    <div>
      <Image src={engineering} alt="Hero" cover priority />
    </div>
  );
}
