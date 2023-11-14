import {Component} from 'react'
import Header from '../Header'
import UserStories from '../UserStories'
import './index.css'
import UserPosts from '../UserPosts'
import SearchContext from '../../context/SearchContext'

class Home extends Component {
  render() {
    return (
      <SearchContext.Consumer>
        {value => {
          const {searchPosts} = value
          return (
            <>
              <Header />

              <div className="home-container">
                <UserStories />
                <UserPosts searchPosts={searchPosts} />
              </div>
            </>
          )
        }}
      </SearchContext.Consumer>
    )
  }
}
export default Home
