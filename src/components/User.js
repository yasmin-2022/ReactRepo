import React from "react";
class UserClass extends React.Component { 
  constructor(props) {
    super(props);
    this.state ={
      count:0,
    }
  }
  render () {
    return (
      <div>
        <h2>Name: Yasmin</h2>
        <h2>{this.state.count}</h2>
        <button onClick={() => {
          this.setState({
            count:this.state.count+1
          })
        }}>click</button>

        <h2>Name: {this.props.data}</h2>
        <h2>Name: {this.props.location}</h2>
        <h3>Location : Kolkata</h3>
        <h3>Email : parveenyasmin390@gamil.com</h3>
      </div>
    )
  }
}
export default UserClass;
