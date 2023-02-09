import Image from "next/image";
import { Card } from "flowbite-react";
import member1 from "public/member1.png";
import member2 from "public/member2.png";
import member3 from "public/member3.png";
import member4 from "public/member4.png";

export default function TeamMembers() {
  return (
    <div className="flex flex-col items-center max-w-xs gap-4 mx-auto mb-28 mt-7 px-14">
      <Card>
        <div className="flex flex-col items-center">
          <Image src={member1} alt="CEO" width={180} />
          <h2>Team Member 1</h2>
          <span>CEO / Founder</span>
          <p>member1@email.com</p>
        </div>
      </Card>

      <Card>
        <div className="flex flex-col items-center">
          <Image src={member2} alt="CEO" width={180} />
          <h2>Team Member 2</h2>
          <span>Co-founder</span>
          <p>member2@email.com</p>
        </div>
      </Card>

      <Card>
        <div className="flex flex-col items-center">
          <Image src={member3} alt="CEO" width={180} />
          <h2>Team Member 3</h2>
          <span>HR</span>
          <p>member3@email.com</p>
        </div>
      </Card>

      <Card>
        <div className="flex flex-col items-center">
          <Image src={member4} alt="CEO" width={180} />
          <h2>Team Member 4</h2>
          <span>Employer</span>
          <p>member1@email.com</p>
        </div>
      </Card>
    </div>
  );
}
