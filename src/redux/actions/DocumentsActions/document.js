import constants from "../../constants"
import axios from "axios"
import point from "../../../point"

export const getDocsList = () => (dispatch) => {
  dispatch({ type: constants.GET_DOCS_LIST_LOADING })
  const token = localStorage.getItem("token")
  const baseUrl = `${point}/api/reports/excel/`
  axios
    .get(baseUrl, { headers: { Authorization: `Token ${token}` } })
    .then((result) => {
      dispatch({ type: constants.GET_DOCS_LIST_SUCCESS, payload: result.data })
    })
    .catch((error) => {
      dispatch({ type: constants.GET_DOCS_LIST_FAILED, error: error })
    })
}

export const getExcelFileTable = (id) => (dispatch) => {
  dispatch({ type: constants.GET_TABLE_LOADING })
  const baseURL = `${point}/api/reports/reports-list-filter/?user=&excel_file=${id}`
  const token = localStorage.getItem("token")
  axios
    .get(baseURL)
    .then((result) => {
      dispatch({ type: constants.GET_TABLE_SUCCESS, payload: result.data })
    })
    .catch((error) => {
      dispatch({ type: constants.GET_TABLE_FAILED, error: error })
    })
}

export const deleteExcelFileTable = (id) => (dispatch) => {
  dispatch({ type: constants.GET_TABLE_LOADING })
  const baseURL = `${point}/api/reports/excel/${id}/`
  const token = localStorage.getItem("token")
  axios
    .delete(baseURL, {
      data: { id: id },
      headers: { Authorization: `Token ${token}` },
    })
    .then((result) => {
      dispatch({ type: constants.UPLOAD_FILE_SUCCESS, payload: result })
    })
    .catch((error) => {
      dispatch({ type: constants.GET_TABLE_FAILED, error: error })
    })
}

export const sendExcelFileTable = (id, is_order) => (dispatch) => {
  dispatch({ type: constants.GET_TABLE_LOADING })
  const baseURL = `${point}/api/reports/send/`
  axios
    .post(baseURL, { is_order, id })
    .then((result) => {
      dispatch({ type: constants.UPLOAD_FILE_SUCCESS, payload: result })
    })
    .catch((error) => {
      dispatch({ type: constants.GET_TABLE_FAILED, error: error })
    })
}

// GET_INFO
export const getFileInfo = (user_id) => (dispatch) => {
  dispatch({ type: constants.GET_TABLE_LOADING })
  const baseURL = `${point}/api/reports/send`
  axios.get(baseURL, { params: { user_id } }).then((data) => {
    console.log(data.data)
    dispatch({ type: constants.GET_EXCEL_FILE_INFO, payload: data.data })
  })
}

export const uploadExcelFile = (file, category) => (dispatch) => {
  dispatch({ type: constants.UPLOAD_FILE_LOADING })
  const baseURL = `${point}/api/reports/excel/`
  const token = localStorage.getItem("token")
  let data = new FormData()
  data.append("excel_file", file)
  data.append("category", category)
  axios
    .post(baseURL, data, { headers: { Authorization: `Token ${token}` } })
    .then((result) => {
      dispatch({ type: constants.UPLOAD_FILE_SUCCESS, payload: result })
    })
    .catch((error) => {
      dispatch({ type: constants.UPLOAD_FILE_FAILED, error: error })
    })
}

export const getTemplateExcelFile = () => (dispatch) => {
  dispatch({ type: constants.GET_TEMPLATE_EXCEL_FILE_LOADING })
  const baseURL = `${point}/api/reports/excel-templates/`
  const token = localStorage.getItem("token")
  axios
    .get(baseURL, { headers: { Authorization: `Token ${token}` } })
    .then((result) => {
      dispatch({
        type: constants.GET_TEMPLATE_EXCEL_FILE_SUCCESS,
        payload: result.data,
      })
    })
    .catch((error) => {
      dispatch({ type: constants.GET_TEMPLATE_EXCEL_FILE_FAILED, error: error })
    })
}

export const getTemplateExcelFileVlad = () => (dispatch) => {
  dispatch({ type: constants.GET_TEMPLATE_EXCEL_FILE_LOADING_VLAD })
  const baseURL = `${point}/api/reports/room/`
  const token = localStorage.getItem("token")
  axios
    .get(baseURL, { headers: { Authorization: `Token ${token}` } })
    .then((result) => {
      dispatch({
        type: constants.GET_TEMPLATE_EXCEL_FILE_SUCCESS_VLAD,
        payload: result.data,
      })
      getFileInfo(result.data.user)
    })
    .catch((error) => {
      dispatch({
        type: constants.GET_TEMPLATE_EXCEL_FILE_FAILED_VLAD,
        error: error,
      })
    })
}
