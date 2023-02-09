import { Input, Textarea, Button } from "@material-tailwind/react";
import Layout from "@/layouts/layout";
import Swal from "sweetalert2";
import emailjs from "node_modules/emailjs-com";
import { Card } from "flowbite-react";

export default function MyForm() {
  // ! These API keys are meant to be public while using the EmailJs services and it's endpoints.
  const SERVICE_ID = "service_iquonrh";
  const TEMPLATE_ID = "template_1ipf8jz";
  const USER_ID = "emWpaSnr3C9Ar-DR_";

  function handleOnSubmit(e) {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        Swal.fire({ title: "Message Sent!", icon: "success" });
      },
      (error) => {
        Swal.fire({ title: "Ooops, something went wrong!", icon: "error" });
      }
    );
    // * clears the form after sending the email
    e.target.reset();
  }

  return (
    <Layout>
      <div className="">
        <Card>
          <div className="text-slate-500">
            <form
              onSubmit={handleOnSubmit}
              className="flex flex-col items-center gap-7"
            >
              <div className="">
                <Input
                  variant="outlined"
                  required
                  name="from_name"
                  label="Full Name"
                />
              </div>
              <div>
                <Input
                  variant="outlined"
                  required
                  name="from_email"
                  label="Email"
                />
              </div>
              <div>
                <Textarea
                  variant="outlined"
                  name="message"
                  color="blue"
                  label="Message"
                  required
                />
              </div>
              <Button className="uppercase" variant="filled" type="submit">
                Send
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </Layout>
  );
}
