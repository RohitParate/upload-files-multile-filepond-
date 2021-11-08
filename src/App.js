import logo from './logo.svg';
import { FilePond, registerPlugin  } from 'react-filepond';
import { parse } from 'filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import './App.css';

registerPlugin(FilePondPluginImagePreview);

function App() {
  
  return (
    <div className="App">
      <FilePond allowMultiple={true} server="http://localhost:5000/upload"/>
    </div>
  );
}

export default App;
