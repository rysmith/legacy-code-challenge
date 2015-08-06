var MyComponent = React.createClass ({displayName: "MyComponent",
    render: function () {
        return (
            React.createElement("div", {className: "myComponent"}, 
                "hello world!"
            )
        )
    }
});

React.render(
    React.createElement(MyComponent, null),
    document.getElementById('content')
);

