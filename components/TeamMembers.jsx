import Image from "next/image";
import { Card } from "flowbite-react";

export default function TeamMembers(props) {
  return (
    <div className="grid gap-2 grid-cols-fluid mb-28 mt-7 px-7">
      <Card className="w-48">
        <div className="flex flex-col items-center ">
          <Image
            alt={props.alt}
            width={700}
            height={700}
            className="w-full"
            src={props.imgSrc}
          />
          <h2>{props.name}</h2>
          <span>{props.title}</span>
          <p>{props.email}</p>
        </div>
      </Card>
    </div>
  );
}
