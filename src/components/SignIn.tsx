import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Here you would typically handle authentication
    console.log('Login attempt:', { email, password });
    navigate('/');
  };

  const handleHome = () => {
    navigate('/');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleForgotPassword = () => {
    alert('Forgot password functionality would be implemented here');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 bg-white p-4 rounded-2xl border-2 border-gray-900 shadow-sm">
          <h1 className="text-xl font-bold text-gray-900">Skill Swap Platform</h1>
          <Button 
            onClick={handleHome}
            variant="outline"
            className="border-2 border-gray-900 rounded-full px-6 py-2 font-semibold text-sm hover:bg-gray-100"
          >
            Home
          </Button>
        </div>

        {/* Sign In Form */}
        <Card className="border-2 border-gray-900 rounded-3xl bg-white shadow-lg">
          <CardContent className="p-8 space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h2>
              <p className="text-gray-600">Sign in to your account</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="border-2 border-gray-900 rounded-xl h-12 text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Password</label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="border-2 border-gray-900 rounded-xl h-12 text-base"
                />
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <Button 
                onClick={handleLogin}
                className="bg-blue-600 text-white hover:bg-blue-700 border-2 border-blue-600 rounded-full px-8 py-3 font-semibold text-base min-w-24"
              >
                Login
              </Button>
            </div>

            <div className="text-center">
              <button 
                onClick={handleForgotPassword}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium underline"
              >
                Forgot username/password
              </button>
            </div>

            <div className="text-center border-t border-gray-200 pt-6">
              <p className="text-gray-600 text-sm mb-3">Don&apos;t have an account?</p>
              <Button 
                onClick={handleSignUp}
                variant="outline"
                className="border-2 border-gray-900 rounded-xl px-6 py-2 font-semibold text-sm hover:bg-gray-100"
              >
                Sign Up
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default SignIn;
