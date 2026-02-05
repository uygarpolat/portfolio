import { motion } from "motion/react";
import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div id="Contact">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="contact-intro">
          Please feel free to reach out about anything, I'm sure we could be
          friends. Thanks for stopping by! 👋
        </p>

        {status === "success" ? (
          <motion.div
            className="success-message"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h3>Message Sent! 🚀</h3>
            <p>Thanks for reaching out. I'll get back to you soon.</p>
            <button
              className="submit-btn"
              onClick={() => setStatus("idle")}
              style={{ margin: "2rem auto" }}
            >
              Send Another
            </button>
          </motion.div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                disabled={status === "loading"}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                required
                disabled={status === "loading"}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="What's on your mind?"
                required
                disabled={status === "loading"}
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Message"}{" "}
              <i className="devicon-telegram-plain"></i>
            </button>

            {status === "error" && (
              <p className="error-message">
                Oops! Something went wrong. Please try again or{" "}
                <a
                  href="mailto:info@uygarpolat.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  email me directly
                </a>
                .
              </p>
            )}
          </form>
        )}
      </motion.div>
    </div>
  );
}
