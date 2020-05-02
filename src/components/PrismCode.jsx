import React, { Component } from "react";
import Prism from "prismjs";
import "../assets/css/prism.css";
// //import "./prism";

import darkTheme from "prism-react-renderer/themes/duotoneDark";

import Highlight, { defaultProps } from "prism-react-renderer";

class PrismCode extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  componentDidMount() {
    // this.highlight();
  }
  componentDidUpdate() {
    // this.highlight();
  }
  highlight = () => {
    if (this.ref && this.ref.current) {
      console.log("Hello");
      // Prism.highlightElement(this.ref.current);
    }
  };
  // This code is under the supervision of Piyush sir.
  render() {
    return (
      <>
        <Highlight
          {...defaultProps}
          code={this.props.code}
          language={this.props.language}
          theme={darkTheme}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`language-${this.props.language}`}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </>
    );
  }
}

// render() {
//   const { code, plugins, language } = this.props;
//   return (

//     <Highlight {...defaultProps} code={exampleCode} language="jsx" >

//     <pre className={!plugins ? "" : plugins.join(" ")}>
//       <code ref={this.ref} className={`language-${language}`}>
//         {code}
//       </code>
//     </pre>
//   );

export default PrismCode;
