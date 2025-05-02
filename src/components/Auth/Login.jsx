import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await handleLogin(email, password)
    } catch (err) {
      setError('Invalid email or password')
    }
    setLoading(false)
    setEmail('')
    setPassword('')
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-900">
      <div className="border-2 rounded-xl border-emerald-600 p-10 bg-gray-800 shadow-lg w-96">
        <form onSubmit={submitHandler} className="flex flex-col items-center justify-center">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400 mb-4 w-full"
            type="email"
            placeholder="Enter your email"
            aria-label="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400 mb-4 w-full"
            type="password"
            placeholder="Enter password"
            aria-label="Password"
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            disabled={loading}
            className={`mt-3 text-white border-none outline-none font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-emerald-700'
            }`}
            type="submit"
          >
            {loading ? 'Logging in...' : 'Log in'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
