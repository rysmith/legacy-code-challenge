var MyComponent = React.createClass ({

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
            <div className="myComponent">

                <MyButton clickHandler={this.handleButtonClick}></MyButton>
                <span>{this.state.showText ? this.props.text : null}</span>

            </div>
        )
    }
});

var MyButton = React.createClass ({

    PropTypes: {
        clickHandler: React.PropTypes.func.isRequired
    },

    // on click call the property clickHandler, which calls handleButtonClick
    render: function () {
        return (
            <div className="myButton">
                <button onClick={this.props.clickHandler}>Click to Toggle Text</button>
            </div>

        )
    }
});

var text = "Hello, I am some text that should toggle on button click.";

React.render(
    <MyComponent text={text}/>,
    document.getElementById('content')
);

