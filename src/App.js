import logo from './logo.svg';
import './App.css';
import './style.css';
import './scriipt.js';
import './script.js';
// link
// import 'https://fonts.googleapis.com';
// import 'https://fonts.gstatic.com';
// import 'https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap';

function App() {
  return (
    <>
      <div class="wrapper">
        <header>
          <h1>Pixel Art Studio</h1>
          <p> ⊳ Make your own single-div pixel art with CSS.</p>
          <p>
            Follow me ⊳
            <a href="https://twitter.com/oWHITEoDEMONo" target="_blank">@ANURAG JAMANKAR</a> ◑.◑
          </p>
        </header>
        <div class="controls">
          <label for="colorPicker">Color picker</label>
          <input type="color" id="colorPicker" />
          <label for="cellSize">Columns</label>
          <input type="range" min="10" max="60" id="columns" step="10" value="30" />
          <button data-undo>Undo</button>
          <button data-clear>Clear</button>
          <button data-save>Save</button>
        </div>
        <div class="canvas">
		      <div class="draw-area">
			      <div class="marker"></div>
		      </div>
	      </div>
        <div class="css">
		      <label for="css">CSS:</label>
		      <textarea name="cssCode" id="css" rows="10"></textarea>
		      <button data-copy>Copy to clipboard</button>
	      </div>
      </div>
    </>
  );
}

export default App;
