import { Metadata } from "next"

import * as prismic from "@prismicio/client"
import { SliceZone } from "@prismicio/react"

import { client } from "@/prismicio"

import { components } from "@/slices"

// This component renders your homepage.
//
// Use Next's generateMetadata function to render page metadata.
//
// Use the SliceZone to render the content of the page.

export async function generateMetadata(): Promise<Metadata> {
  const page = await client.getSingle("home")

  return {
    title: prismic.asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title ?? undefined,
      images: [{ url: page.data.meta_image.url ?? "" }]
    }
  }
}

export default async function Index() {
  // The client queries content from the Prismic API
  const page = await client.getSingle("home")

  return <SliceZone slices={page.data.slices} components={components} />
}
