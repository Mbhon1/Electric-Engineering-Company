import { Timeline } from "flowbite-react";

export default function MyTimeline() {
  return (
    <div className="mb-32 mx-7 mt-7">
      <Timeline>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>February 2018</Timeline.Time>
            <Timeline.Title>Lorem Ipsum</Timeline.Title>
            <Timeline.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              fugiat quaerat vel repellat placeat aut eligendi maxime distinctio
              laboriosam doloremque?
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>October 2018</Timeline.Time>
            <Timeline.Title>Lorem, ipsum dolor.</Timeline.Title>
            <Timeline.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              blanditiis repellat itaque, voluptatibus distinctio, placeat illum
              accusamus voluptas accusantium, facilis nobis nostrum possimus
              explicabo!
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>April 2020</Timeline.Time>
            <Timeline.Title>Lorem Ipsum</Timeline.Title>
            <Timeline.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              beatae maxime, illum est natus minima?
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
