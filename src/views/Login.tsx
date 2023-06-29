

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const initialState = {
  userId: '',
  password: '',
  confirmedPassword: '',
  name: '',
  phone: '',
}

const Login = () => {
  const [formValues, setFormValues] = useState(initialState);

  const [showRegister, setShowRegister] = useState(false);

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');



  const handleSubmit = (e: any) => {

    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  return (

    <div className="min-h-screen">
      <div className="py-40 px-5">
        <div className="flex flex-col lg:max-w-lg bg-white rounded-xl mx-auto shadow-lg">
          <div className="w-full px-8 py-12">
            <h2 className="text-3xl mb-4 text-center">로그인</h2>
            <p className="mb-4 text-center">
              아이디와 비밀번호를 입력해주세요
            </p>
            <form action="#">
              <div className="mt-8">
                <input type="text" placeholder="아이디" className="border border-gray-400 py-4 px-2 w-full"
                  name="user_id"
                  value={userId}
                  onChange={() => { }}
                />
              </div>
              <div className="mt-8">
                <input type="password" placeholder="비밀번호" className="border border-gray-400 py-4 px-2 w-full"
                  name="password"
                  value={password}
                  onChange={() => { }}
                />
              </div>
              <div className="mt-8">
                <button className="w-full bg-[#20B486] py-5 text-center text-white">로그인</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Login;