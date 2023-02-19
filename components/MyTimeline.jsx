import { Timeline } from "flowbite-react";
import { motion, useScroll } from "framer-motion";

export default function MyTimeline(props) {
  const list = {
    hidden: {
      opacity: 0,
      transition: { when: "afterChildren" },
    },
  };

  const item = {
    hidden: {
      opacity: 1,
      transition: { duration: 2 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      variants={list}
      className="mb-32 mx-7 mt-7"
    >
      <Timeline>
        <Timeline.Item>
          <motion.div variants={item} size={50}>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>{props.date}</Timeline.Time>
              <Timeline.Title>{props.title}</Timeline.Title>
              <Timeline.Body>{props.body}</Timeline.Body>
            </Timeline.Content>
          </motion.div>
        </Timeline.Item>
      </Timeline>
    </motion.div>
  );
}
