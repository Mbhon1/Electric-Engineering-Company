import TeamMembers from "@/components/TeamMembers";
import Layout from "@/layouts/layout";
import teamInfo from "@/pages/api/teamInfo";

export default function Team() {
  const memberInfos = teamInfo.map((memberInfo) => {
    return <TeamMembers key={memberInfo.id} {...memberInfo} />;
  });

  return (
    <Layout>
      <div className="flex flex-col items-center mt-7">
        <h2>Meet The Team</h2>
      </div>
      {memberInfos}
    </Layout>
  );
}
