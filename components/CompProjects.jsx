import { Carousel } from "flowbite-react";
import Image from "next/image";
import projectPhotos from "@/pages/api/projectPhotos";
import { motion } from "framer-motion";

export default function CompProjects() {
  const projects = projectPhotos.map((project) => {
    return (
      <Image
        key={project.id}
        alt={project.alt}
        src={project.imgLink}
        width={200}
        height={300}
      />
    );
  });

  return (
    <motion.div>
      <div className="px-9 mt-7">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>{projects}</Carousel>
        </div>
      </div>
    </motion.div>
  );
}
