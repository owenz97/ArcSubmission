import React, { Component } from 'react'

export default class StudentInfo extends Component {
    constructor(props){
        super(props);

        this.state = {
            studentName: 'Kartik',
            day: 'Wed', // Mon, Tue, Wed
            month: 'August', // Jan, Feb
            selectedDayofMonth: '30', // 15th, 16th so on
            startTime: '4:00pm',
            endTime: '5:00pm',
            lessonName: 'Mathematical Methods',
            tutorName: 'Steve',
            timeLeft: '0'
        }
    }
    
    render() {
        return (
            <div className="oval-container">
                <div className="next-lesson">
                    <h3>Your Next Lesson is in {this.calculateTime()}</h3> 
                </div>
                <div className="student-info-circle">
                    <a href="#" className=""><div className="sideline"></div></a>
                <div className="details border-right-div">
                   <div className="bold-font"> Student </div> {this.state.studentName}
                </div>
                 <div className="details border-right-div">
                     <div>
                     <div className="bold-font">
                    {this.state.day},&nbsp;
                    {this.state.month}&nbsp;
                    {this.state.selectedDayofMonth} </div>
                     </div>
                     <div>
                         {this.state.startTime} - {this.state.endTime}
                     </div>
                </div>
                <div className="details">
                <div className="bold-font"> 
                   {this.state.lessonName} </div> with  {this.state.tutorName}
                </div>
            </div>
            <div className="add-btn-cnt">
                <button className="add-btn btn-primary">Add Enrolment</button>
            </div>
            </div>
        )
    }
    componentDidMount() {
        this.myInterval = setInterval(1000);
    }
    calculateTime = () =>{
        const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
    ];
   
    
    var goalDateMonth = monthNames.indexOf(this.state.month) + 1 ;
    var currentdate = new Date();
    var goalDate =  goalDateMonth+"/"+this.state.selectedDayofMonth +"/"+ currentdate.getFullYear();
    var date1 = new Date(goalDate);
       
    console.log((date1.getTime() - currentdate.getTime())/1000);
        if(date1.getTime() > currentdate.getTime())
        {
        var Difference_In_Time = (date1.getTime() - currentdate.getTime())/1000;
        }
        var time_remaining="";
        var hours="";
        var minutes="";
        var seconds="";
        if( Difference_In_Time >= 86400)
        {
            time_remaining = (Math.ceil(Difference_In_Time / 86400)) + " Days";
        }
   
        else
        {
            
                hours = (Difference_In_Time/3600)+"h";
                Difference_In_Time = Difference_In_Time % 3600;
                minutes = (Difference_In_Time/60)+"m";
                seconds = Difference_In_Time%60 + "s";
                time_remaining = hours + ":" + minutes + ":" + seconds;
            
        }
        // var days = "5";
        // setState update
        // document.getElementById("days").innerHTML = days + "d "
        // document.getElementById("hours").innerHTML = hours + "h " 
        // document.getElementById("mins").innerHTML = minutes + "m " 
        // document.getElementById("secs").innerHTML = seconds + "s " 

        return time_remaining;
        
    }
}
