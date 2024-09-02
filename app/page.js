import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Service from "@/components/Service";
import Team from "@/components/Team";

export default function Home() {
  return (
    <div>
          <Hero />
          <Feature />
          <Service/>
          <Team/>
          <Pricing />
    </div>
  );
}
