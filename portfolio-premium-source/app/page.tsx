import { HeroSection } from "@/components/sections/hero"
import { SocialProof } from "@/components/sections/social-proof"
import { SkillsSection } from "@/components/sections/skills"
import { ServicesSection } from "@/components/sections/services"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { ProcessSection } from "@/components/sections/process"
import { LanguagesSection } from "@/components/sections/languages"

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialProof />
      <FeaturedProjects />
      <LanguagesSection />
      <ServicesSection />
      <ProcessSection />
      <SkillsSection />
    </>
  )
}
