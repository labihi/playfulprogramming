import { createRoot } from 'react-dom/client';

const File = () => {
  return (
    <div>
      <a href="/file/file_one">
        File one<span>12/03/21</span>
      </a>
    </div>
  );
};

const FileList = () => {
  return (
    <ul>
      <li>
        <File />
      </li>
      <li>
        <File />
      </li>
      <li>
        <File />
      </li>
    </ul>
  );
};
createRoot(document.getElementById('root')).render(<FileList />);
