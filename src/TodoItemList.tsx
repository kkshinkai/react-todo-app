import React from "react";
import { TodoItem } from "./TodoItem";

export class TodoItemList extends React.Component<{
  items: { description: string; done: boolean }[];
  removeItem: (index: number) => void;
  checkItem: (index: number) => void;
}> {
  render() {
    return (
      <ul>
        {
          this.props.items.map((item, index) =>
            <TodoItem
              key={index} index={index} item={item}
              removeItem={i => this.props.removeItem(i)}
              checkItem={i => this.props.checkItem(i)}
            />
          )
        }
      </ul>
    );
  }
}
