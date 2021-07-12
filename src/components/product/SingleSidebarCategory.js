import React from "react"
import { useSelector } from "react-redux"
import InputFile from "../Docs/InputFile"
import ListDocs from "../Docs/ListDocs"
import MyDocuments from "../Docs/MyDocuments"
import excelfile from "../Docs/excelDocs/new.xlsx"
import Message from "./messages/Message"

export const SingleSidebarCategory = ({ title, category }) => {
  const docsList = useSelector((state) => state.docs.getDocsList)
  const docsListVlad = useSelector((state) => state.docs.getTemplateExcelVlad)

  const data = { template: title, excel: excelfile }

  // VLAD
  const is_vlad = useSelector((state) => state.data.is_vlad)
  const vlad = useSelector((state) => state.data.vlad)

  return (
    <div className="table-container">
      {vlad ? (
        <Message docsList={docsListVlad} category={category} />
      ) : (
        <>
          <InputFile category={category} />
          <ListDocs data={data} />
          <MyDocuments category={category} docsList={docsList} />
        </>
      )}
    </div>
  )
}
