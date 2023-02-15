import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

const ContactDiv = styled("div")({
  height: "100vh",
  margin: "auto",
  display: "flex",
  padding: "15px",
  gap: 15,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const HeadingDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 20,
  padding: "20px 30px",
  "> h1 , > h2": {
    fontFamily: "sans-serif",
    color: "var(--text-color-1)",
  },
});

const ContactItem = styled("div")({
  marginBottom: "15px",
  "> a": {
    display: "flex",
    alignItems: "center",
    gap: 15,
    textDecoration: "none",
    p: {
      color: "var(--text-color-2)",
      "@media screen and (min-width:600px)": {
        fontSize: "20px",
      },
    },
  },
});

const contacts = [
  {
    link: "mailto:anuj.kashyap@anujkashyap.online",
    text: "anuj.kashyap@anujkashyap.online",
    image: "/Images/email.svg",
  },
  {
    link: "https://api.whatsapp.com/send?phone=9034609506&text=Hello",
    text: "+91 9034609506",
    image: "/Images/WhatsApp.svg",
  },
  {
    link: "https://www.linkedin.com/in/anuj-kashyap",
    text: "www.linkedin.com/in/anuj-kashyap",
    image: "/Images/linkedin.svg",
  },
  {
    link: "https://github.com/Anuj-Kashyap-03",
    text: "https://github.com/Anuj-Kashyap-03",
    image: "/Images/github.svg",
  },
];

export default function Contact() {
  return (
    <ContactDiv>
      <HeadingDiv data-aos="fade-up">
        <h1>Contact Me</h1>
      </HeadingDiv>
      <div data-aos="fade-up">
        {contacts.map((item, i) => (
          <ContactItem key={i}>
            <Link href={item.link} target="_blank">
              <div className="image">
                <Image
                  src={item.image}
                  alt={item.text}
                  height={40}
                  width={40}
                />
              </div>
              <div className="text">
                <p>{item.text}</p>
              </div>
            </Link>
          </ContactItem>
        ))}
      </div>
    </ContactDiv>
  );
}
