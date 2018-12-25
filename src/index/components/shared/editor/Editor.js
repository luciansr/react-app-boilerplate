import React, {Component} from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/mode/html';
import 'brace/mode/json';
import 'brace/theme/dracula';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
        code: this.props.code? this.props.code :  '// type your code...'
    }
  }
  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange(newValue, e) {
    console.log('change',newValue);
  }
  render() {
    // const code = this.state.code;
    // const options = {
    //   selectOnLineNumbers: true
    // };

    return (
      <AceEditor
        mode={this.props.language}
        theme="dracula"
        onChange={this.onChange}
        defaultValue={this.props.code}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{$blockScrolling: true}}
      />
    );
  }
}

export default Editor;