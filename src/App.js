import { saveAs } from 'file-saver';
import React, { useState } from 'react';

// Defining the MemeForm component
function MemeForm() {
  // Setting up state variables for topText, bottomText, and selectedTemplate
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('buzz');
  // const defaultPic =
  // const memePic =

  // Event handler to update the states based on user input
  function handleTopTextChange(event) {
    setTopText(event.target.value);
  }

  function handleBottomTextChange(event) {
    setBottomText(event.target.value);
  }

  function handleTemplateChange(event) {
    setSelectedTemplate(event.target.value);
  }

  // Event handler for the "Download image" button click
  const handleClick = () => {
    // Invoking the saveAs function with the meme URL to trigger the download
    saveAs(
      `https://api.memegen.link/images/${selectedTemplate}/${encodeURIComponent(
        topText,
      )}/${encodeURIComponent(bottomText)}.jpg`,
    );
  };

  // Rendering the MemeForm component
  return (
    <div>
      {/* Input for input boxes with associated label */}
      <label htmlFor="top-text">Top text</label>
      <input
        id="top-text"
        value={topText}
        onChange={handleTopTextChange}
        placeholder="Enter top text"
      />

      <label htmlFor="bottom-text">Bottom text</label>
      <input
        id="bottom-text"
        value={bottomText}
        onChange={handleBottomTextChange}
        placeholder="Enter bottom text"
      />

      <label htmlFor="meme-template">Meme template</label>
      <input
        id="meme-template"
        value={selectedTemplate}
        onChange={handleTemplateChange}
        placeholder="Enter meme template"
      />

      {/* Image element displaying the generated meme */}
      <img
        id="meme-image"
        data-test-id="meme-image"
        src={`https://api.memegen.link/images/${selectedTemplate}/${encodeURIComponent(
          topText,
        )}/${encodeURIComponent(bottomText)}.jpg`}
        alt="Generated Meme"
      />

      {/* Button to trigger the download */}
      <div className="App">
        <button onClick={handleClick}>Download image</button>
      </div>
    </div>
  );
}

// Exporting the App component
export default function App() {
  return (
    <div>
      <h1>Meme Generator</h1>
      <MemeForm />
    </div>
  );
}
