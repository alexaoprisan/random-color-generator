import { saveAs } from 'file-saver';
import React, { useState } from 'react';

function MemeForm() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('doge');

  function handleTopTextChange(event) {
    setTopText(event.target.value);
  }

  function handleBottomTextChange(event) {
    setBottomText(event.target.value);
  }

  function handleTemplateChange(event) {
    setSelectedTemplate(event.target.value);
  }

  const handleClick = () => {
    saveAs(
      `https://api.memegen.link/${selectedTemplate}/${encodeURIComponent(
        topText,
      )}/${encodeURIComponent(bottomText)}.jpg`,
    );
  };

  return (
    <div>
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

      <img
        id="meme-image"
        data-test-id="meme-image"
        src={`https://memegen.link/${selectedTemplate}/${encodeURIComponent(
          topText,
        )}/${encodeURIComponent(bottomText)}.jpg`}
        alt="Generated Meme"
      />
      <div className="App">
        <button onClick={handleClick}>Download image</button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Meme Generator</h1>
      <MemeForm />
    </div>
  );
}
