import ReactMarkdown from 'react-markdown'

export default function Markdown({ children }: { children: string }) {
  if (typeof children !== 'string') return null
  return (
    <article className="prose">
      <ReactMarkdown>{children}</ReactMarkdown>
    </article>
  )
}
