// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {blogData: [], isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    console.log(updatedData)
    this.setState({blogData: updatedData, isLoading: false})
  }

  render() {
    const {blogData} = this.state
    const {isLoading} = this.state

    return (
      <div>
        <ul className="blog-list-ul">
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
            </div>
          ) : (
            blogData.map(item => <BlogItem blogData={item} key={item.id} />)
          )}
        </ul>
      </div>
    )
  }
}

export default BlogList
