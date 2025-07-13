import './App.css';
import UserExplorer from './component/UserExplorer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">
        React API Data Fetching Demo
      </h1>
      <UserExplorer />
    </div>
  );
}

export default App;
