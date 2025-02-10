import ReactMarkdown from 'react-markdown'

import remarkGfm from 'remark-gfm'

export default function Markdown({ children }: { children: string }) {
  if (typeof children !== 'string') return null
  return (
    <article className="prose mx-auto">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </article>
  )
}
