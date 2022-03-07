import React from 'react'

const GENERIC_REVIEW_NAME = 'John Doe'
const GENERIC_REVIEW_MESSAGE = 'Review'

class Review extends React.Component {
  constructor( props ) {
    super( props )
    this.reviewNameContent = React.createRef()
    this.reviewBodyContent = React.createRef()
    this.state = {
      reviewName: GENERIC_REVIEW_NAME,
      message: GENERIC_REVIEW_MESSAGE,
      editMode: false
    }
  }

  handleEdit() {
    this.setState( {
      ediMode: true
    } )
  }

  handleSave() {
    this.setState( {
      reviewName: this.reviewNameContent.current.value,
      reviewBodyContent: this.reviewBodyContent.current.value,
      editMode: false
    } )
  }

  render() {
    return (
      <div>
        <h5>RC: Here Be Reviews</h5>
      </div>
    )
  }
}

export default Review