import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
  state = {
    getFriends: [],
    friend: {
      name: "",
      age: "",
      email: ""
    }
  };

  componentDidMount() {
    this.getData();
  }

  handleChange = e => {
    // this is for form being rendered in return
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.postData();
  };

  getData = () => {
    axiosWithAuth()
      // this has the headers attached with it from axioswithauth
      .get("http://localhost:5000/api/friends")
      .then(response => {
        console.log("get friends response", response);
        this.setState({
          getFriends: response.data
        });
      })
      .catch(err => console.log("friends list error: ", err.response));
  };

  postData = () => {
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", this.state.friend)
      .then(response => {
        console.log("get friends response", response);
        this.setState({
          getFriends: response.data
        });
      })
      .catch(err => console.log("friends list error: ", err.response));
  };

  render() {
    return (
      <>
        <h1>My Friends List</h1>
        <div>
          {this.state.getFriends.length > 0
            ? this.state.getFriends.map(n => <p>{n.name}</p>)
            : null}
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.friend.name}
            onChange={this.handleChange}
          />
          <input
            type="age"
            name="age"
            placeholder="age"
            value={this.state.friend.age}
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="age"
            value={this.state.friend.email}
            onChange={this.handleChange}
          />
          <button type="submit">New Friend</button>
        </form>
      </>
    );
  }
}

export default FriendsList;
