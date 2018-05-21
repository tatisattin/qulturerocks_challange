import React from "react";
import { render } from "react-dom";
import UserInfo from "./components/UserInfo";
import data from "./data";

class UserPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <UserInfo behavior={"default"} flag={"tags"} user={data} />;
  }
}

render(<UserPanel />, document.getElementById("root"));
