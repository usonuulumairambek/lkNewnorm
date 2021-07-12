import React, { useState, useEffect } from 'react'
// import { toast, ToastContainer } from 'react-toastify'
import './Activate.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { activateAccount } from '../../redux/actions'

const Activate = () => {
  const { token: tokenParam } = useParams()
  const dispatch = useDispatch()
  const successActive = useSelector(({ data }) => data.activate.success)

  const [values, setValues] = useState({
    name: '',
    token: '',
    show: true,
  })

  useEffect(() => {
    setValues({ ...values, token: tokenParam })
  }, [])

  const { token } = values
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(token)
    dispatch(activateAccount(token))
    // .then((res) => {
    //   toast[res.data ? 'error' : 'success'](`${res.data ? res.data.error : res.message}`, {
    //     position: 'top-right',
    //     autoClose: 4000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   })
    // })
  }

  return (
    <div className='row'>
      {/* <ToastContainer
        position='top-right'
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
      <div className='col-md-6 text-center'>
        <h1 className='my-2 text-uppercase font-weight-bold'>Нажмите на кнопку, чтобы Активировать аккаунт!</h1>
        {!successActive ? (
          <button
            className='btn'
            style={{ backgroundColor: '#3f51b5', color: '#fff' }}
            onClick={handleSubmit}>
            Активировать аккаунт
          </button>
        ) : (
          <p>
            Акаунт активирован!  <a href='http://lk.norma.kg/login'> <button
            className='btn'
            style={{ backgroundColor: '#3f51b5', color: '#fff' }}
            >
            войдите
          </button></a>
          </p>
        )}
      </div>
    </div>
  )
}

export default Activate
