import { Input, Textarea, Button } from "@material-tailwind/react";
import Layout from "@/layouts/layout";

export default function MyForm() {
  return (
    <Layout>
      <form className="flex flex-col items-center mt-7 gap-7">
        <div className="">
          <Input variant="outline" label="Full Name" />
        </div>
        <div>
          <Input variant="outline" label="Email" />
        </div>
        <div>
          <Textarea variant="outline" color="blue" label="Message" />
        </div>
        <Button variant="filled" type="submit">
          Submit
        </Button>
      </form>
    </Layout>
  );
}
