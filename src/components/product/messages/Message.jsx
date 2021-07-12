import React from "react"
import { CardMedia, Typography } from "@material-ui/core"
import ExcelIcon from "../../../redux/uils/icons/excel.svg"
import style from "./Message.module.css"
import {
  getExcelFileTable,
  sendExcelFileTable,
  getFileInfo,
} from "../../../redux/actions/DocumentsActions/document"
import { useDispatch } from "react-redux"
import { logout } from "../../../redux/actions/getAndLogin"
import { NavLink } from "react-router-dom"
import Modal from "../modal/Modal"

export default function Message(props) {
  console.log(props)
  let dispatch = useDispatch()

  const handleSendExcelFile = (id, is_order) => {
    dispatch(sendExcelFileTable(id, is_order))
  }
  const handleGetTable = (id) => {
    dispatch(getExcelFileTable(id))
  }
  const handleGetInfo = (id) => {
    dispatch(getFileInfo(id))
  }

  return (
    <div className={style.container}>
      <Modal />
      <Typography variant="h5" component="h6">
        Мои документы
      </Typography>

      {(props.docsList || []).map((excel) => {
        let excel_date = excel.date_send
        let date = excel_date.slice(0, 10)
        let time = excel_date.slice(11, 16)

        if (excel.category === props.category) {
          return (
            <div className={style.flex} key={excel.id}>
              <div className={style.flex1}>
                <CardMedia
                  className={style.card_size}
                  type="file"
                  image={ExcelIcon}
                />

                <NavLink to={`/docs/my_doc/${excel.id}`}>
                  <button
                    className={style.card_footer}
                    onClick={() => handleGetTable(excel.id)}
                  >
                    open
                  </button>
                </NavLink>
                <button
                  className={style.card_footer}
                  onClick={() => handleSendExcelFile(excel.id, false)}
                >
                  Delete
                </button>
                <br />
                <button className={style.card_footer}>
                  <a href={`${excel.excel_file}`} download>
                    Скачать
                  </a>
                </button>
              </div>
              <div className={`${style.flex1} ${style.info}`}>
                <div>
                  <span className={style.file_name}>Имя файла: </span>
                  {excel.file_name}
                </div>
                <br />
                <div>
                  <span className={style.file_name}>Дата: </span>
                  {date}
                </div>
                <br />
                <div>
                  <span className={style.file_name}>Время: </span>
                  {time}
                </div>
                <br />
                <button
                  onClick={() => handleGetInfo(excel.user)}
                  className={style.btn_info}
                >
                  информация
                </button>
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}
