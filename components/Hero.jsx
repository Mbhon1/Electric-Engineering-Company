import Image from "next/image";
import engineering from "public/engineering.png";

export default function Hero() {
  return (
    <div className="h-screen bg-center bg-cover">
      <Image src={engineering} alt="Hero" cover center priority />
    </div>
  );
}
