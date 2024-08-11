import { Metadata } from "next"
import { notFound } from "next/navigation"

import * as prismic from "@prismicio/client"
import { SliceZone } from "@prismicio/react"

import { client } from "@/prismicio"

import { components } from "@/slices"

/**
 * This page renders a Prismic Document dynamically based on the URL.
 */

export async function generateMetadata({
  params
}: {
  params: Params
}): Promise<Metadata> {
  const page = await client.getByUID("page", params.uid).catch(() => notFound())

  return {
    title: prismic.asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title || undefined,
      images: [
        {
          url: page.data.meta_image.url || ""
        }
      ]
    }
  }
}

export default async function Page({ params }: { params: Params }) {
  const page = await client.getByUID("page", params.uid).catch(() => notFound())

  return <SliceZone slices={page.data.slices} components={components} />
}

export async function generateStaticParams() {
  /**
   * Query all Documents from the API, except the homepage.
   */
  const pages = await client.getAllByType("page")

  /**
   * Define a path for every Document.
   */
  return pages.map((page) => {
    return { uid: page.uid }
  })
}
