import constants from "../constants"

const initialState = {
  getDocsList: [],
  getTable: null,
  getTemplateExcel: [],
  getTemplateExcelVlad: [],
  showExcelInfoModalVlad: { content: {}, show: false },
  getDocsListState: {
    success: false,
    loading: false,
    failed: false,
  },
  getTableState: {
    success: false,
    loading: false,
    failed: false,
  },
  uploadFileState: {
    success: false,
    loading: false,
    failed: false,
  },
  getTemplateExcelState: {
    success: false,
    loading: false,
    failed: false,
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_DOCS_LIST_SUCCESS:
      return {
        ...state,
        getDocsList: action.payload,
        getDocsListState: {
          success: true,
          loading: false,
          failed: false,
        },
      }
    case constants.GET_DOCS_LIST_LOADING:
      return {
        ...state,
        getDocsListState: {
          success: false,
          loading: true,
          failed: false,
        },
      }
    case constants.GET_DOCS_LIST_FAILED:
      return {
        ...state,
        getDocsListState: {
          success: false,
          loading: false,
          failed: true,
        },
      }

    case constants.GET_TABLE_SUCCESS:
      return {
        ...state,
        getTable: action.payload,
        getTableState: {
          success: true,
          loading: false,
          failed: false,
        },
      }
    case constants.GET_TABLE_FAILED:
      return {
        ...state,
        getTableState: {
          success: false,
          loading: false,
          failed: true,
        },
      }
    case constants.GET_TABLE_LOADING:
      return {
        ...state,
        getTableState: {
          success: false,
          loading: true,
          failed: false,
        },
      }

    case constants.UPLOAD_FILE_SUCCESS:
      return {
        ...state,
        uploadFileState: {
          success: true,
          loading: false,
          failed: true,
        },
      }
    case constants.UPLOAD_FILE_FAILED:
      return {
        ...state,
        uploadFileState: {
          success: false,
          loading: false,
          failed: true,
        },
      }
    case constants.UPLOAD_FILE_LOADING:
      return {
        ...state,
        uploadFileState: {
          success: false,
          loading: true,
          failed: false,
        },
      }

    case constants.GET_TEMPLATE_EXCEL_FILE_SUCCESS:
      return {
        ...state,
        getTemplateExcel: action.payload,
        getTemplateExcelState: {
          success: true,
          loading: false,
          failed: false,
        },
      }
    case constants.GET_TEMPLATE_EXCEL_FILE_FAILED:
      return {
        ...state,
        getTemplateExcelState: {
          success: false,
          loading: false,
          failed: true,
        },
      }
    case constants.GET_TEMPLATE_EXCEL_FILE_LOADING:
      return {
        ...state,
        getTemplateExcelState: {
          success: false,
          loading: true,
          failed: false,
        },
      }

    case constants.GET_TEMPLATE_EXCEL_FILE_SUCCESS_VLAD:
      return {
        ...state,
        getTemplateExcelVlad: action.payload,
        getTemplateExcelState: {
          success: true,
          loading: false,
          failed: false,
        },
      }
    case constants.GET_TEMPLATE_EXCEL_FILE_FAILED_VLAD:
      return {
        ...state,
        getTemplateExcelState: {
          success: false,
          loading: false,
          failed: true,
        },
      }
    case constants.GET_TEMPLATE_EXCEL_FILE_LOADING_VLAD:
      return {
        ...state,
        getTemplateExcelState: {
          success: false,
          loading: true,
          failed: false,
        },
      }
    case constants.GET_EXCEL_FILE_INFO:
      return {
        ...state,
        showExcelInfoModalVlad: {
          ...state.showExcelInfoModalVlad,
          show: true,
          content: action.payload,
        },
      }
    case constants.CLOSE_MODAL:
      return {
        ...state,
        showExcelInfoModalVlad: {
          show: false,
          content: { ...state.showExcelInfoModalVlad.content },
        },
      }

    default:
      return state
  }
}

export default reducer
