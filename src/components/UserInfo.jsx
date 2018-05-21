import React from "react";

export default class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      behavior: "default",
      flag: ""
    };
  }

  componentDidMount() {
    if (this.props.behavior) {
      this.setState({ behavior: this.props.behavior });
    }

    if (this.props.flag) {
      this.setState({ flag: this.props.flag });
    }
  }

  getDataFrom(data) {
    if (data) {
      const elementsList = data.map(item => <li>{item.name}</li>);
      return elementsList.slice(0, 2);
    }
  }

  render() {
    if (this.state.behavior === "small") {
      return <h2>{this.state.user.name}</h2>;
    } else if (this.state.behavior === "picture-only") {
      return (
        <img alt={this.state.user.name} src={this.state.user.picture_url} />
      );
    }

    const componentElements = {
      teams: <ul>{this.getDataFrom(this.state.user.teams)}</ul>,
      tags: <ul>{this.getDataFrom(this.state.user.tags)}</ul>,
      email: <a href="mailto:{this.user.email}">{this.state.user.email}</a>
    };

    let info;
    if (this.state.flag && this.state.user[this.state.flag]) {
      info = componentElements[this.state.flag];
    } else {
      if (this.state.user.teams) {
        info = componentElements.teams;
      } else if (this.state.user.tags) {
        info = componentElements.tags;
      } else {
        info = componentElements.email;
      }
    }

    return (
      <div>
        <img
          width="50px"
          alt={this.state.user.name}
          src={this.state.user.picture_url}
        />

        <h2>{this.state.user.name}</h2>
        <small>{this.state.user.custom_message}</small>

        {info}
      </div>
    );
  }
}
