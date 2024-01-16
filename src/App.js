import { saveAs } from 'file-saver';
import React, { useState } from 'react';

function MemeForm() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');

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
    const memeUrl = `https://memegen.link/${selectedTemplate}/${encodeURIComponent(
      topText,
    )}/${encodeURIComponent(bottomText)}.jpg`;

    saveAs(memeUrl, 'image.jpg');

    // // Create a temporary link element
    // const link = document.createElement('a');
    // link.href = memeUrl;
    // link.download = 'generated-meme.jpg';

    // // Append the link to the document
    // document.body.appendChild(link);

    // // Trigger a click on the link
    // link.click();

    // // Remove the link from the document
    // document.body.removeChild(link);
  };

  return (
    <div>
      <label htmlFor="top-text">Top text</label>
      <input
        type="text"
        id="top-text"
        value={topText}
        onChange={handleTopTextChange}
        placeholder="Enter top text"
      />

      <label htmlFor="bottom-text">Bottom text</label>
      <input
        type="text"
        id="bottom-text"
        value={bottomText}
        onChange={handleBottomTextChange}
        placeholder="Enter bottom text"
      />

      <label htmlFor="meme-template">Meme template</label>
      <input
        type="text"
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
        <button onClick={handleClick}>Dowload image</button>
      </div>
      {/* <button onClick={downloadMeme}>Download</button> */}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Meme Generator</h1>
      <MemeForm />
      {/* Other components and content */}
    </div>
  );
}
