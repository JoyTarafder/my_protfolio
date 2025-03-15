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
      className="py-16 sm:py-32 px-4 relative overflow-hidden"
      id="contact"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-primary/[0.02] -z-1" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(var(--color-primary),0.01)] to-transparent" />
      <div
        className="absolute top-40 right-10 w-64 sm:w-96 h-64 sm:h-96 rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.04]"
        style={{ background: "rgba(var(--color-primary), 1)" }}
      />

      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-20">
          <div className="inline-block mb-4">
            <h2 className="text-3xl sm:text-5xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-[rgba(var(--color-primary),1)] to-[rgba(var(--color-primary),0.6)]">
              Get in Touch
            </h2>
            <div className="w-full h-1 mt-2 bg-gradient-to-r from-[rgba(var(--color-primary),0.4)] to-transparent rounded-full transform origin-left group-hover:scale-x-110 transition-transform duration-300"></div>
          </div>
          <p className="mt-4 sm:mt-6 text-base sm:text-xl text-default-600 max-w-2xl px-4 leading-relaxed">
            Have a project in mind? Let's work together to create something
            amazing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          <Card className="bg-background/40 backdrop-blur-xl border-none shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardBody className="gap-6 sm:gap-8">
              <div className="space-y-8 sm:space-y-10">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 sm:gap-6 group hover:translate-x-1 transition-transform duration-300"
                  >
                    <div className="p-4 sm:p-5 rounded-2xl bg-[rgba(var(--color-primary),0.06)] border border-[rgba(var(--color-primary),0.1)] group-hover:bg-[rgba(var(--color-primary),0.1)] transition-colors duration-300">
                      <Icon
                        icon={item.icon}
                        className="text-2xl sm:text-3xl text-white"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-medium text-default-500 mb-1">
                        {item.label}
                      </h3>
                      <p className="text-lg sm:text-xl font-semibold text-white">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          <Card className="bg-background/40 backdrop-blur-xl border-none shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardBody>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 sm:gap-8"
              >
                <Input
                  name="name"
                  label="Name"
                  placeholder="Enter your name"
                  variant="bordered"
                  size="lg"
                  value={formData.name}
                  onChange={handleChange}
                  startContent={
                    <Icon
                      icon="lucide:user"
                      className="text-white text-base sm:text-lg"
                    />
                  }
                  classNames={{
                    label: "text-sm sm:text-base text-default-500",
                    input: "text-base sm:text-lg text-white",
                    inputWrapper: "bg-[rgba(var(--color-primary),0.04)] border-[rgba(var(--color-primary),0.1)] hover:border-[rgba(var(--color-primary),0.2)] focus-within:border-[rgba(var(--color-primary),0.3)]"
                  }}
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
                    <Icon
                      icon="lucide:mail"
                      className="text-white text-base sm:text-lg"
                    />
                  }
                  classNames={{
                    label: "text-sm sm:text-base text-default-500",
                    input: "text-base sm:text-lg text-white",
                    inputWrapper: "bg-[rgba(var(--color-primary),0.04)] border-[rgba(var(--color-primary),0.1)] hover:border-[rgba(var(--color-primary),0.2)] focus-within:border-[rgba(var(--color-primary),0.3)]"
                  }}
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
                  classNames={{
                    label: "text-sm sm:text-base text-default-500",
                    input: "text-base sm:text-lg text-white",
                    inputWrapper: "bg-[rgba(var(--color-primary),0.04)] border-[rgba(var(--color-primary),0.1)] hover:border-[rgba(var(--color-primary),0.2)] focus-within:border-[rgba(var(--color-primary),0.3)]"
                  }}
                  isRequired
                />
                <Button
                  color="primary"
                  type="submit"
                  size="lg"
                  className="text-base sm:text-lg h-12 sm:h-14 bg-gradient-to-r from-[rgba(var(--color-primary),1)] to-[rgba(var(--color-primary),0.8)] hover:opacity-90 transition-opacity"
                  endContent={
                    <Icon
                      icon={isSubmitting ? "lucide:loader" : "lucide:send"}
                      className={`text-lg sm:text-xl ${
                        isSubmitting ? "animate-spin" : ""
                      }`}
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
