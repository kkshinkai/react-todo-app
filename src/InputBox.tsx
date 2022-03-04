import React from "react";

export class InputBox extends React.Component<{
  addItem: (description: string) => void;
}, { text: string }> {
  constructor(props: { addItem: (description: string) => void }) {
    super(props);
    this.state = {
      text: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ text: event.target.value });
  }

  addItem() {
    this.props.addItem(this.state.text);
    this.setState({ text: "" });
  }

  render() {
    return (
      <div className="input-container">
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          className="input-box"
        />
        <button
          onClick={() => this.addItem()}
          className="input-button"
        >Add</button>
      </div>
    );
  }
}
