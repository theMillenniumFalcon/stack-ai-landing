"use client"

import { SectionContainer } from "@/components/layouts/sectionContainer"
import { ViewContainer } from "@/components/layouts/viewContainer"
import { AnalyseWebsiteUsableExample } from "@/components/ui/usables/analyzeWebsite"
import { AnalyseReportsUsableExample } from "@/components/ui/usables/analyzeReports"
import { UsageOptionsUsableExample } from "@/components/ui/usables/usageOptions"

export const FeaturesBentoSection = () => {
  return (
    <SectionContainer id="features-bento">
      <ViewContainer>
        <div>
          <h2 className="font-bold text-center text-6xl max-lg:text-4xl max-md:text-3xl">
            There&apos;re a lot of magical <br />
            things you can do
          </h2>
          <p className="text-center text-neutral-500 mt-8">
            Discover endless possibilities with a myriad of enchanting feats at
            your fingertips.
          </p>
        </div>
        <div className="mt-24 grid grid-cols-3 gap-6 max-xl:grid-cols-2 max-lg:grid-cols-1 max-xl:gap-12 max-lg:w-fit max-lg:mx-auto max-lg:gap-6">
          <AnalyseWebsiteUsableExample />
          <AnalyseReportsUsableExample />
          <UsageOptionsUsableExample />
        </div>
      </ViewContainer>
    </SectionContainer>
  )
}