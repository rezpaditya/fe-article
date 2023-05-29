
import Link from 'next/link'

type Props = {
  id: number
  title: string
  content: string
}

const PostPreview = ({
  id,
  title,
  content,
}: Props) => {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/articles/${id}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <p className="text-lg leading-relaxed mb-4">{content}</p>
    </div>
  )
}

export default PostPreview