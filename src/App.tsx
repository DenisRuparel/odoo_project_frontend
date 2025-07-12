import { Routes, Route } from 'react-router-dom';
import SkillSwapPlatform from './components/SkillSwapPlatform';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SkillSwapPlatform />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
