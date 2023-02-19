import Image from "next/image";

export default function TeamMembers(props) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 mb-28 mt-7 px-7">
      <div className="flex flex-col items-center w-48 shadow-md">
        <Image
          alt={props.alt}
          width={700}
          height={700}
          className="w-full"
          src={props.imgSrc}
        />
        <h2>{props.name}</h2>
        <span className="text-slate-500">{props.title}</span>
        <p>{props.email}</p>
      </div>
    </div>
  );
}
