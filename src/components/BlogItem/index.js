// Write your JS code here
import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class BlogItem extends Component {
  render() {
    const {eachBlog} = this.props
    const {id, title, imageUrl, avatarUrl, author, topic} = eachBlog
    const toPath = `/blogs/${id}`
    return (
      <Link to={toPath} className="link-item">
        <div className="each-Blog-container">
          <img className="img-container" src={imageUrl} />
          <div className="content-container">
            <p className="topic-css">{topic}</p>
            <h1 className="title-css">{title}</h1>
            <div className="author-details">
              <img src={avatarUrl} className="avatarUrl-css" />
              <p className="author-css">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default BlogItem
