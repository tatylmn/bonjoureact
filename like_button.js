'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likes: 0 };
  }

  addLike = () => {
    let newCount = this.state.likes + 1;
      this.setState({
        likes: newCount
    });
  };

  render() {
    return (<button onClick={this.addLike}>Likes: {this.state.likes}</button>)
  } 
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(LikeButton, domContainer);