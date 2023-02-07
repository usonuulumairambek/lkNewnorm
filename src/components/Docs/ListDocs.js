import React from "react"
import { CardMedia, Typography } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import "./index.css"
import ExcelIcon from "../../redux/uils/icons/excel.svg"

export default function ListDocs(props) {
  const docsList = [
    { name: "Шаблон", file: props.data.excel },
    { name: "Шаблон", file: props.data.excel },
    { name: "Шаблон", file: props.data.excel },
    { name: "Шаблон ", file: props.data.excel },
  ]
  return (
    <div className="container">
      <Typography variant="h5" component="h6">
        {props.data.template}
      </Typography>
      <Grid container direction="row" justify="flex-start" alignItems="center">
        {docsList.map((excel, id) => {
          return (
            <div key={id} className="card-file">
              <div className="card-header">{excel.name} {id+1}</div>
              <CardMedia
                className="icon-card"
                type="file"
                image={ExcelIcon}
                // onChange={{ pathname: `/docs/${excel.id}`, state: { excel }}}
              />
              <h5 className="card-footer">
                <div className="card-footer-downloader">
                  <a href={excel.file} download>
                    Скачать
                  </a>
                </div>
              </h5>
            </div>
          )
        })}
      </Grid>
    </div>
  )
}
