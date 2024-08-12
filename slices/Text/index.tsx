import type { Content } from "@prismicio/client"
import { PrismicNextLink } from "@prismicio/next"
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps
} from "@prismicio/react"

const components: JSXMapSerializer = {
  heading3: ({ children }) => (
    <p className="text-sm font-semibold uppercase tracking-widest text-slate-300">
      {children}
    </p>
  ),
  heading1: ({ children }) => (
    <h2 className="text-4xl font-semibold text-slate-800">{children}</h2>
  ),
  hyperlink: ({ node, children }) => {
    return <PrismicNextLink field={node.data}>{children}</PrismicNextLink>
  },
  label: ({ node, children }) => {
    if (node.data.label === "codespan") {
      return <code>{children}</code>
    }
  },
  paragraph: ({ children }) => {
    return <p>{children}</p>
  }
}

/**
 * Props for `Text`.
 */
type TextProps = SliceComponentProps<Content.TextSlice>

/**
 * Component for "Text" Slices.
 */
const Text = ({ slice }: TextProps): JSX.Element => {
  return (
    <section className="bg-white px-6 py-28 text-slate-500 md:px-10">
      <div className="mx-auto grid w-full max-w-prose gap-6">
        <PrismicRichText field={slice.primary.text} components={components} />
      </div>
    </section>
  )
}

export default Text
