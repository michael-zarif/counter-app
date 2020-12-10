import React, { Component } from "react";

class Counter extends Component {
  /*styles = {
    fontSize: 20,
    fontWeight: "Tahoma",
  };*/

  constructor(props) {
    super(props);
    console.log("Counter - Constructed", props);
  }

  componentDidMount() {
    console.log("Counter - Mounted");
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps, this.props);
    prevProps.counter.value !== this.props.counter.value
      ? console.log("Counter Changed") // Ajax call & get new data from server
      : console.log("Counter not Changed");
  }

  componentWillUnmount(prevProps) {
    console.log("Component Unmount", prevProps, this.props);
  }

  render() {
    console.log("Counter - Rendered");
    const { counter, onIncrement, onDelete } = this.props; // Object Destructuring
    return (
      <div>
        {/*{this.props.children}*/}
        <span style={{ fontSize: 15 }} className={this.getBadgeClass()}>
          {this.formatValue()}
        </span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => onIncrement(counter)}>
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => onDelete(counter.id)}>
          Delete
        </button>
        {/*{!counter.tags.length && <p>Please add a new tag!</p>}*/}
        {/*<ul>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
          </ul>*/}
      </div>
    );
  }

  getBadgeClass = () =>
    "badge m-2 badge-" +
    (this.props.counter.value === 0 ? "warning" : "primary");

  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
