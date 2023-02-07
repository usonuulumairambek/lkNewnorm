import React from "react"
import { CardMedia, Typography } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import "./index.css"
import ExcelIcon from "../../redux/uils/icons/excel.svg"
import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import {
  deleteExcelFileTable,
  getExcelFileTable,
  sendExcelFileTable,
} from "../../redux/actions/DocumentsActions/document"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

toast.configure()

export default function MyDocuments(props) {
  debugger
  const dispatch = useDispatch()
  const handleGetExcelFile = (id) => {
    dispatch(getExcelFileTable(id))
  }
  const handleDeleteExcelFile = (id) => {
    dispatch(deleteExcelFileTable(id))
  }
  const handleSendExcelFile = (id, is_order) => {
    dispatch(sendExcelFileTable(id, is_order))
  }
  const notify = () => {
    toast.success("Файл успешно отправлен!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
    })
  }
  return (
    <div className="container">
      <Typography variant="h5" component="h6">
        Мои документы
      </Typography>
      <Grid container direction="row" justify="flex-start" alignItems="center">
        {(props.docsList || []).map(
          (excel) =>
            excel.category === props.category && (
              <div key={excel.id} className="card-file-my">
                <div className="card-header">{excel.file_name}</div>
                <CardMedia
                  className="icon-card-my"
                  type="file"
                  image={ExcelIcon}
                />
                <NavLink to={`/docs/my_doc/${excel.id}`}>
                  <h5
                    className="card-footer-my"
                    onClick={() => handleGetExcelFile(excel.id)}
                  >
                    <div className="card-footer-downloader-my">Открыть</div>
                  </h5>
                </NavLink>
                <button
                  className="card-footer-my"
                  onClick={() => handleDeleteExcelFile(excel.id)}
                >
                  <div className="card-footer-downloader-my">Удалить</div>
                </button>
                <button
                  className="card-footer-my"
                  onClick={() => handleSendExcelFile(excel.id, true)}
                >
                  <div onClick={notify} className="card-footer-downloader-my">
                    Отправить
                  </div>
                </button>
              </div>
            )
        )}
      </Grid>
    </div>
  )
}
