import TeamMembers from "@/components/TeamMembers";
import Layout from "@/layouts/layout";

export default function Team() {
  return (
    <Layout>
      <div className="flex flex-col items-center mt-7">
        <h2>Meet The Team</h2>
      </div>
      <TeamMembers />
    </Layout>
  );
}
