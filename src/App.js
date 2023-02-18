import { useState } from 'react';
import './App.css';
import FileUpload from './components/FileUpload';
import FileList from './components/FileList';

function App() {
  const [files, setFiles] = useState([])

 const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))

 }

  return (
    <div className="App">
      <p className="title">Upload your file</p>
      <FileUpload files={files} setFiles={setFiles} removeFile={removeFile}/>
      <FileList  files={files} removeFile={removeFile} />
    </div>
  );
}

export default App;
