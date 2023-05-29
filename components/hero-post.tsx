import Link from 'next/link'

type Props = {
  id: number,
  title: string
  content: string
  image: string
  is_publish: boolean
}

const HeroPost = ({
  id,
  title,
  content,
  image,
  is_publish
}: Props) => {
  return (
    <section>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              as={`/posts/${id}`}
              href="/posts/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{content}</p>
        </div>
      </div>
    </section>
  )
}

export default HeroPost