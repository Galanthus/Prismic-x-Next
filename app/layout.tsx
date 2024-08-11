import "styles/main.css"

import { PrismicPreview } from "@prismicio/next"

import { repositoryName } from "@/prismicio"

export default function RootLayout({ children }: Readonly<Children>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  )
}
