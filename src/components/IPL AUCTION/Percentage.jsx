import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Percentage(props) {
    const percentage = props.Data;
    console.log(percentage);
    return (


        <CircularProgressbar strokeWidth={10} styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',

            // Text size
            textSize: '24px',

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `rgba(0, 128, 0 , ${percentage / 100})`,
            textColor: '#C70039',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
        })} value={percentage} text={`${percentage}%`} />

    );
}

export default Percentage;