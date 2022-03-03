import React from "react";
import { TodoItemList } from "./TodoItemList";

export class App extends React.Component<
  {},
  { items: { description: string; done: boolean }[] }
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      items: [
        { description: "Learn React", done: false },
        { description: "Learn JavaScript", done: true },
        { description: "Learn TypeScript", done: false },
      ]
    }
  }

  render() {
    return (
      <TodoItemList
        items={this.state.items}
        removeItem={index => this.removeItem(index)}
        checkItem={index => this.checkItem(index)}
      />
    );
  }

  removeItem(index: number) {
    let items = this.state.items.slice();
    items.splice(index, 1);
    this.setState({ items });
  }

  checkItem(index: number) {
    let items = this.state.items.slice();
    items[index].done = !items[index].done;
    this.setState({ items });
  }
}
