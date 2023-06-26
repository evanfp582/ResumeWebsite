import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AddRound = (props: {name: string, numOfHoles: number}) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{props.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Number of holes: {props.numOfHoles}
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  )
};

export default AddRound