import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-gray-50'>
            {/* Login Form  */}
            <div className="login_Form bg-white px-1 lg:px-8 py-6 border border-gray-200 rounded-xl shadow-md">

                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-gray-800 '>
                        Login
                    </h2>
                </div>

                {/* Email Input */}
                <div className="mb-3">
                    <input
                        type="email"
                        placeholder='Email Address'
                        className='bg-white border border-gray-300 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-400 focus:border-gray-400'
                    />
                </div>

                {/* Password Input */}
                <div className="mb-5">
                    <input
                        type="password"
                        placeholder='Password'
                        className='bg-white border border-gray-300 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-400 focus:border-gray-400'
                    />
                </div>

                {/* Login Button */}
                <div className="mb-5">
                    <button
                        type='button'
                        className='bg-gray-800 hover:bg-gray-900 w-full text-white text-center py-2 font-bold rounded-md transition-colors'
                    >
                        Login
                    </button>
                </div>

                <div>
                    <h2 className='text-gray-600'>Don't Have an account <Link className='text-gray-800 font-bold hover:text-gray-900' to={'/signup'}>Signup</Link></h2>
                </div>

            </div>
        </div>
    );
}

export default Login;