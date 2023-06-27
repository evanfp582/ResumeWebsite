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
  const [pastData, setPastData] = useState<RoundData[]>([])

  useEffect(() => {
    // let data : Course[]
    const courseData = require("../meDiscJSON/courseData.json").courses
    var newData = [];
    for (var i in courseData) {
      newData.push(courseData[i])
    }
    setCourseData(newData)

    const roundData = require("../meDiscJSON/personalData.json").data
    var roundDataArray = []
    for (var i in roundData) {
      roundDataArray.push(roundData[i])
    }
    setPastData(roundDataArray)

  }, [])

  useEffect(() => {
    console.log("data: ", courseData);
    console.log("Pastdata: ", pastData);

  }, [courseData, pastData])

  const calculateRoundScore = (course: String, throws: number[]) => {
    let selectedCourseData = courseData.find(o => o.name === course);
    let counter = 0;
    console.log("selectedCourseData: ", selectedCourseData);
    if (selectedCourseData){
      for (let i = 0; i < throws.length; i++) {
        counter = counter + (throws[i] - selectedCourseData.holes[i].par)
      }
    }    
    return counter
  }

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
    <AddRound courseData={courseData}/> 
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <Item>
          <h3>Courses</h3>
          {courseData.map((item,index)=>{
            return <CourseAccordian numOfHoles={item.numOfHoles} name={item.name} key={index}/>
          })}
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
          <h3>Past Rounds</h3>
          {pastData.map((item, index) => {
            const roundScore = calculateRoundScore(item.Course, item.throws)
            const totalCombinedNumber = item.throws.reduce((sum, num) => sum + num);
            return <Item key={index}>
              <p>{item.Course}</p>
              <p>{item.date}</p>
              <p>Score {totalCombinedNumber}({roundScore})</p>
              </Item>
          })}
        </Item>
      </Grid>
    </Grid>
  </>)
}

export type Course = {
  name: string
  numOfHoles: number
  holes: Hole[]
}

export type Hole = {
  par: number
  distance: number
}

export type RoundData = {
  Course: string
  throws: number[]
  date: string

}