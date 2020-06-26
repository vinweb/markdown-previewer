import React from 'react';
import marked from 'marked';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: `# Header 1
## Header 2
Link: [links](https://www.freecodecamp.com)
Inline code: \`<p></p>\`.
\`\`\`
// multi-line code:
const one = 1;
const two = 2;
\`\`\`
- One
- Two
- Three

> Blockquote

**Bold text**

![React Logo](https://img.icons8.com/bubbles/100/000000/react.png)`
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      breaks: true
    });
    const markdown = marked(this.state.text);
    return (
      <div className="container-fluid">
        <div className="row text-center bg-dark">
          <div className="col">
            <h1 className="my-4 text-light">React Markdown Previewer</h1>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm">
            <div className="form-group">
              <h1 className="display-4 mb-4">Editor</h1>
              <textarea
                className="form-control"
                id="editor"
                rows="22"
                onChange={this.handleChange}
              >
                {this.state.text}
              </textarea>
            </div>
          </div>
          <div className="col-sm">
            <h1 className="display-4">Preview</h1>
            <hr className="my-4" />
            <div
              dangerouslySetInnerHTML={{ __html: markdown }}
              id="preview"
            ></div>
          </div>
        </div>
        <div className="row my-5 text-center">
          <div className="col">
            Coded by <a href="http://www.vinweb.hu">Janos Vincze</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
