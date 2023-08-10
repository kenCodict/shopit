import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Layout } from '../../components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export const Account = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignup = (e) => {
      e.preventDefault();
      // Add your signup logic here
    };
  
    return (
        <Layout>
   
    <div className="flex flex-col items-center justify-center h-screen w-[400px]">
      <h2 className="text-3xl font-semibold mb-4">Sign Up</h2>
      <form className="w-[400px]" onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          className="mb-2 px-4 py-2 w-full rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-2 px-4 py-2 w-full rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
       
        <button className="bg-gray-800 text-white px-4 py-2 rounded-md" type="submit">
           Sign Up 
        </button>
      </form>
     <div className="flex flex-col items-center justify-center my-5">
     <button className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-md flex gap-2 items-center justify-center">
            <FaGoogle /> Sign Up with Google
        </button>
        <button className="mb-4 bg-blue-800 text-white px-4 py-2 rounded-md flex gap-2 items-center justify-center">
          <FaFacebook /> Sign Up with Facebook
        </button>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-md flex gap-2  items-center justify-center" type="submit">
          <FaGithub /> Sign Up with GitHub
        </button>
     </div>
      <p className="mt-4">
        Already have an account? <Link to="/sign-in" className="text-blue-500">Sign In</Link>
      </p>
    </div>
        </Layout>
    )
};

