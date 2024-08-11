import "styles/main.css"

import { PrismicPreview } from "@prismicio/next"

import { repositoryName } from "@/prismicio"

export default function RootLayout({ children }: Readonly<Children>) {
  return (
    <html lang="en">
      <body className="bg-white">{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  )
}
