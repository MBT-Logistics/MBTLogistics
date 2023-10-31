import {
  Clients,
  Hero,
  Numbers,
  Services,
  Testimonial,
  Transporting,
  WhyChoose,
  WhyUs,
} from "@/components";

export default function Home() {
  return (
    <section>
      <Hero />
      <Services />
      <WhyUs />
      <Numbers />
      <Clients />
      <Transporting />
      <Testimonial />
      <WhyChoose />
    </section>
  );
}
