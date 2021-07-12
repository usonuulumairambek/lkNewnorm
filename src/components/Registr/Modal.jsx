import React, { useState } from "react"
import style from "../product/modal/Modal.module.css"

const Modal = ({ children }) => {
  const [showModal, setShowModal] = useState(true)
  const closeShowModal = () => {
    setShowModal(false)
  }
  return (
    <div
      onClick={closeShowModal}
      className={`${style.modal} ${showModal && style.active}`}
    >
      <div
        className={`${style.modal__content} ${showModal && style.active}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <br />
        <button onClick={closeShowModal} className="btn btn-info float-right">
          OK
        </button>
      </div>
    </div>
  )
}

export default Modal
