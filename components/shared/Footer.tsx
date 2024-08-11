import { PrismicText } from "@prismicio/react"

import { client } from "@/prismicio"

import Bounded from "./Bounded"

const Footer = async () => {
  const settings = await client.getSingle("settings")

  return (
    <footer className="bg-white px-6 py-10 text-slate-500">
      <Bounded>
        <div className="mx-auto w-full max-w-5xl text-center text-xs">
          <PrismicText field={settings.data.site_title} /> &mdash; Powered by
          Prismic
        </div>
      </Bounded>
    </footer>
  )
}

export default Footer
