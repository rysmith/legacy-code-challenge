var MyComponent = React.createClass ({

    // initial state of showText has been set to true
    getInitialState: function () {
        return {showText: true}
    },

    // once the button is clicked, change the state of showText to the opposite of it's current value
    handleButtonClick: function () {
        this.setState({showText: !this.state.showText})
    },

    // render text and MyButton component
    render: function () {
        return (
            <span className="myComponent">{this.props.text}</span><br/>
            <MyButton></MyButton>
        )
    }
});

var MyButton = React.createClass ({
    render: function () {
        return (
            <button className="myButton">Click to Toggle Text</button>
        )
    }
});

var text = 'Here is some text that should show by default and hide on button click.';

React.render(
    <MyComponent text={text}/>,
    document.getElementById('content')
);

