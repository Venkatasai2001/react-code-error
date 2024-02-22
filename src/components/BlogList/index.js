// Write your JS code here
import {Component} from 'react'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {
    blogsList: [],
    isLoaderDisplay: true,
  }

  componentDidMount() {
    this.getDataFromUrl()
  }

  getDataFromUrl = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const convertedCamelCaseList = data.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      content: each.content,
      topic: each.topic,
    }))

    this.setState({blogsList: convertedCamelCaseList})
  }

  render() {
    const {blogsList} = this.state
    console.log(blogsList)
    return (
      <>
        <div className="blogsList-container">
          {blogsList.map(eachBlog => (
            <BlogItem key={eachBlog.id} eachBlog={eachBlog} />
          ))}
        </div>
      </>
    )
  }
}

export default BlogList
