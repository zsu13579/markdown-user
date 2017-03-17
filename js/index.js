'use strict';

var MarkDown = React.createClass({
  displayName: 'MarkDown',

  getInitialState: function getInitialState() {
    return { value: 'Hello' };
  },

  handleChange: function handleChange(event) {
    this.setState({ value: marked(event.target.value) });
  },
  render: function render() {
    var value = this.state.value;
    return React.createElement(
      'div',
      null,
      React.createElement('textarea', { onChange: this.handleChange }),
      React.createElement('div', { id: 'preview', dangerouslySetInnerHTML: { __html: value } })
    );
  }

});

ReactDOM.render(React.createElement(MarkDown, null), document.getElementById('mainContainer'));