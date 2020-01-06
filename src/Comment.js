//your code here
import React, { Component } from 'react';

class Comment extends Component {
  
    // Nothing needs to change here! 
    // Make note of what prop we are initially passing to `ColorBox` below!
    
    render() {
      return (
        <div className="comment">{this.props.commentText}</div>
      )
    }
  }

  export default Comment;