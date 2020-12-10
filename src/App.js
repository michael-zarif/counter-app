import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ],
    //tags: [],
  };

  constructor(props) {
    super(props); // Calling the constructor of Parent Class
    console.log("App - Constructed", props); // Empty props Object
    //this.state = this.props.something; // Setting the state directly
  }

  componentDidMount() {
    // Ajax Call // this.setState({ server data })
    console.log("App - Mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, this.props);
    console.log(prevState, this.State);
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.counters.filter((c) => c.value !== 0).length
          }
        />
        <main className="container m-2">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
