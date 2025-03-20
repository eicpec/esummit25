import React, { useState } from "react";
import LeftButton from "./Leftbutton";
import RightButton from "./Rightbutton";
import Percentage from "./Percentage";

function Display() {

const Data = [
    {
        "Name_of_Player": "K.S. Bharat",
        "Country": "India",
        "Role": "WK Batsman",
        "Category": "BT3",
        "Batting_Rating": 70,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 75,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/playerheadshot/ipl/284/2734.png"
    },
    {
        "Name_of_Player": "Sameer Rizvi",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT3",
        "Batting_Rating": 65,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://maharojgaar.com/wp-content/uploads/2024/03/1229-860x860.png"
    },
    {
        "Name_of_Player": "PrabhSimran Singh",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT3",
        "Batting_Rating": 70,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/137.png"
    },
    {
        "Name_of_Player": "Tom Kohler-Cadmore",
        "Country": "Overseas",
        "Role": "Batsman",
        "Category": "BT3",
        "Batting_Rating": 50,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/3113.png"
    },
    {
        "Name_of_Player": "U S Yadav",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT3",
        "Batting_Rating": 50,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/1472.png"
    },
    {
        "Name_of_Player": "Donovan Ferreira",
        "Country": "Overseas",
        "Role": "Batsman",
        "Category": "BT3",
        "Batting_Rating": 55,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://www.rajasthanroyals.com/static-assets/images/players/23487.png?v=6.49"
    },
    {
        "Name_of_Player": "Ashton Turner",
        "Country": "Overseas",
        "Role": "Batsman",
        "Category": "BT3",
        "Batting_Rating": 75,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://www.lucknowsupergiants.in/static-assets/images/players/58635.png?v=12.23"
    },
    {
        "Name_of_Player": "Shubham Dubey",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT3",
        "Batting_Rating": 50,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKYR9Opz9dWvzb2FQ09bepl3dPnvX227Arig&s"
    },
    {
        "Name_of_Player": "Abhishek Porel ",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT3",
        "Batting_Rating": 55,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/1580.png"
    },
    {
        "Name_of_Player": "Kunal Rathore",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT3",
        "Batting_Rating": 60,
        "Bowling_Rating": 20,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://www.rajasthanroyals.com/static-assets/images/players/88492.png?v=6.49"
    },
    {
        "Name_of_Player": "BR Sharath",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT3",
        "Batting_Rating": 60,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/3117.png"
    },
    {
        "Name_of_Player": "Sherfane Rutherford",
        "Country": "Overseas",
        "Role": "Batsman",
        "Category": "BT3",
        "Batting_Rating": 65,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/122.png"
    },
    {
        "Name_of_Player": "Swastik Chhikara",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT3",
        "Batting_Rating": 55,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/3102.png"
    },
    {
        "Name_of_Player": "Vishnu Vinod",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT3",
        "Batting_Rating": 75,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/581.png"
    },
    {
        "Name_of_Player": "Dhruv Jurel",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT3",
        "Batting_Rating": 70,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/1004.png"
    },
    {
        "Name_of_Player": "N S Reddy",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT2",
        "Batting_Rating": 80,
        "Bowling_Rating": 65,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "50L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/1944.png"
    },
    {
        "Name_of_Player": "Kumar Kushagra",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT3",
        "Batting_Rating": 55,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/3101.png"
    },
    {
        "Name_of_Player": "Angkrish Raghuvanshi",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT3",
        "Batting_Rating": 60,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/787.png"
    },
    {
        "Name_of_Player": "Shashank Singh",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT2",
        "Batting_Rating": 75,
        "Bowling_Rating": 30,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "40L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/191.png"
    },
    {
        "Name_of_Player": "Dewald Brevis",
        "Country": "Overseas",
        "Role": "Batsman",
        "Category": "BT2",
        "Batting_Rating": 75,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "60L",
        "Player_Pics": "https://d2l63a9diffym2.cloudfront.net/players/6bgd0ZWrcT00yAUtALBfrg2JiuHHZ2JGeu7T1OY4.jpeg"
    },
    {
        "Name_of_Player": "Anmolpreet Singh",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT2",
        "Batting_Rating": 70,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/playerheadshot/ipl/284/2965.png"
    },
    {
        "Name_of_Player": "Riyan Parag",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT2",
        "Batting_Rating": 80,
        "Bowling_Rating": 50,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "60L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/189.png"
    },
    {
        "Name_of_Player": "Manish Pandey",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT2",
        "Batting_Rating": 80,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 50,
        "Base_Price": "40L",
        "Player_Pics": "https://www.kkr.in/static-assets/images/players/4276.png?v=111.38"
    },
    {
        "Name_of_Player": "Rahul Tewatia",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT2",
        "Batting_Rating": 75,
        "Bowling_Rating": 60,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 35,
        "Base_Price": "40L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/120.png"
    },
    {
        "Name_of_Player": "Mayank Agarwal",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT2",
        "Batting_Rating": 75,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "40L",
        "Player_Pics": "https://documents.iplt20.com/playerheadshot/ipl/284/158.png"
    },
    {
        "Name_of_Player": "Glenn Phillips ",
        "Country": "Overseas",
        "Role": "Batsman",
        "Category": "BT2",
        "Batting_Rating": 80,
        "Bowling_Rating": 20,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "80L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/635.png"
    },
    {
        "Name_of_Player": "Tristan Stubbs",
        "Country": "Overseas",
        "Role": "Batsman",
        "Category": "BT2",
        "Batting_Rating": 70,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "40L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/1017.png"
    },
    {
        "Name_of_Player": "Devdutt Padikkal",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT2",
        "Batting_Rating": 80,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 20,
        "Base_Price": "60L",
        "Player_Pics": "https://documents.iplt20.com/playerheadshot/ipl/284/5430.png"
    },
    {
        "Name_of_Player": "Ricky Bhui",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT2",
        "Batting_Rating": 50,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://i.cdn.newsbytesapp.com/sports/players/profile/ricky-bhui.png"
    },
    {
        "Name_of_Player": "Matthew Wade",
        "Country": "Overseas",
        "Role": "Batsman",
        "Category": "BT2",
        "Batting_Rating": 75,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 70,
        "Captaincy_Rating": 25,
        "Base_Price": "40L",
        "Player_Pics": "https://www.gujarattitansipl.com/static-assets/images/players/4195.png?v=4.86"
    },
    {
        "Name_of_Player": "Anuj Rawat",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT2",
        "Batting_Rating": 70,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/534.png"
    },
    {
        "Name_of_Player": "Yash Dhull",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT2",
        "Batting_Rating": 75,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://ipltable.in/wp-content/uploads/2024/02/image-68.jpeg"
    },
    {
        "Name_of_Player": "Shai Hope",
        "Country": "Overseas",
        "Role": "Batsman",
        "Category": "BT2",
        "Batting_Rating": 80,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 40,
        "Base_Price": "40L",
        "Player_Pics": "https://www.cricnepal.com/wp-content/uploads/2023/06/Shai-Hope-West-Indies-cricketer-110.webp"
    },
    {
        "Name_of_Player": "Jitesh Sharma",
        "Country": "India",
        "Role": "Wk-Batsman",
        "Category": "BT2",
        "Batting_Rating": 85,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "60L",
        "Player_Pics": "https://www.punjabkingsipl.in/static-assets/images/players/64724.png?v=5.97"
    },
    {
        "Name_of_Player": "Phil Salt",
        "Country": "Overseas",
        "Role": "Batsman",
        "Category": "BT2",
        "Batting_Rating": 85,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 20,
        "Base_Price": "60L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/1220.png"
    },
    {
        "Name_of_Player": "Rahmanullah Gurbaz",
        "Country": "Overseas",
        "Role": "Batsman",
        "Category": "BT2",
        "Batting_Rating": 75,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 30,
        "Base_Price": "60L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/641.png"
    },
    {
        "Name_of_Player": "Abdul Samad",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT2",
        "Batting_Rating": 75,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "40L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/525.png"
    },
    {
        "Name_of_Player": "Kane Williamson",
        "Country": "Overseas",
        "Role": "Batsman",
        "Category": "BT2",
        "Batting_Rating": 75,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 95,
        "Base_Price": "40L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/65.png"
    },
    {
        "Name_of_Player": "Rahul Tripathi",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT2",
        "Batting_Rating": 80,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 60,
        "Captaincy_Rating": 10,
        "Base_Price": "60L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/188.png"
    },
    {
        "Name_of_Player": "Rajat Patidar",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT2",
        "Batting_Rating": 80,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "40L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/597.png"
    },
    {
        "Name_of_Player": "Tim David",
        "Country": "Overseas",
        "Role": "Batsman",
        "Category": "BT1",
        "Batting_Rating": 85,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "1CR",
        "Player_Pics": "https://documents.iplt20.com/playerheadshot/ipl/284/4524.png"
    },
    {
        "Name_of_Player": "David Miller",
        "Country": "Overseas",
        "Role": "Batsman",
        "Category": "BT1",
        "Batting_Rating": 90,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 70,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/playerheadshot/ipl/284/187.png"
    },
    {
        "Name_of_Player": "Travis Head",
        "Country": "Overseas",
        "Role": "Batsman",
        "Category": "BT1",
        "Batting_Rating": 90,
        "Bowling_Rating": 20,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "1CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/37.png"
    },
    {
        "Name_of_Player": "Rovman Powell",
        "Country": "Overseas",
        "Role": "Batsman",
        "Category": "BT1",
        "Batting_Rating": 80,
        "Bowling_Rating": 60,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "40L",
        "Player_Pics": "https://www.pngguru.in/storage/uploads/images/rovman-powell-west-indies-cricketer-free-hd-png-image_1717839405_2140087572.webp"
    },
    {
        "Name_of_Player": "Jonny Bairstow",
        "Country": "Overseas",
        "Role": "Batsman",
        "Category": "BT1",
        "Batting_Rating": 90,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 85,
        "Captaincy_Rating": 40,
        "Base_Price": "2CR",
        "Player_Pics": "https://www.punjabkingsipl.in/static-assets/images/players/19394.png?v=5.97"
    },
    {
        "Name_of_Player": "Aiden Markram",
        "Country": "Overseas",
        "Role": "Batsman",
        "Category": "BT1",
        "Batting_Rating": 95,
        "Bowling_Rating": 40,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 65,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/playerheadshot/ipl/284/1667.png"
    },
    {
        "Name_of_Player": "Rinku Singh",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT1",
        "Batting_Rating": 90,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 50,
        "Base_Price": "1CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/152.png"
    },
    {
        "Name_of_Player": "M.S Dhoni",
        "Country": "India",
        "Role": "WK-Batsmen",
        "Category": "BT1",
        "Batting_Rating": 85,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 90,
        "Captaincy_Rating": 90,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/57.png"
    },
    {
        "Name_of_Player": "Ishan Kishan",
        "Country": "India",
        "Role": "Wk-Batsman",
        "Category": "BT1",
        "Batting_Rating": 90,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 85,
        "Captaincy_Rating": 30,
        "Base_Price": "1CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/164.png"
    },
    {
        "Name_of_Player": "Yashasvi Jaiswal",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT1",
        "Batting_Rating": 90,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "1CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/533.png"
    },
    {
        "Name_of_Player": "Prithvi Shaw",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT1",
        "Batting_Rating": 85,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 30,
        "Base_Price": "80L",
        "Player_Pics": "https://ipltable.in/wp-content/uploads/2024/02/image-58-700x700.jpeg"
    },
    {
        "Name_of_Player": "Rishab Pant ",
        "Country": "India",
        "Role": "Wk-Batsman",
        "Category": "BT1",
        "Batting_Rating": 95,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 90,
        "Captaincy_Rating": 85,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/18.png"
    },
    {
        "Name_of_Player": "David Warner",
        "Country": "Overseas",
        "Role": "Batsman",
        "Category": "BT1",
        "Batting_Rating": 95,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 85,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/playerheadshot/ipl/284/170.png"
    },
    {
        "Name_of_Player": "N. Tilak Varma",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT1",
        "Batting_Rating": 90,
        "Bowling_Rating": 40,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 20,
        "Base_Price": "80L",
        "Player_Pics": "https://en.wikiflux.org/wiki/images/thumb/1/18/Tilak_Varma.png/300px-Tilak_Varma.png"
    },
    {
        "Name_of_Player": "Dinesh Karthik",
        "Country": "India",
        "Role": "WK-Batsmen",
        "Category": "BT1",
        "Batting_Rating": 80,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 75,
        "Captaincy_Rating": 55,
        "Base_Price": "60L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/13.png"
    },
    {
        "Name_of_Player": "Heinrich Klaasen",
        "Country": "Overseas",
        "Role": "Batsman",
        "Category": "BT1",
        "Batting_Rating": 90,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 80,
        "Captaincy_Rating": 10,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/202.png"
    },
    {
        "Name_of_Player": "Nitish Rana",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT1",
        "Batting_Rating": 90,
        "Bowling_Rating": 45,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 30,
        "Base_Price": "1CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/148.png"
    },
    {
        "Name_of_Player": "Shimron Hetmyer",
        "Country": "Overseas",
        "Role": "Batsman",
        "Category": "BT1",
        "Batting_Rating": 85,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 20,
        "Base_Price": "1CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/210.png"
    },
    {
        "Name_of_Player": "KL Rahul",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT1",
        "Batting_Rating": 95,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 85,
        "Captaincy_Rating": 80,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/19.png"
    },
    {
        "Name_of_Player": "Shikhar Dhawan",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT1",
        "Batting_Rating": 95,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 80,
        "Base_Price": "1CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/11.png"
    },
    {
        "Name_of_Player": "Jos Butler",
        "Country": "Overseas",
        "Role": "Batsman",
        "Category": "BT1",
        "Batting_Rating": 95,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 85,
        "Captaincy_Rating": 45,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/182.png"
    },
    {
        "Name_of_Player": "Virat Kohli.",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT1",
        "Batting_Rating": 95,
        "Bowling_Rating": 20,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 90,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/2.png"
    },
    {
        "Name_of_Player": "Faf du Plessis",
        "Country": "Overseas",
        "Role": "Batsman",
        "Category": "BT1",
        "Batting_Rating": 90,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 80,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/94.png"
    },
    {
        "Name_of_Player": "Devon Conway",
        "Country": "Overseas",
        "Role": "Batsman",
        "Category": "BT1",
        "Batting_Rating": 95,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "1.6CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2023/601.png"
    },
    {
        "Name_of_Player": "Suryakumar Yadav",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT1",
        "Batting_Rating": 95,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 40,
        "Base_Price": "1.6CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/174.png"
    },
    {
        "Name_of_Player": "Abhishek Sharma",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "BT1",
        "Batting_Rating": 85,
        "Bowling_Rating": 25,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 20,
        "Base_Price": "1CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/212.png"
    },
    {
        "Name_of_Player": "Rohit Sharma",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT1",
        "Batting_Rating": 95,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 90,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/6.png"
    },
    {
        "Name_of_Player": "Shreyas Iyer",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT1",
        "Batting_Rating": 90,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 90,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/12.png"
    },
    {
        "Name_of_Player": "Liam Livingstone",
        "Country": "Overseas",
        "Role": "All Rounder",
        "Category": "BT1",
        "Batting_Rating": 85,
        "Bowling_Rating": 75,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 20,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/183.png"
    },
    {
        "Name_of_Player": "Nicholas Pooran",
        "Country": "Overseas",
        "Role": "Batsman",
        "Category": "BT1",
        "Batting_Rating": 90,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 75,
        "Captaincy_Rating": 40,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/136.png"
    },
    {
        "Name_of_Player": "Quinton De Kock",
        "Country": "Overseas",
        "Role": "Batsman",
        "Category": "BT1",
        "Batting_Rating": 90,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 90,
        "Captaincy_Rating": 40,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/170.png"
    },
    {
        "Name_of_Player": "Sanju Samson",
        "Country": "India",
        "Role": "Wk Batsman",
        "Category": "BT1",
        "Batting_Rating": 95,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 85,
        "Captaincy_Rating": 85,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/190.png"
    },
    {
        "Name_of_Player": "Shubhman Gill",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT1",
        "Batting_Rating": 95,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 80,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/62.png"
    },
    {
        "Name_of_Player": "Prashant Solanki",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B3",
        "Batting_Rating": 10,
        "Bowling_Rating": 50,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://ipltable.in/wp-content/uploads/2024/02/image-38-700x700.jpeg"
    },
    {
        "Name_of_Player": "Rasikh Dar",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B3",
        "Batting_Rating": 10,
        "Bowling_Rating": 60,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/playerheadshot/ipl/284/5437.png"
    },
    {
        "Name_of_Player": "Sushant Mishra",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B3",
        "Batting_Rating": 5,
        "Bowling_Rating": 55,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://www.gujarattitansipl.com/static-assets/images/players/71380.png?v=4.86"
    },
    {
        "Name_of_Player": "Akash Singh",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B3",
        "Batting_Rating": 10,
        "Bowling_Rating": 50,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://bharatpursky.in/wp-content/uploads/2023/11/Akash-Singh.png"
    },
    {
        "Name_of_Player": "Manav Suthar",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B3",
        "Batting_Rating": 10,
        "Bowling_Rating": 70,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://www.gujarattitansipl.com/static-assets/images/players/71149.png?v=4.86"
    },
    {
        "Name_of_Player": "Kuldeep Sen",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B3",
        "Batting_Rating": 10,
        "Bowling_Rating": 65,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://www.yolo247.co/sports/tournaments/wp-content/uploads/2023/12/Kuldeep-Sen-min.png"
    },
    {
        "Name_of_Player": "Yash Thakur",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B3",
        "Batting_Rating": 10,
        "Bowling_Rating": 70,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://www.lucknowsupergiants.in/static-assets/images/players/66819.png?v=12.23"
    },
    {
        "Name_of_Player": "Vaibhav Arora",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B3",
        "Batting_Rating": 10,
        "Bowling_Rating": 60,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/vaibhav-arora.png"
    },
    {
        "Name_of_Player": "Rajan Kumar",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B3",
        "Batting_Rating": 10,
        "Bowling_Rating": 40,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://ipltable.in/wp-content/uploads/2024/03/image-58-700x700.jpeg"
    },
    {
        "Name_of_Player": "Spencer Johnson",
        "Country": "Overseas",
        "Role": "Bowler",
        "Category": "B3",
        "Batting_Rating": 10,
        "Bowling_Rating": 80,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "40L",
        "Player_Pics": "gujarattitansipl.com/static-assets/images/players/67778.png?v=4.86"
    },
    {
        "Name_of_Player": "Simarjeet Singh",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B3",
        "Batting_Rating": 10,
        "Bowling_Rating": 65,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/622.png"
    },
    {
        "Name_of_Player": "Kwena Maphaka",
        "Country": "Overseas",
        "Role": "Bowler",
        "Category": "B3",
        "Batting_Rating": 10,
        "Bowling_Rating": 70,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://images-cricketcom.imgix.net/players/90908_headshot_safari.png?auto=format,compress"
    },
    {
        "Name_of_Player": "Harpreet Brar",
        "Country": "India",
        "Role": "Bowler",
        "Category": "AR2",
        "Batting_Rating": 65,
        "Bowling_Rating": 70,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://ipltable.in/wp-content/uploads/2024/03/image-72-700x700.jpeg"
    },
    {
        "Name_of_Player": "M.Siddharth",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B3",
        "Batting_Rating": 10,
        "Bowling_Rating": 60,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://www.lucknowsupergiants.in/static-assets/images/players/67476.png?v=12.23"
    },
    {
        "Name_of_Player": "Suyash Sharma",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B3",
        "Batting_Rating": 35,
        "Bowling_Rating": 40,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/1932.png"
    },
    {
        "Name_of_Player": "Kartik Tyagi",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B3",
        "Batting_Rating": 10,
        "Bowling_Rating": 60,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/536.png"
    },
    {
        "Name_of_Player": "Shamar Joseph",
        "Country": "Overseas",
        "Role": "Bowler",
        "Category": "B3",
        "Batting_Rating": 10,
        "Bowling_Rating": 60,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/3105.png"
    },
    {
        "Name_of_Player": "H Sharma",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B3",
        "Batting_Rating": 10,
        "Bowling_Rating": 50,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/1568.png"
    },
    {
        "Name_of_Player": "Tushar Deshpande",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B3",
        "Batting_Rating": 10,
        "Bowling_Rating": 65,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/539.png"
    },
    {
        "Name_of_Player": "Jaydev Unadkat",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 10,
        "Bowling_Rating": 75,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 50,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/playerheadshot/ipl/284/86.png"
    },
    {
        "Name_of_Player": "Matheesha Pathirana",
        "Country": "Overseas",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 10,
        "Bowling_Rating": 80,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "40L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/1014.png"
    },
    {
        "Name_of_Player": "Sai Kishore",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 10,
        "Bowling_Rating": 75,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/playerheadshot/ipl/284/7123.png"
    },
    {
        "Name_of_Player": "Sandeep Sharma",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 10,
        "Bowling_Rating": 75,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "40L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/220.png"
    },
    {
        "Name_of_Player": "Gerald Coetzee",
        "Country": "Overseas",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 35,
        "Bowling_Rating": 75,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/gerald-coetzee.png"
    },
    {
        "Name_of_Player": "Keshav Maharaj",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 25,
        "Bowling_Rating": 80,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 40,
        "Base_Price": "50L",
        "Player_Pics": "https://www.rajasthanroyals.com/static-assets/images/players/48607.png?v=6.49"
    },
    {
        "Name_of_Player": "Jayant Yadav",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 30,
        "Bowling_Rating": 75,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 25,
        "Base_Price": "40L",
        "Player_Pics": "https://www.gujarattitansipl.com/static-assets/images/players/59611.png?v=4.86"
    },
    {
        "Name_of_Player": "Shivam Mavi",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 10,
        "Bowling_Rating": 75,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://www.lucknowsupergiants.in/static-assets/images/players/66984.png?v=12.23"
    },
    {
        "Name_of_Player": "Shreyas Gopal",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 10,
        "Bowling_Rating": 70,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/playerheadshot/ipl/284/1748.png"
    },
    {
        "Name_of_Player": "Chetan Sakariya",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 10,
        "Bowling_Rating": 80,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/playerheadshot/ipl/284/11062.png"
    },
    {
        "Name_of_Player": "Mustafizur Rahman",
        "Country": "Overseas",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 10,
        "Bowling_Rating": 75,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "40L",
        "Player_Pics": "https://documents.iplt20.com/playerheadshot/ipl/284/1594.png"
    },
    {
        "Name_of_Player": "Jhye Richardson",
        "Country": "Overseas",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 10,
        "Bowling_Rating": 75,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "40L",
        "Player_Pics": "https://documents.iplt20.com/playerheadshot/ipl/284/3781.png"
    },
    {
        "Name_of_Player": "Varun Chakaravarthy",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 10,
        "Bowling_Rating": 65,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://thebiodiary.com/uploads/bio/varunchakarverthy-3.jpg"
    },
    {
        "Name_of_Player": "Alzarri Joseph",
        "Country": "Overseas",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 10,
        "Bowling_Rating": 70,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "60L",
        "Player_Pics": "https://www.gujarattitansipl.com/static-assets/images/players/64264.png?v=4.86"
    },
    {
        "Name_of_Player": "Mukesh Kumar",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 10,
        "Bowling_Rating": 75,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "40L",
        "Player_Pics": "https://images.mykhel.com/webp/images/cricket/players/4/13814.jpg"
    },
    {
        "Name_of_Player": "Avesh Khan",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 10,
        "Bowling_Rating": 70,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://www.rajasthanroyals.com/static-assets/images/players/64511.png?v=6.49"
    },
    {
        "Name_of_Player": "Nathan Ellis",
        "Country": "Overseas",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 10,
        "Bowling_Rating": 70,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "40L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/633.png"
    },
    {
        "Name_of_Player": "Umran Malik",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 10,
        "Bowling_Rating": 75,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "40L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/637.png"
    },
    {
        "Name_of_Player": "Luke Wood ",
        "Country": "Overseas",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 10,
        "Bowling_Rating": 75,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "40L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/3116.png"
    },
    {
        "Name_of_Player": "Nandre Burger",
        "Country": "Overseas",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 10,
        "Bowling_Rating": 70,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "40L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/2806.png"
    },
    {
        "Name_of_Player": "Mohsin Khan",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 10,
        "Bowling_Rating": 75,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/541.png"
    },
    {
        "Name_of_Player": "Akash Deep",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 10,
        "Bowling_Rating": 70,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/1007.png"
    },
    {
        "Name_of_Player": "Harshit Rana",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 10,
        "Bowling_Rating": 75,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/1013.png"
    },
    {
        "Name_of_Player": "Dushmantha Chameera",
        "Country": "Overseas",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 10,
        "Bowling_Rating": 70,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/608.png"
    },
    {
        "Name_of_Player": "Fazalhaq Farooqi",
        "Country": "Overseas",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 10,
        "Bowling_Rating": 65,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/1011.png"
    },
    {
        "Name_of_Player": "Harshal Patel",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B1",
        "Batting_Rating": 10,
        "Bowling_Rating": 80,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "60L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/114.png"
    },
    {
        "Name_of_Player": "Tom Curran",
        "Country": "Overseas",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 10,
        "Bowling_Rating": 60,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/309.png"
    },
    {
        "Name_of_Player": "Yash Dayal",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 10,
        "Bowling_Rating": 70,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/978.png"
    },
    {
        "Name_of_Player": "Amit Mishra",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 10,
        "Bowling_Rating": 75,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "40L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/107.png"
    },
    {
        "Name_of_Player": "Akash Madhwal",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 10,
        "Bowling_Rating": 65,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/1045.png"
    },
    {
        "Name_of_Player": "Mayank Markande",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 10,
        "Bowling_Rating": 75,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "40L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/87.png"
    },
    {
        "Name_of_Player": "Noor Ahmad",
        "Country": "Overseas",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 10,
        "Bowling_Rating": 80,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "40L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/975.png"
    },
    {
        "Name_of_Player": "Piyush Chawla",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 10,
        "Bowling_Rating": 80,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "40L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/149.png"
    },
    {
        "Name_of_Player": "Reece Topley",
        "Country": "Overseas",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 10,
        "Bowling_Rating": 65,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "60L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/574.png"
    },
    {
        "Name_of_Player": "Shahbaz Ahamad",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 10,
        "Bowling_Rating": 75,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/523.png"
    },
    {
        "Name_of_Player": "Joshua Little",
        "Country": "Overseas",
        "Role": "Bowler",
        "Category": "B1",
        "Batting_Rating": 10,
        "Bowling_Rating": 80,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "40L",
        "Player_Pics": "https://www.gujarattitansipl.com/static-assets/images/players/66081.png?v=4.86"
    },
    {
        "Name_of_Player": "Sakib Hussain",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B1",
        "Batting_Rating": 10,
        "Bowling_Rating": 65,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/playerheadshot/ipl/284/201.png"
    },
    {
        "Name_of_Player": "Mitchell Starc",
        "Country": "Overseas",
        "Role": "Bowler",
        "Category": "B1",
        "Batting_Rating": 40,
        "Bowling_Rating": 90,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 30,
        "Base_Price": "2CR",
        "Player_Pics": "https://d13ir53smqqeyp.cloudfront.net/fc-player-images/1080.png"
    },
    {
        "Name_of_Player": "Rahul Chahar",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B1",
        "Batting_Rating": 10,
        "Bowling_Rating": 85,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "60L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/171.png"
    },
    {
        "Name_of_Player": "Maheesh Theekshana",
        "Country": "Overseas",
        "Role": "Bowler",
        "Category": "B1",
        "Batting_Rating": 10,
        "Bowling_Rating": 85,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "1CR",
        "Player_Pics": "https://www.iplbetonline.in/wp-content/uploads/2023/04/629.png"
    },
    {
        "Name_of_Player": "M Siraj",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B1",
        "Batting_Rating": 10,
        "Bowling_Rating": 90,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 20,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/playerheadshot/ipl/284/3840.png"
    },
    {
        "Name_of_Player": "Kuldeep Yadav",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B1",
        "Batting_Rating": 35,
        "Bowling_Rating": 85,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "80L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/14.png"
    },
    {
        "Name_of_Player": "Anrich Nortje",
        "Country": "Overseas",
        "Role": "Bowler",
        "Category": "B1",
        "Batting_Rating": 10,
        "Bowling_Rating": 90,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "1CR",
        "Player_Pics": "https://documents.iplt20.com/playerheadshot/ipl/284/5433.png"
    },
    {
        "Name_of_Player": "Mohammad Shami",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B1",
        "Batting_Rating": 15,
        "Bowling_Rating": 90,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 20,
        "Base_Price": "1.4CR",
        "Player_Pics": "https://www.gujarattitansipl.com/static-assets/images/players/28994.png?v=4.86"
    },
    {
        "Name_of_Player": "Jasprit Bumrah",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B1",
        "Batting_Rating": 10,
        "Bowling_Rating": 95,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 50,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/9.png"
    },
    {
        "Name_of_Player": "Deepak Chahar",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B1",
        "Batting_Rating": 10,
        "Bowling_Rating": 90,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "1CR",
        "Player_Pics": "https://documents.iplt20.com/playerheadshot/ipl/284/140.png"
    },
    {
        "Name_of_Player": "Mohit Sharma",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B1",
        "Batting_Rating": 10,
        "Bowling_Rating": 85,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 35,
        "Base_Price": "60L",
        "Player_Pics": "https://www.gujarattitansipl.com/static-assets/images/players/63341.png?v=4.86"
    },
    {
        "Name_of_Player": "Bhuvneshwar Kumar",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B1",
        "Batting_Rating": 25,
        "Bowling_Rating": 90,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 40,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/playerheadshot/ipl/284/116.png"
    },
    {
        "Name_of_Player": "Lockie Ferguson",
        "Country": "Overseas",
        "Role": "Bowler",
        "Category": "B1",
        "Batting_Rating": 10,
        "Bowling_Rating": 80,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "1CR",
        "Player_Pics": "https://www.gujarattitansipl.com/static-assets/images/players/63719.png?v=4.86"
    },
    {
        "Name_of_Player": "Arshdeep Singh",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B1",
        "Batting_Rating": 10,
        "Bowling_Rating": 90,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 40,
        "Base_Price": "1CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/125.png"
    },
    {
        "Name_of_Player": "Umesh Yadav",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B1",
        "Batting_Rating": 20,
        "Bowling_Rating": 80,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 30,
        "Base_Price": "60L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2023/21.png"
    },
    {
        "Name_of_Player": "Kagiso Rabada",
        "Country": "Overseas",
        "Role": "Bowler",
        "Category": "B1",
        "Batting_Rating": 30,
        "Bowling_Rating": 95,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 20,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/116.png"
    },
    {
        "Name_of_Player": "Ajinkya Rahane",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT1",
        "Batting_Rating": 85,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 40,
        "Base_Price": "40L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/44.png"
    },
    {
        "Name_of_Player": "Rashid Khan",
        "Country": "Overseas",
        "Role": "Bowler",
        "Category": "B1",
        "Batting_Rating": 70,
        "Bowling_Rating": 95,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 75,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/218.png"
    },
    {
        "Name_of_Player": "Pat Cummins",
        "Country": "Overseas",
        "Role": "Bowler",
        "Category": "B1",
        "Batting_Rating": 40,
        "Bowling_Rating": 85,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 80,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/33.png"
    },
    {
        "Name_of_Player": "Yuzvendra Chahal",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B1",
        "Batting_Rating": 10,
        "Bowling_Rating": 90,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 20,
        "Base_Price": "1CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/10.png"
    },
    {
        "Name_of_Player": "Ruturaj Gaikwad",
        "Country": "India",
        "Role": "Batsman",
        "Category": "BT1",
        "Batting_Rating": 95,
        "Bowling_Rating": 0,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 75,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/102.png"
    },
    {
        "Name_of_Player": "Ravi Bishnoi",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B1",
        "Batting_Rating": 10,
        "Bowling_Rating": 85,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "40L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/520.png"
    },
    {
        "Name_of_Player": "Khaleel Ahmed",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B1",
        "Batting_Rating": 10,
        "Bowling_Rating": 85,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "60L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/8.png"
    },
    {
        "Name_of_Player": "Mayank Yadav",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B1",
        "Batting_Rating": 10,
        "Bowling_Rating": 90,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "40L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/987.png"
    },
    {
        "Name_of_Player": "Ishant Sharma ",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B1",
        "Batting_Rating": 10,
        "Bowling_Rating": 80,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "40L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/50.png"
    },
    {
        "Name_of_Player": "Naveen Ul Haq",
        "Country": "Overseas",
        "Role": "Bowler",
        "Category": "B1",
        "Batting_Rating": 10,
        "Bowling_Rating": 90,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "80L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/639.png"
    },
    {
        "Name_of_Player": "Rishi Dhawan",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR3",
        "Batting_Rating": 50,
        "Bowling_Rating": 50,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/996.png"
    },
    {
        "Name_of_Player": "Swapnil Singh",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR3",
        "Batting_Rating": 30,
        "Bowling_Rating": 45,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://iplcricbet.com/wp-content/uploads/2024/06/Swapnil-Singh.jpg"
    },
    {
        "Name_of_Player": "Shams Mulani ",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR3",
        "Batting_Rating": 35,
        "Bowling_Rating": 65,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://iplcricbet.com/wp-content/uploads/2024/03/Shams-Mulani.jpg"
    },
    {
        "Name_of_Player": "Arjun Tendulkar",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR3",
        "Batting_Rating": 30,
        "Bowling_Rating": 50,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/playerheadshot/ipl/284/10244.png"
    },
    {
        "Name_of_Player": "Mohd. Arshad Khan",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR3",
        "Batting_Rating": 45,
        "Bowling_Rating": 40,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://www.lucknowsupergiants.in/static-assets/images/players/82839.png?v=12.23"
    },
    {
        "Name_of_Player": "Yudhvir Singh",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR3",
        "Batting_Rating": 35,
        "Bowling_Rating": 35,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://www.lucknowsupergiants.in/static-assets/images/players/74054.png?v=12.23"
    },
    {
        "Name_of_Player": "Azmatullah Omarzai",
        "Country": "Overseas",
        "Role": "All Rounder",
        "Category": "AR1",
        "Batting_Rating": 70,
        "Bowling_Rating": 65,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "50L",
        "Player_Pics": "https://www.gujarattitansipl.com/static-assets/images/players/67516.png?v=4.86"
    },
    {
        "Name_of_Player": "Anshul Kamboj",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR3",
        "Batting_Rating": 45,
        "Bowling_Rating": 35,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/381300/381389.1.png"
    },
    {
        "Name_of_Player": "Darshan Nalkande",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR3",
        "Batting_Rating": 40,
        "Bowling_Rating": 40,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/playerheadshot/ipl/284/4447.png"
    },
    {
        "Name_of_Player": "Anukul Roy",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR3",
        "Batting_Rating": 40,
        "Bowling_Rating": 40,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/160.png"
    },
    {
        "Name_of_Player": "Rachin Ravindra",
        "Country": "Overseas",
        "Role": "All Rounder",
        "Category": "AR1",
        "Batting_Rating": 90,
        "Bowling_Rating": 40,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "80L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/724.png"
    },
    {
        "Name_of_Player": "Romario Shepherd",
        "Country": "Overseas",
        "Role": "All Rounder",
        "Category": "AR3",
        "Batting_Rating": 40,
        "Bowling_Rating": 40,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/371.png"
    },
    {
        "Name_of_Player": "Karn Sharma",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR3",
        "Batting_Rating": 35,
        "Bowling_Rating": 40,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/98.png"
    },
    {
        "Name_of_Player": "Abhinav Manohar",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR3",
        "Batting_Rating": 50,
        "Bowling_Rating": 50,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/974.png"
    },
    {
        "Name_of_Player": "Ramandeep Singh",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR3",
        "Batting_Rating": 40,
        "Bowling_Rating": 40,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/991.png"
    },
    {
        "Name_of_Player": "Prerak Mankad",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR3",
        "Batting_Rating": 40,
        "Bowling_Rating": 40,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/998.png"
    },
    {
        "Name_of_Player": "Shivam Singh",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR3",
        "Batting_Rating": 40,
        "Bowling_Rating": 40,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/1936.png"
    },
    {
        "Name_of_Player": "Manoj Bhandage",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR3",
        "Batting_Rating": 40,
        "Bowling_Rating": 35,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/1485.png"
    },
    {
        "Name_of_Player": "Nehal Wadhera",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR2",
        "Batting_Rating": 70,
        "Bowling_Rating": 45,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/1541.png"
    },
    {
        "Name_of_Player": "Abid Mushtaq",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR3",
        "Batting_Rating": 35,
        "Bowling_Rating": 35,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/1591.png"
    },
    {
        "Name_of_Player": "Arshin Kulkarni",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR3",
        "Batting_Rating": 35,
        "Bowling_Rating": 35,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/2788.png"
    },
    {
        "Name_of_Player": "Sumit Kumar",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR3",
        "Batting_Rating": 45,
        "Bowling_Rating": 45,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/1535.png"
    },
    {
        "Name_of_Player": "Ayush Badoni",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR2",
        "Batting_Rating": 75,
        "Bowling_Rating": 50,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/985.png"
    },
    {
        "Name_of_Player": "Sikandar Raza",
        "Country": "Overseas",
        "Role": "All Rounder",
        "Category": "AR2",
        "Batting_Rating": 75,
        "Bowling_Rating": 75,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 50,
        "Base_Price": "60L",
        "Player_Pics": "https://www.punjabkingsipl.in/static-assets/images/players/25422.png?v=5.97"
    },
    {
        "Name_of_Player": "Mohammad Nabi",
        "Country": "Overseas",
        "Role": "All Rounder",
        "Category": "AR2",
        "Batting_Rating": 65,
        "Bowling_Rating": 70,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 40,
        "Base_Price": "40L",
        "Player_Pics": "https://documents.iplt20.com/playerheadshot/ipl/284/618.png"
    },
    {
        "Name_of_Player": "Krishnappa Gowtham",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR2",
        "Batting_Rating": 60,
        "Bowling_Rating": 50,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/playerheadshot/ipl/284/3834.png"
    },
    {
        "Name_of_Player": "Venkatesh Iyer",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR1",
        "Batting_Rating": 85,
        "Bowling_Rating": 45,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "1.5CR",
        "Player_Pics": "https://ipltable.in/wp-content/uploads/2024/03/image-84-700x700.jpeg"
    },
    {
        "Name_of_Player": "Mahipal Lomror",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR2",
        "Batting_Rating": 40,
        "Bowling_Rating": 40,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrn9N1UIjv5yHdYFxza1ZBwTb-Y8Il8j-NEw&s"
    },
    {
        "Name_of_Player": "B.Sai Sudharshan",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR1",
        "Batting_Rating": 75,
        "Bowling_Rating": 50,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 25,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/976.png"
    },
    {
        "Name_of_Player": "Mayank Dagar",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR2",
        "Batting_Rating": 50,
        "Bowling_Rating": 50,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://iplcricbet.com/wp-content/uploads/2024/06/Mayank-Dagar.jpg"
    },
    {
        "Name_of_Player": "Marco Jansen",
        "Country": "Overseas",
        "Role": "All Rounder",
        "Category": "AR2",
        "Batting_Rating": 35,
        "Bowling_Rating": 75,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "60L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/586.png"
    },
    {
        "Name_of_Player": "Chris Woakes",
        "Country": "Overseas",
        "Role": "All Rounder",
        "Category": "AR2",
        "Batting_Rating": 60,
        "Bowling_Rating": 70,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "60L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/314.png"
    },
    {
        "Name_of_Player": "Ravichandran Ashwin",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR2",
        "Batting_Rating": 65,
        "Bowling_Rating": 75,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "1CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/45.png"
    },
    {
        "Name_of_Player": "Shardul Thakur",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR2",
        "Batting_Rating": 55,
        "Bowling_Rating": 80,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "1CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/105.png"
    },
    {
        "Name_of_Player": "Washington Sundar",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR2",
        "Batting_Rating": 65,
        "Bowling_Rating": 65,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "1CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/20.png"
    },
    {
        "Name_of_Player": "Daryl Mitchell",
        "Country": "Overseas",
        "Role": "All rounder",
        "Category": "AR2",
        "Batting_Rating": 80,
        "Bowling_Rating": 45,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 20,
        "Base_Price": "1CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/83.png"
    },
    {
        "Name_of_Player": "Naman Dhir",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR2",
        "Batting_Rating": 75,
        "Bowling_Rating": 35,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "40L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/3107.png"
    },
    {
        "Name_of_Player": "Vijay Shankar",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR2",
        "Batting_Rating": 50,
        "Bowling_Rating": 60,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/61.png"
    },
    {
        "Name_of_Player": "Kyle Mayers",
        "Country": "Overseas",
        "Role": "All Rounder",
        "Category": "AR2",
        "Batting_Rating": 50,
        "Bowling_Rating": 50,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/726.png"
    },
    {
        "Name_of_Player": "Deepak Hooda",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR2",
        "Batting_Rating": 70,
        "Bowling_Rating": 30,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "40L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/215.png"
    },
    {
        "Name_of_Player": "Lalit Yadav",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR2",
        "Batting_Rating": 50,
        "Bowling_Rating": 50,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "20L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/538.png"
    },
    {
        "Name_of_Player": "Mitchell Santner",
        "Country": "Overseas",
        "Role": "All Rounder",
        "Category": "AR2",
        "Batting_Rating": 50,
        "Bowling_Rating": 80,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "1CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/75.png"
    },
    {
        "Name_of_Player": "Sam Curran",
        "Country": "Overseas",
        "Role": "All Rounder",
        "Category": "AR1",
        "Batting_Rating": 85,
        "Bowling_Rating": 75,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 30,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/playerheadshot/ipl/284/2939.png"
    },
    {
        "Name_of_Player": "Cameron Green",
        "Country": "Overseas",
        "Role": "All Rounder",
        "Category": "AR1",
        "Batting_Rating": 80,
        "Bowling_Rating": 70,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "2CR",
        "Player_Pics": "https://www.royalchallengers.com/PRRCB01/public/2024-03/green%20_0.png"
    },
    {
        "Name_of_Player": "Axar Patel",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR1",
        "Batting_Rating": 80,
        "Bowling_Rating": 80,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 70,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/110.png"
    },
    {
        "Name_of_Player": "Mooen Ali",
        "Country": "Overseas",
        "Role": "All Rounder",
        "Category": "AR1",
        "Batting_Rating": 70,
        "Bowling_Rating": 70,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 20,
        "Base_Price": "1CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/206.png"
    },
    {
        "Name_of_Player": "MItchell Marsh",
        "Country": "Overseas",
        "Role": "All Rounder",
        "Category": "AR1",
        "Batting_Rating": 85,
        "Bowling_Rating": 65,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 20,
        "Base_Price": "1CR",
        "Player_Pics": "https://kheltoday.com/wp-content/uploads/2023/04/40.png"
    },
    {
        "Name_of_Player": "Shahrukh Khan",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR1",
        "Batting_Rating": 70,
        "Bowling_Rating": 60,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 25,
        "Base_Price": "40L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/590.png"
    },
    {
        "Name_of_Player": "Marcus Stoinis",
        "Country": "Overseas",
        "Role": "All Rounder",
        "Category": "AR1",
        "Batting_Rating": 85,
        "Bowling_Rating": 75,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 20,
        "Base_Price": "1.6CR",
        "Player_Pics": "https://www.lucknowsupergiants.in/static-assets/images/players/4311.png?v=12.23"
    },
    {
        "Name_of_Player": "Krunal Pandya",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR1",
        "Batting_Rating": 80,
        "Bowling_Rating": 65,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 25,
        "Base_Price": "1CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/17.png"
    },
    {
        "Name_of_Player": "Ravindra Jadeja",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR1",
        "Batting_Rating": 80,
        "Bowling_Rating": 80,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 60,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/46.png"
    },
    {
        "Name_of_Player": "Sunil Narine",
        "Country": "Overseas",
        "Role": "All Rounder",
        "Category": "AR1",
        "Batting_Rating": 75,
        "Bowling_Rating": 85,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 30,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/156.png"
    },
    {
        "Name_of_Player": "Shivam Dube",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR1",
        "Batting_Rating": 80,
        "Bowling_Rating": 55,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 15,
        "Base_Price": "80L",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/211.png"
    },
    {
        "Name_of_Player": "Andre Russell",
        "Country": "Overseas",
        "Role": "All Rounder",
        "Category": "AR1",
        "Batting_Rating": 90,
        "Bowling_Rating": 85,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/141.png"
    },
    {
        "Name_of_Player": "Glenn Maxwell",
        "Country": "Overseas",
        "Role": "All Rounder",
        "Category": "AR1",
        "Batting_Rating": 85,
        "Bowling_Rating": 75,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 50,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/28.png"
    },
    {
        "Name_of_Player": "Hardik Pandya",
        "Country": "India",
        "Role": "All Rounder",
        "Category": "AR1",
        "Batting_Rating": 80,
        "Bowling_Rating": 80,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 75,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/54.png"
    },
    {
        "Name_of_Player": "Navdeep Saini",
        "Country": "India",
        "Role": "Bowler",
        "Category": "B2",
        "Batting_Rating": 25,
        "Bowling_Rating": 75,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "50L",
        "Player_Pics": "https://www.rajasthanroyals.com/static-assets/images/players/64448.png?v=6.49"
    },
    {
        "Name_of_Player": "Trent Boult",
        "Country": "Overseas",
        "Role": "Bowler",
        "Category": "B1",
        "Batting_Rating": 20,
        "Bowling_Rating": 90,
        "Wicket_Keeping_Rating": 0,
        "Captaincy_Rating": 10,
        "Base_Price": "2CR",
        "Player_Pics": "https://documents.iplt20.com/ipl/IPLHeadshot2024/66.png"
    }
]
  const [indx, setIndex] = useState(0);

  const PlayerName = Data[indx].Name_of_Player;
  const Country = Data[indx].Country;
  const Role = Data[indx].Role;
  const BattingRating = Data[indx].Batting_Rating;
  const BowlingRating = Data[indx].Bowling_Rating;
  const WicketKeepingRating = Data[indx].Wicket_Keeping_Rating;
  const CaptaincyRating = Data[indx].Captaincy_Rating;
  const BasePrice = Data[indx].Base_Price;
  const image = Data[indx].Player_Pics;
  const len = Data.length;

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-slate-300 py-8 px-4">
      <h1 className="mb-8 text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 text-center font-serif">
        IPL Auction E-Summit'25
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-6xl">
        <LeftButton indx={indx} setIndex={setIndex} len={len} />

        <div className="flex flex-col w-full md:w-1/2 text-center gap-4">
          <div className="text-2xl md:text-4xl font-sans font-semibold">{PlayerName}</div>
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full self-center p-2 overflow-hidden bg-white">
            <img src={image} className="w-full h-full object-cover" alt={PlayerName} />
          </div>
          <div className="text-lg md:text-2xl font-medium">{Role}, {Country}</div>
          <div className="text-lg md:text-2xl font-bold">Base Price: {BasePrice}</div>
        </div>

        <div className="flex flex-col items-center justify-center w-full md:w-1/2">
          <h1 className="text-2xl md:text-4xl font-sans font-semibold">Stats of {PlayerName}</h1>
          <div className="grid grid-cols-2 gap-4 md:gap-6 mt-4">
            {[{ label: "Batting", value: BattingRating },
              { label: "Bowling", value: BowlingRating },
              { label: "W-Keeping", value: WicketKeepingRating },
              { label: "Captaincy", value: CaptaincyRating }].map((stat, index) => (
              <div key={index} className="w-32 h-32 flex flex-col items-center justify-center gap-2">
                <Percentage Data={stat.value} />
                <div className="text-lg font-serif">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="text-xl md:text-2xl font-bold mt-4">
            Base Price: {BasePrice} {BasePrice < 10 ? "CR" : "L"}
          </div>
        </div>

        <RightButton len={len} indx={indx} setIndex={setIndex} />
      </div>
    </div>
  );
};

export default Display;

//   const [indx, setIndex] = useState(0);

//   const PlayerName = Data[indx].Name_of_Player;
//   const Country = Data[indx].Country;
//   const Role = Data[indx].Role;
//   const Category = Data[indx].Category;
//   const BattingRating = Data[indx].Batting_Rating;
//   const BowlingRating = Data[indx].Bowling_Rating;
//   const WicketKeepingRating = Data[indx].Wicket_Keeping_Rating;
//   const CaptaincyRating = Data[indx].Captaincy_Rating;
//   const BasePrice = Data[indx].Base_Price;
//   const image = Data[indx].Player_Pics;

//   const len = Data.length;

//   console.log(BattingRating);



//   return (
//     <div className="w-[100wv] h-[100vh] mt-25">
//       <div className="bg-slate-300 w-full h-full pt-8">
//         <h1 className="mb-12 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center font-serif">IPL Auction E-Summit'25</h1>


//         <div className="flex flex-row items-center pr-6 pl-6">
//           <LeftButton indx={indx} setIndex={setIndex} len={len}></LeftButton>
//           <div className="flex flex-col w-[50%] text-center gap-1">

//             <div className="text-[40px] font-sans font-semibold">
//               {PlayerName}
//             </div>

//             <div className="w-[400px] h-[400px] rounded-full self-center p-4 overflow-hidden bg-white">
//               <img src={image} className="w-[400px] h-[400px]"></img>
//             </div>

//             <div className="text-center text-[30px] flex flex-row gap-6 self-center">
//               <div className="font-medium">
//                 {Role} , {Country}
//               </div>

//             </div>
              
//             <div className="text-center text-[30px] font-bold">
//              Base Price : {BasePrice}
//             </div>

//           </div>

//           <div className="flex flex-col items-center justify-center w-[60%] h-[60%]">

//             <h1 className="text-[40px] font-sans font-semibold">Stats Of {PlayerName}</h1>

//             <div className="w-[500px] h-[400px] flex flex-row flex-wrap gap-6 items-center justify-center">
//               <div className="w-[170px] h-[170px] flex flex-col items-center justify-center gap-2">
//                 <Percentage Data={BattingRating}></Percentage>
//                 <div className="text-[21px] font-normal font-serif">Batting</div>
//               </div>

//               <div className="w-[170px] h-[170px] flex flex-col items-center justify-center gap-2">
//                 <Percentage Data={BowlingRating}></Percentage>
//                 <div className="text-[21px] font-normal font-serif">Bowling</div>
//               </div>

//               <div className="w-[170px] h-[170px] flex flex-col items-center justify-center gap-2">
//                 <Percentage Data={WicketKeepingRating}></Percentage>
//                 <div className="text-[21px] font-normal font-serif">W-Keeping</div>
//               </div>

//               <div className="w-[170px] h-[170px] flex flex-col items-center justify-center gap-2">
//                 <Percentage Data={CaptaincyRating}></Percentage>
//                 <div className="text-[21px] font-normal font-serif">Captaincy</div>
//               </div>
//             </div>

//             <div>
//               {
//                 BasePrice < 10 &&
//                 <div className="text-[33px] font-bold">

//                   Base Price : {BasePrice} CR
//                 </div>
//               }
//               {
//                 BasePrice > 10 &&
//                 <div className="text-[33px] font-bold">
//                   Base Price : {BasePrice} L
//                 </div>
//               }
//             </div>

//           </div>

//           <RightButton len={len} indx={indx} setIndex={setIndex}></RightButton>

//         </div>
//       </div>


//     </div>
//   );
// }

// export default Display;