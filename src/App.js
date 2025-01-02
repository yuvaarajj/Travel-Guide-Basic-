import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './App.css'

// Replace your code here

class App extends Component {
  state = {modifiedRes: [], isLoading: false}

  componentDidMount() {
    this.runningApi()
  }

  runningApi = async () => {
    this.setState({
      isLoading: true,
    })

    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: `GET`,
    }
    const firstRes = await fetch(url, options)
    const secRes = await firstRes.json()
    const newData = secRes.packages.map(each => ({
      id: each.id,
      namee: each.name,
      imageUrl: each.image_url,
      description: each.description,
    }))
    this.setState({
      modifiedRes: newData,
      isLoading: false,
    })
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderData = () => {
    const {modifiedRes} = this.state
    return (
      <div>
        <h1>Travel Guide</h1>
        <ul>
          {modifiedRes.map(eeee => (
            <li key={eeee.id}>
              <img alt={eeee.namee} src={eeee.imageUrl} />
              <h1>{eeee.namee}</h1>
              <p>{eeee.description}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return isLoading ? this.renderLoader() : this.renderData()
  }
}

export default App
