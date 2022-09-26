import './App.css';
import { Routes, Route, Navigate} from "react-router-dom";
import UserRegistration from './UserRegistration';

function App() {
  return (
	<div className="container">    
		<Routes>
			<Route path="/" element={<Navigate to="/user-registration" replace />} />
			<Route path="user-registration" element={ <UserRegistration /> } />
		</Routes>
	</div>

  );
}

export default App;
