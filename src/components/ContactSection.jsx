import { GithubIcon, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_23jhsdt", // 🔹 Your EmailJS Service ID
        "template_e1kzozs", // 🔹 Your EmailJS Template ID
        formRef.current,
        { publicKey:"ybBtScmjgD05q0--e" } // 🔹 Your Public Key
      )
      .then(
        () => {
          toast({
            title: "Message Sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          setIsSubmitting(false);
          formRef.current.reset(); // clear form
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast({
            title: "Oops! Something went wrong.",
            description: "Please try again later.",
            variant: "destructive",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, creative projects, or collaborations.
          Whether you have a question, an idea, or just want to say hello — feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:sayakr360@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    sayakr360@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+0000000000"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +00000000000
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Kolkata, India
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/sayak-roy-526b58273"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin />
                </a>
                <a href="https://x.com/sayakroy6592552?t=RjymOQypMPnbWsIra_yp3Q&s=09" 
                  target="_blank"
                  rel="noreferrer"
                >
                  <Twitter />
                </a>
                <a href="https://github.com/sayakroy83" 
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
        <div className="relative bg-gradient-to-br from-background via-background/80 to-background/60 backdrop-blur-xl p-10 rounded-2xl border border-white/10 shadow-[0_0_25px_rgba(255,255,255,0.05)] transition-all duration-500 hover:shadow-[0_0_35px_var(--tw-shadow-color)] hover:[--tw-shadow-color:theme(colors.primary.DEFAULT)] group">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700"></div>

          <h3 className="text-3xl font-semibold mb-8 text-center tracking-tight relative z-10">
            Let’s <span className="text-primary">Connect</span>
          </h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="relative z-10 flex flex-col space-y-6"
          >
            {/* Floating Inputs */}
            <div className="relative">
              <input
                type="text"
                id="from_name"
                name="from_name"
                required
                placeholder=" "
                className="peer w-full px-4 pt-5 pb-2 rounded-lg bg-white/5 border border-white/20 text-base text-foreground backdrop-blur-md focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition-all duration-300"
              />
              <label
                htmlFor="from_name"
                className="absolute left-4 top-2 text-sm text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground/60 peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary"
              >
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="from_email"
                name="from_email"
                required
                placeholder=" "
                className="peer w-full px-4 pt-5 pb-2 rounded-lg bg-white/5 border border-white/20 text-base text-foreground backdrop-blur-md focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition-all duration-300"
              />
              <label
                htmlFor="from_email"
                className="absolute left-4 top-2 text-sm text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground/60 peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary"
              >
                Your Email
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                placeholder=" "
                className="peer w-full px-4 pt-5 pb-2 rounded-lg bg-white/5 border border-white/20 text-base text-foreground backdrop-blur-md focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition-all duration-300 resize-none"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 top-2 text-sm text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground/60 peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary"
              >
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "relative w-full py-3 text-lg font-medium rounded-lg overflow-hidden transition-all duration-500 group",
                isSubmitting
                  ? "bg-primary/60 cursor-not-allowed"
                  : "bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_30px_var(--tw-gradient-to-color)] text-white"
              )}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && (
                  <Send
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"></div>
            </button>
          </form>
        </div>
        
        </div>
      </div>
    </section>
  );
};
