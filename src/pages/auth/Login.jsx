import React from 'react';
import FormInput from "../../components/form/FormInput";

function Login() {
  return (
    <div className="flex w-full h-full justify-end">
      {/* Card */}
      <div className="border w-64 h-[300px] p-4 m-4 rounded-md border-gray-500">
        <h1 className="font-bold text-center ">Login</h1>

        {/* Form */}
        <form>
          <div className="flex flex-col gap-4 mt-2">

          <FormInput name="email" />
          <FormInput name="password" />

          </div>

          <div className="flex justify-center mt-4">
            <button className="bg-black text-white p-2 rounded-md">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;