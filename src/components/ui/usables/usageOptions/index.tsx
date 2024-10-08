"use client"

import { motion } from "framer-motion"
import { Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BentoCard } from "@/components/ui/bentoCard"
import { cn } from "@/utils/cn"

export function UsageOptionsUsableExample() {
  return (
    <BentoCard
      className={cn("h-[300px] w-[360px]")}
      headline="Easy to Build & Publish"
      description="Build your projects in isolation, use anywhere!">
      <div className="flex flex-row items-center justify-center w-full h-full">
        <motion.div
          initial={{
            opacity: 0,
            y: 120,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            bounce: 0.65,
          }}
          className={cn(
            "bg-white p-2 rounded-2xl border border-neutral-100 shadow-xl shadow-neutral-200 flex flex-row items-center justify-center gap-2",
          )}>
          <Button
            className="rounded-xl hover:bg-neutral-100"
            variant="secondary">
            Share
          </Button>
          <Button className="rounded-xl" variant="primary" withArrow>
            Run
          </Button>
          <Button className="rounded-xl" variant="gloss">
            Publish
            <Rocket className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </BentoCard>
  )
}