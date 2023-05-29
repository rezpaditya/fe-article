import type Author from './author'

type PostType = {
  id: number
  title: string
  image: string
  author: Author
  content: string
}

export default PostType