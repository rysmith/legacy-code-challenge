var MyComponent = React.createClass ({displayName: "MyComponent",

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
                React.createElement("span", {className: "myComponent"}, this.props.text), React.createElement("br", null), 
                React.createElement(MyButton, null)
            )
        )
    }
});

var MyButton = React.createClass ({displayName: "MyButton",
    render: function () {
        return (
            React.createElement("button", {className: "myButton"}, "Click to Toggle Text")
        )
    }
});

var text = 'Here is some text that should show by default and hide on button click.';

React.render(
    React.createElement(MyComponent, {text: text}),
    document.getElementById('content')
);

