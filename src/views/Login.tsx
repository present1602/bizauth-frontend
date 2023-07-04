import { setCredentials } from '../features/auth/authSlice'
import { useLoginMutation } from '../features/auth/authApiSlice'
import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import ProtectedRoute from '../shared/route/ProtectedRoute'
import { useCookies } from 'react-cookie'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('')

  const [login, { isLoading, status }] = useLoginMutation()

  const [cookies, setCookie] = useCookies()

  const [] = useCookies(['refresh_token'])

  useEffect(() => {
    // userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [userId, password])

  const handleSubmit = async (e: any) => {
    // setFormValues({ ...formValues, [e.target.name]: e.target.value })
    e.preventDefault()
    try {
      const response: any = await login({ "user_id": userId, "password": password })
      const resData = response.data

      if (resData.token && resData.token?.access && resData.token?.refresh) {
        setCookie('access_token', resData.token.access, { path: '/' })
        setCookie('refresh_token', resData.token.refresh, { path: '/' })
        alert("로그인에 성공했습니다.")
      }

    } catch (err: any) {
      if (!err.status) {
        setErrMsg('서버로부터 응답에 실패했습니다.');
      } else if (err.status === 400) {
        setErrMsg('인증이 실패했습니다.');
      } else if (err.status === 401) {
        setErrMsg('인증이 실패했습니다.');
      } else {
        setErrMsg(err.data?.message);
      }
    }

  }


  if (isLoading) return <p>Loading...</p>

  return (

    <div className="min-h-screen">
      <div className="py-40 px-5">
        <div className="flex flex-col lg:max-w-lg bg-white rounded-xl mx-auto border-2 p-5">
          <div className="w-full px-8 py-12">
            {/* <ProtectedRoute /> */}
            <div>access token: {cookies.accessToken}</div>

            <h2 className="text-3xl mb-4 text-center">로그인</h2>
            <p className="mb-4 text-center">
              아이디와 비밀번호를 입력해주세요
            </p>
            <form action="#">
              <div className="mt-8">
                <input type="text" placeholder="아이디" className="border border-gray-400 py-4 px-2 w-full"
                  name="user_id"
                  value={userId}
                  onChange={(e: any) => {
                    setUserId(e.target.value)
                  }}
                />
              </div>
              <div className="mt-8">
                <input type="password" placeholder="비밀번호" className="border border-gray-400 py-4 px-2 w-full"
                  name="password"
                  value={password}
                  onChange={(e: any) => {
                    setPassword(e.target.value)
                  }}
                />
              </div>
              {errMsg ? <div className='text-xl my-5'>{errMsg}</div> : null}
              <div className="mt-8">
                <button className="w-full bg-[#20B486] py-5 text-center text-white"
                  onClick={handleSubmit}
                >로그인
                </button>
              </div>
            </form>

            <div className='my-5'>
              이미 계정이 있으신가요?
              <span onClick={() => navigate('/auth/register')}
                className='px-2 cursor-poin'
              >회원가입</span>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}

export default Login;