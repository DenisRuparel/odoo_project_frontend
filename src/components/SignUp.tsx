import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    skillsOffered: '',
    skillsWanted: ''
  });

  const [skillsOfferedList, setSkillsOfferedList] = useState<string[]>([]);
  const [skillsWantedList, setSkillsWantedList] = useState<string[]>([]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addSkill = (type: 'offered' | 'wanted') => {
    const skill = type === 'offered' ? formData.skillsOffered : formData.skillsWanted;
    if (skill.trim()) {
      if (type === 'offered') {
        setSkillsOfferedList(prev => [...prev, skill.trim()]);
        setFormData(prev => ({ ...prev, skillsOffered: '' }));
      } else {
        setSkillsWantedList(prev => [...prev, skill.trim()]);
        setFormData(prev => ({ ...prev, skillsWanted: '' }));
      }
    }
  };

  const removeSkill = (type: 'offered' | 'wanted', index: number) => {
    if (type === 'offered') {
      setSkillsOfferedList(prev => prev.filter((_, i) => i !== index));
    } else {
      setSkillsWantedList(prev => prev.filter((_, i) => i !== index));
    }
  };

  const handleSignUp = () => {
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    const userData = {
      ...formData,
      skillsOffered: skillsOfferedList,
      skillsWanted: skillsWantedList
    };
    
    console.log('Sign up data:', userData);
    alert('Account created successfully!');
    navigate('/signin');
  };

  const handleHome = () => {
    navigate('/');
  };

  const handleSignIn = () => {
    navigate('/signin');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 bg-white p-4 rounded-2xl border-2 border-indigo-200 shadow-sm">
          <h1 className="text-xl font-bold text-gray-900">Skill Swap Platform</h1>
          <Button 
            onClick={handleHome}
            variant="outline"
            className="border-2 border-indigo-300 rounded-full px-6 py-2 font-semibold text-sm hover:bg-indigo-50 text-indigo-700"
          >
            Home
          </Button>
        </div>

        {/* Sign Up Form */}
        <Card className="border-2 border-indigo-200 rounded-3xl bg-white shadow-xl">
          <CardContent className="p-8 space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Join Our Community</h2>
              <p className="text-gray-600">Create your account and start swapping skills</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">First Name</label>
                <Input
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="Enter your first name"
                  className="border-2 border-gray-300 rounded-xl h-12 text-base focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Last Name</label>
                <Input
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Enter your last name"
                  className="border-2 border-gray-300 rounded-xl h-12 text-base focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Enter your email"
                className="border-2 border-gray-300 rounded-xl h-12 text-base focus:border-indigo-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Password</label>
                <Input
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  placeholder="Create a password"
                  className="border-2 border-gray-300 rounded-xl h-12 text-base focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Confirm Password</label>
                <Input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  placeholder="Confirm your password"
                  className="border-2 border-gray-300 rounded-xl h-12 text-base focus:border-indigo-500"
                />
              </div>
            </div>

            {/* Skills Offered */}
            <div>
              <label className="block text-sm font-semibold text-green-700 mb-2">Skills You Can Offer</label>
              <div className="flex gap-2 mb-3">
                <Input
                  value={formData.skillsOffered}
                  onChange={(e) => handleInputChange('skillsOffered', e.target.value)}
                  placeholder="e.g., Web Development, Photography"
                  className="border-2 border-green-300 rounded-xl h-12 text-base focus:border-green-500 flex-1"
                  onKeyPress={(e) => e.key === 'Enter' && addSkill('offered')}
                />
                <Button 
                  onClick={() => addSkill('offered')}
                  className="bg-green-600 text-white hover:bg-green-700 rounded-xl px-4 h-12 font-semibold"
                >
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsOfferedList.map((skill, index) => (
                  <Badge 
                    key={index} 
                    className="bg-green-100 text-green-800 border border-green-300 rounded-full px-3 py-1 cursor-pointer hover:bg-green-200"
                    onClick={() => removeSkill('offered', index)}
                  >
                    {skill} ×
                  </Badge>
                ))}
              </div>
            </div>

            {/* Skills Wanted */}
            <div>
              <label className="block text-sm font-semibold text-blue-700 mb-2">Skills You Want to Learn</label>
              <div className="flex gap-2 mb-3">
                <Input
                  value={formData.skillsWanted}
                  onChange={(e) => handleInputChange('skillsWanted', e.target.value)}
                  placeholder="e.g., Graphic Design, Cooking"
                  className="border-2 border-blue-300 rounded-xl h-12 text-base focus:border-blue-500 flex-1"
                  onKeyPress={(e) => e.key === 'Enter' && addSkill('wanted')}
                />
                <Button 
                  onClick={() => addSkill('wanted')}
                  className="bg-blue-600 text-white hover:bg-blue-700 rounded-xl px-4 h-12 font-semibold"
                >
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsWantedList.map((skill, index) => (
                  <Badge 
                    key={index} 
                    className="bg-blue-100 text-blue-800 border border-blue-300 rounded-full px-3 py-1 cursor-pointer hover:bg-blue-200"
                    onClick={() => removeSkill('wanted', index)}
                  >
                    {skill} ×
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex justify-center pt-6">
              <Button 
                onClick={handleSignUp}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 border-0 rounded-full px-12 py-3 font-semibold text-base shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Create Account
              </Button>
            </div>

            <div className="text-center border-t border-gray-200 pt-6">
              <p className="text-gray-600 text-sm mb-3">Already have an account?</p>
              <Button 
                onClick={handleSignIn}
                variant="outline"
                className="border-2 border-indigo-300 rounded-xl px-6 py-2 font-semibold text-sm hover:bg-indigo-50 text-indigo-700"
              >
                Sign In
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default SignUp;
