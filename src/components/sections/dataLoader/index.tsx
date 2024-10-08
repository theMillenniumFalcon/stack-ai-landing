"use client"

import React from "react"
import { SectionContainer } from "@/components/layouts/sectionContainer"
import { ViewContainer } from "@/components/layouts/viewContainer"
import { CTAContainer, CTADescription, CTAHeadline } from "@/components/ui/cta"
import { AppsConnectedUsableExample } from "@/components/ui/usables/appsConnected"

export const DataLoaderSection = () => {
  return (
    <SectionContainer id="data-loaders">
      <ViewContainer className="flex flex-row-reverse items-center justify-around max-lg:flex-col max-xl:items-center max-xl:gap-12">
        <CTAContainer>
          <CTAHeadline>Connect with your Data, wherever it sits...</CTAHeadline>
          <CTADescription>
            Seamlessly connect to your data using our suite of integrations with
            popular data storage solutions such as <b>AWS S3</b>,{" "}
            <b>Google Drive</b>,<b>OneDrive</b>, <b>Notion</b>, <b>Airtable</b>,
            and many more...
          </CTADescription>
          <CTADescription>
            Power your application with advanced indexing algorithms to extract
            the most relevant responses for your users.
          </CTADescription>
        </CTAContainer>
        <AppsConnectedUsableExample />
      </ViewContainer>
    </SectionContainer>
  )
}