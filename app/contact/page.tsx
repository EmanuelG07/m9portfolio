import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section style={{ minHeight: "vh", padding: "48px 20px", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "720px" }}>
        <ContactForm/>
        <div style={{ marginTop: 18, color: "rgba(234,242,255,0.7)", fontSize: 14 }}>
          Of stuur direct een mail naar <strong>emanuelghiorghita2@gmail.com</strong>
        </div>
      </div>
    </section>
  );  
}