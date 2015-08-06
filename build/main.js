var MyComponent = React.createClass ({displayName: "MyComponent",
    getInitialState: function () {
        return {text: true}
    },
    handleButtonClick: function () {
        this.setState({text: !this.state.text})
    },
    render: function () {
        var showText = this.state.text ? 'visible' : 'hidden';
        return (
            React.createElement("div", {className: "myComponent"}, 
                React.createElement("span", null, this.props.text), React.createElement("br", null), 
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

