function Login() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-96">
        <h1 className="text-3xl font-bold text-center text-blue-700">
          AssetFlow ERP
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Welcome Back
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full mt-8 border rounded-lg p-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mt-4 border rounded-lg p-3"
        />

        <button
          className="w-full bg-blue-600 text-white p-3 rounded-lg mt-6 hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;