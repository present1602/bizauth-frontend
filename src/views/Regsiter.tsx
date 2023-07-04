import { useRegisterUserMutation } from '../features/auth/authApiSlice';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const initialState = {
  user_id: '',
  password: '',
  confirm_password: '',
  name: '',
  phone: '',
  email: '',
}

const Register = () => {
  const [formValues, setFormValues] = useState(initialState);
  const [errMsg, setErrMsg] = useState('')
  const navigate = useNavigate()

  const { user_id, password, confirm_password, name, phone, email } = formValues;

  const [registerUser] = useRegisterUserMutation()
  const handleSubmit = async () => {
    if (password != confirm_password) {
      setErrMsg('비밀번호가 일치하지 않습니다.')
    }
    if (user_id && password && name && phone) {
      const response: any = await registerUser({ user_id, password, name, phone, email })
      if (response.status === 200) {
        alert("회원가입을 완료했습니다.")
        navigate('/auth/login')
      }
    }
  }

  const handleChange = (e: any) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value, })
  }





  return (

    <div className="min-h-screen">
      <div className="py-40 px-5">
        <div className="flex flex-col lg:max-w-lg bg-white rounded-xl mx-auto border-2">
          <div className="w-full px-8 py-12">
            <h2 className="text-3xl mb-4 text-center">회원가입</h2>
            <p className="mb-4 text-center">
              회원가입 정보를 입력해주세요.
            </p>
            <form action="#">
              <div className="mt-7">
                <input type="text" placeholder="아이디" className="bg-[#F2F3F4] p-4 w-full rounded"
                  name="user_id"
                  onChange={handleChange}
                />
              </div>
              <div className="mt-7">
                <input type="password" placeholder="비밀번호" className="bg-[#F2F3F4] p-4 w-full rounded"
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <div className="mt-7">
                <input type="confirmed_password" placeholder="비밀번호확인" className="bg-[#F2F3F4] p-4 w-full rounded"
                  name="comfirmed_password"
                  onChange={handleChange}
                />
              </div>
              <div className="mt-7">
                <input type="text" placeholder="이름" className="bg-[#F2F3F4] p-4 w-full rounded"
                  name="name"
                  onChange={handleChange}
                />
              </div>
              <div className="mt-7">
                <input type="text" placeholder="휴대폰번호" className="bg-[#F2F3F4] p-4 w-full rounded"
                  name="phone"
                  onChange={handleChange}
                />
              </div>
              <div className="mt-7">
                <input type="text" placeholder="이메일(선택)" className="bg-[#F2F3F4] p-4 w-full rounded"
                  name="email"
                  onChange={handleChange}
                />
              </div>

              {errMsg ? <div className='text-xl my-5'>{errMsg}</div> : null}

              <div className="mt-8 text-left">
                <span className="m-1">
                  <input type="checkbox" className="border border-gray-400" />
                </span>
                <span>
                  캐칭의 <a href="#" className="text-[#20B486] font-semibold">이용약관과</a> &amp; <a href="#" className="text-[#20B486] font-semibold">개인정보취급방침에</a> 동의합니다.
                </span>
              </div>
              <div className="mt-10">
                <button className="w-full bg-[#20B486] py-4 text-center text-white text-xl"
                  onClick={handleSubmit}
                >가입하기</button>
              </div>


            </form>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Register;
