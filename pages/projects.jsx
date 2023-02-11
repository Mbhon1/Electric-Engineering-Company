import CompProjects from "@/components/CompProjects";
import Layout from "@/layouts/layout";
import MyTimeline from "@/components/MyTimeline";
import timelineData from "./api/timelineData";
import { motion, useScroll } from "framer-motion";

export default function Projects() {
  const projTimeline = timelineData.map((allLines) => {
    return <MyTimeline key={allLines.id} {...allLines} />;
  });

  return (
    <Layout>
      <CompProjects />
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        {projTimeline}
      </motion.div>
    </Layout>
  );
}
