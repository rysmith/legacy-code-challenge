var MyComponent = React.createClass ({
    render: function () {
        return (
            <div className="myComponent">
                hello world!
            </div>
        )
    }
});

React.render(
    <MyComponent/>,
    document.getElementById('content')
);

