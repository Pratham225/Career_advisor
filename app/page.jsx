import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroSection from "@/components/hero"

export default function Home() {
  return (
    <div className="grid-background">
      <HeroSection />
      <section>
        <div>
          <h2>
            Powerful Features for your Career Growth
          </h2>
        </div>
      </section>
    </div>
  )
}
