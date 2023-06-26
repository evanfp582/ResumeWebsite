import { useEffect, useState } from "react"
import styles from "../page.module.css"
import AddRound from "../components/AddRound"
import { Accordion, AccordionDetails, Grid, Typography } from "@mui/material"
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { AccordionSummary } from "@material-ui/core";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CourseAccordian from "../components/CourseAccordian";



export default function MeDisc () {
  const [courseData, setCourseData] = useState<Course[]>([])

  useEffect(() => {
    // let data : Course[]
    const data = require("../meDiscJSON/courseData.json").courses
    var newData = [];
    for (var i in data) {
      newData.push(data[i])
    }
    console.log(newData);
    
    setCourseData(newData)

  }, [])

  useEffect(() => {
    console.log("data: ", courseData);
    
  }, [courseData])


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return(<>
    <h1 className={styles.title}> MeDisc </h1>
    I am not paying money from a glorified spreadsheet to record my disc golf performances
    <AddRound /> 
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <Item>
          <h3>Courses</h3>
          {courseData.map((item,index)=>{
            console.log("DOES IT MAKE IT HERE: ", item);
            
            return <CourseAccordian numOfHoles={item.numOfHoles} name={item.name} key={index}/>
            
          })}
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>Past Rounds</Item>
      </Grid>
    </Grid>
  </>)
}

type Course = {
  name: string
  numOfHoles: number
}