import React from 'react'
import Branch from './BranchItem.js'
import {Grid, Row} from 'react-bootstrap'

export default class Services extends React.Component {
  constructor () {
    super()
    this.state = {
      branchesArray: []
    }
    this.getBranchInfo = this.getBranchInfo.bind(this)
  }

  getBranchInfo () {
    const xhr = new XMLHttpRequest()
    xhr.addEventListener('load', (serverData) => {
      console.log("jfkldjflds");
      const branchesArray = JSON.parse(serverData.target.response).data
      this.setState({branchesArray})
    })
    xhr.open('GET', '/api/branch')
    xhr.send()
  }

  componentDidMount() {
    console.log('Mounted')
    this.getBranchInfo()
  }

  render () {
    console.log(this.state);
    return (
      <Grid>
      <Row>
      <ul>
        {this.state.branchesArray.map(function(branchObj, i){
          return (
            <Branch key={i} info={branchObj} />
          )
        })}
      </ul>
      </Row>
      </Grid>
    )
  }
}
