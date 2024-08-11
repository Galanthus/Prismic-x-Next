import Link from "next/link"

import { PrismicNextLink } from "@prismicio/next"
import { PrismicText } from "@prismicio/react"

import { client } from "@/prismicio"

import Bounded from "./Bounded"

const Header = async () => {
  const settings = await client.getSingle("settings")

  return (
    <header className="bg-slate-900 p-6 text-slate-300 md:px-10">
      <Bounded>
        <div className="flex flex-col items-baseline gap-4 md:flex-row">
          <Link href="/" className="shrink-0 text-2xl font-medium text-white">
            <PrismicText field={settings.data.site_title} />
          </Link>
          <nav className="grow">
            <ul className="flex flex-wrap gap-x-6 gap-y-4 md:justify-end md:gap-x-12">
              {settings.data.navigation.map((item: any) => (
                <li key={item.label}>
                  <PrismicNextLink field={item.link}>
                    {item.label}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Bounded>
    </header>
  )
}

export default Header
