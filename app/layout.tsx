import "styles/main.css"

import { PrismicPreview } from "@prismicio/next"

import { repositoryName } from "@/prismicio"

import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"

export default function RootLayout({ children }: Readonly<Children>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  )
}
