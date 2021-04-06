import logo from './logo.svg';
import './App.css';
import QuillEditor from "./QuillEditor"
import axios from 'axios';




function App() {



  const onEditorChange = (value) => {
    console.log(value)
  }
  
  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
    <div style={{ textAlign: 'center' }}>
    </div>
    <QuillEditor
        placeholder={"Write Here"}
        onEditorChange={onEditorChange}


    />

 
</div>
  );
}

export default App;
