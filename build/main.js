var MyComponent = React.createClass ({displayName: "MyComponent",

    PropType: {
        text: React.PropTypes.string.isRequired
    },

    // initial state of showText has been set to true
    getInitialState: function () {
        return {showText: true}
    },

    // once the button is clicked, change the state of showText to the opposite of it's current value
    handleButtonClick: function () {
        this.setState({showText: !this.state.showText});
    },

    // render text and MyButton component
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("span", {className: "myComponent"}, this.state.showText ? this.props.text : null), React.createElement("br", null), 
                React.createElement(MyButton, {clickHandler: this.handleButtonClick})
            )
        )
    }
});

var MyButton = React.createClass ({displayName: "MyButton",

    PropTypes: {
        clickHandler: React.PropTypes.func.isRequired
    },

    // on click call the property clickHandler, which calls handleButtonClick
    render: function () {
        return (
            React.createElement("button", {className: "myButton", onClick: this.props.clickHandler}, "Click to Toggle Text")
        )
    }
});

var text = "Hello, I am some text that should toggle on button click.";

React.render(
    React.createElement(MyComponent, {text: text}),
    document.getElementById('content')
);

