import { useEffect, useState } from "react"
import styles from "../page.module.css"



export default function MeDisc () {
  const [data, setData] = useState([])

  useEffect(() => {
    // const data = require("../meDiscJSON/courseData.json")
    setData(require("../meDiscJSON/courseData.json"))

  }, [])

  useEffect(() => {
    console.log("data: ", data);
    
  }, [data])

  return(<>
    <h1 className={styles.title}> MeDisc </h1>
    I am not paying money from a glorified spreadsheet to record my disc golf performances

  </>)
}