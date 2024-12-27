// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, imageUrl, avatarUrl, topic, author} = blogData
  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <li className="blog-list-item">
        <div className="blog-container">
          <img className="image-url-el" src={imageUrl} alt={title} />
          <div className="blog-details-card">
            <p>{topic}</p>
            <h1>{title}</h1>
            <div className="blog-list-author">
              <img className="avatar-icon" src={avatarUrl} alt={author} />
              <p>{author}</p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
