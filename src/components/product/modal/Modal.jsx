import React from "react"
import { useDispatch, useSelector } from "react-redux"
import constants from "../../../redux/constants"
import style from "./Modal.module.css"

const Modal = () => {
  const show = useSelector((state) => state.docs.showExcelInfoModalVlad.show)
  const content = useSelector(
    (state) => state.docs.showExcelInfoModalVlad.content
  )
  const { username, first_name, last_name, phone, email } = content
  const dispatch = useDispatch()
  return (
    <div
      onClick={() => dispatch({ type: constants.CLOSE_MODAL })}
      className={`${style.modal} ${show && style.active}`}
    >
      <div
        className={`${style.modal__content} ${show && style.active}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.info_title}>
          <span>Компания :</span> {username ? username : "нет"}
        </div>
        <div className={style.info_title}>
          <span>Имя :</span> {first_name ? first_name : "нет"}
        </div>
        <div className={style.info_title}>
          <span>Фамилия :</span> {last_name ? last_name : "нет"}
        </div>
        <div className={style.info_title}>
          <span>Тел.:</span> {phone ? phone : "нет"}
        </div>
        <div className={style.info_title}>
          <span>email:</span> {email ? email : "нет"}
        </div>
      </div>
    </div>
  )
}

export default Modal
