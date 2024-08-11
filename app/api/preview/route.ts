import { NextRequest } from "next/server"

import { redirectToPreviewURL } from "@prismicio/next"

import { client } from "@/lib/prismic"

/**
 * This endpoint handles previews that are launched from the Page Builder.
 */
export async function GET(request: NextRequest) {
  return await redirectToPreviewURL({ client, request })
}
