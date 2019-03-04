import React, { Component } from 'react'
import api from '../../api';

export default class ProjectDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      project: null
    }
  }
  render() {
    if (!this.state.project) {
      return <div className="ProjectDetail">Loading...</div>
    }
    return (
      <div className="ProjectDetail">
        <h1>ProjectDetail</h1>
        <strong>Name</strong>: {this.state.project.name}<br/>
        <strong>Project Link</strong>: {this.state.projectlink}<br/>
        <strong>Technology Used</strong>: {this.state.project.technologyused}<br/>
        <strong>Description</strong>: {this.state.project.description}<br/>
        <strong>Project Submit Date</strong>: {this.state.project.date.slice(0,10)}<br/>
      </div>
    )
  }
  componentDidMount() {
    api.getProjectDetail(this.props.match.params.projectId)
      .then(project => {
        this.setState({
          project: project
        })
      })
      .catch(err => console.log(err))
  }
}