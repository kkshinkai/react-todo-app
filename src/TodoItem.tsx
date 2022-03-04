import React from "react";

export class TodoItem extends React.Component<{
  index: number;
  item: { description: string; done: boolean };
  removeItem: (index: number) => void;
  checkItem: (index: number) => void;
}> {
  render() {
    const { description, done } = this.props.item;
    return (
      <li key={this.props.index}>
        <input
          type="checkbox"
          checked={done}
          onClick={() => this.props.checkItem(this.props.index)}
        />
        { done ? <del>{description}</del> : description }
        <button onClick={() => this.props.removeItem(this.props.index)}>
          delete
        </button>
      </li>
    );
  }
}
