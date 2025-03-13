import { Icon } from "@iconify/react";
import { Button, Card, CardBody, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";
import { toast } from "react-hot-toast";

const contactInfo = [
  { icon: "lucide:mail", label: "Email", value: "joytarafder3@gmail.com" },
  { icon: "lucide:phone", label: "Phone", value: "+880 171 489-0199" },
  {
    icon: "lucide:map-pin",
    label: "Location",
    value: "32-34 House, Road 19, Nikunjo 2,Khilkhet, Dhaka",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // Create mailto URL with form data
      const mailtoUrl = `mailto:joytarafder3@gmail.com?subject=Contact Form Submission from ${
        formData.name
      }&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      // Open email client
      window.location.href = mailtoUrl;

      // Show success message
      toast.success("Email client opened successfully!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to open email client");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="py-32 px-4 bg-gradient-to-b from-background to-default-50"
      id="contact"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" />
          <p className="mt-6 text-xl text-default-600 max-w-2xl">
            Have a project in mind? Let's work together to create something
            amazing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-background/60 backdrop-blur-sm border border-default-200">
            <CardBody className="gap-6">
              <div className="space-y-8">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="p-4 rounded-xl bg-primary-50">
                      <Icon
                        icon={item.icon}
                        className="text-2xl text-primary-500"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-default-500">
                        {item.label}
                      </h3>
                      <p className="text-lg font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          <Card className="bg-background/60 backdrop-blur-sm border border-default-200">
            <CardBody>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <Input
                  name="name"
                  label="Name"
                  placeholder="Enter your name"
                  variant="bordered"
                  size="lg"
                  value={formData.name}
                  onChange={handleChange}
                  startContent={
                    <Icon icon="lucide:user" className="text-default-400" />
                  }
                  isRequired
                />
                <Input
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                  size="lg"
                  value={formData.email}
                  onChange={handleChange}
                  startContent={
                    <Icon icon="lucide:mail" className="text-default-400" />
                  }
                  isRequired
                />
                <Textarea
                  name="message"
                  label="Message"
                  placeholder="Enter your message"
                  variant="bordered"
                  size="lg"
                  minRows={4}
                  value={formData.message}
                  onChange={handleChange}
                  isRequired
                />
                <Button
                  color="primary"
                  type="submit"
                  size="lg"
                  endContent={
                    <Icon
                      icon={isSubmitting ? "lucide:loader" : "lucide:send"}
                      className={isSubmitting ? "animate-spin" : ""}
                    />
                  }
                  isLoading={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
