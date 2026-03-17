import { basicSetup, EditorView } from 'codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { css } from '@codemirror/lang-css';
import { color } from '../src';

const jsContainer = document.querySelector('.javascript-container');
const cssContainer = document.querySelector('.css-container');

new EditorView({
  doc: "console.log('#fff');\nconst pinkish = 'hsl(300, 76%, 72%)';",
  extensions: [basicSetup, javascript(), color],
  parent: jsContainer,
});

const CSS_DOCUMENT = `body {
  color: rgba(0, 0, 0, 1);
  background-color: white;
}`;
new EditorView({
  doc: CSS_DOCUMENT,
  extensions: [basicSetup, css(), color],
  parent: cssContainer,
});
