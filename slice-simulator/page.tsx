import { redirect } from "next/navigation"

import { SliceZone } from "@prismicio/react"

import {
  getSlices,
  SliceSimulator,
  SliceSimulatorParams
} from "@slicemachine/adapter-next/simulator"

import { components } from "../slices"

export default function SliceSimulatorPage({
  searchParams
}: SliceSimulatorParams & { searchParams: { secret?: string } }) {
  if (
    process.env.SLICE_SIMULATOR_SECRET &&
    searchParams.secret !== process.env.SLICE_SIMULATOR_SECRET
  ) {
    redirect("/")
  }

  const slices = getSlices(searchParams.state)

  return (
    <SliceSimulator>
      <SliceZone slices={slices} components={components} />
    </SliceSimulator>
  )
}
