import { Routes, Route } from 'react-router-dom';
import SkillSwapPlatform from './components/SkillSwapPlatform';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SkillSwapPlatform />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
