// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      content: data.content,

      author: data.author,
    }
    console.log(data)
    this.setState({blogData: updatedData, isLoading: false})
  }

  renderGetBlogData = () => {
    const {blogData} = this.state
    const {title, imageUrl, author, content, avatarUrl} = blogData

    return (
      <div className="blg-details-card">
        <h2 className="title-card">{title}</h2>
        <div className="author-info">
          <img className="avatar-icons" src={avatarUrl} alt={author} />
          <p>{author}</p>
        </div>
        <div className="content-info">
          <img className="image-url-card" src={imageUrl} alt={title} />
          <p className="content">{content}</p>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="blog-items-details">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderGetBlogData()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
