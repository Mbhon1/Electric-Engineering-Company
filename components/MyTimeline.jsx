import { Timeline } from "flowbite-react";
import { motion, useScroll } from "framer-motion";

export default function MyTimeline(props) {
  return (
    <motion.div className="mb-32 mx-7 mt-7">
      <Timeline>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>{props.date}</Timeline.Time>
            <Timeline.Title>{props.title}</Timeline.Title>
            <Timeline.Body>{props.body}</Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </motion.div>
  );
}
