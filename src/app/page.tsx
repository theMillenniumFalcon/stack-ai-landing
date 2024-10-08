"use client"

import { HeroSection } from "@/components/sections/hero"
import { BasicFeatureSection } from "@/components/sections/basicFeatures"
import { FeaturesBentoSection } from "@/components/sections/featuresBento"
import { HowToUseSection } from "@/components/sections/howToUse"
import { BuildIdeaSection } from "@/components/sections/buildIdea"
import { ModelsUsedSection } from "@/components/sections/modelsUsed"
import { GetStartedWithDocumentationSection } from "@/components/sections/getStartedWithDocumentation"
import { PartnerSection } from "@/components/sections/partner"
import { SecuritySection } from "@/components/sections/security"
import { DataLoaderSection } from "@/components/sections/dataLoader"
import { TestimonialSection } from "@/components/sections/testimonial"
import { InvestorSection } from "@/components/sections/investor"
import { FooterSection } from "@/components/sections/footer"
import { CTASection } from "@/components/sections/cta"

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-8 max-md:gap-0">
      <HeroSection />
      <BasicFeatureSection />
      <FeaturesBentoSection />
      <HowToUseSection />
      <BuildIdeaSection />
      <ModelsUsedSection />
      <GetStartedWithDocumentationSection />
      <PartnerSection />
      <SecuritySection />
      <DataLoaderSection />
      <TestimonialSection />
      <InvestorSection />
      <FooterSection />
      <CTASection />
    </div>
  )
}
