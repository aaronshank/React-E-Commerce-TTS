import React from 'react'
import '../css/footer.css'

class Footer extends React.Component {
  render() {
    return (
      <nav className='fixed-bottom'>
        <div>
          <ul id='horizontal-list' className="footer">
            <li><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' rel='noreferrer'>About</a></li>
            <li><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' rel='noreferrer'>Safety Precautions</a></li>
            <li><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' rel='noreferrer'>Copyright</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Footer