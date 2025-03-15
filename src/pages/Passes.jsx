import React, { useEffect, useState } from "react";
import { passData, passPriorityOrder } from "../data/passData";
import { Link, useNavigate } from "react-router-dom";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Layout from "../layouts/Layout";
import "../styles/passes.css";
// import { buyPass } from "../utils/backend";
import { getUserPassInfo } from "../utils/firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";

const Passes = () => {
    // Separate passes into two categories
    const startupPasses = passData.slice(0, 3); // Last 3 as Startup Passes
    // const studentPasses = passData.slice(0, 4); // First 4 as Student Passes
    const [currentUser, setCurrentUser] = useState(null); // Track logged-in user
    const [passInfo, setPassInfo] = useState("");

    const fetchPassInfo = async () => {
        try {
            const passin = await getUserPassInfo();
            console.log(passin);
            setPassInfo(passin);
        } catch (error) {
            console.error(error.message);
        }
    };

    // Fetch the currently logged-in user
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                fetchPassInfo();
                setCurrentUser(user); // Set the logged-in user
            } else {
                setCurrentUser(null); // No user is logged in
            }
        });

        return () => unsubscribe(); // Cleanup listener on unmount
    }, []);

    const navigate = useNavigate();

    const handleClick = (passLink) => {
        // check if user is logged in
        if (!currentUser) {
            toast.error("Login Required!");
            navigate("/register");
        } 
        // check if the passInfo is coming and the status is NOT rejected - it is either verified or pending
        else if (passInfo && passInfo?.status !== "rejected") {
            console.log("else if case");
            const currentPassIndex = passPriorityOrder.indexOf(passInfo?.passLink);
            const newPassIndex = passPriorityOrder.indexOf(passLink);

            // user tried to upgrade
            if (newPassIndex > currentPassIndex) {
                toast.info(`Thank You ${currentUser?.displayName} for your keen interest in pass upgrade.`);
                setTimeout(() => {
                    toast.info(`Please contact us so that we can assist you further!`);
                    navigate("/contact");
                }, 1000); // Delay of 1000 milliseconds (1 second)
            } 
            // user tried to degrade
            else {
                toast.error(`You already have a ${passInfo?.passName} Pass.`);
            }
        } 
        else {
            console.log("else case");
            navigate(`/pass/${passLink}`);
        }
    };


    return (
        <Layout>
            <div className="wrapper">
                <h1 className="title">Buy E-Summit Pass</h1>
                <p className="subtitle">
                    Grab your entry ticket to PEC's E-Summit happening on 22nd and 23rd March, 2025!
                </p>

                {/* Startup Passes */}
                <h2 className="sectionTitle">Startup Passes</h2>
                <div className="container">
                    {startupPasses.map((pass, i) => (
                        <div className="passCard" key={i}>
                            {pass.sold && <div className="soldOut">Sold Out</div>}
                            <h2 className="passTitle">{pass.type}</h2>
                            <ul className="list">
                                {pass.inclusions.map((item, idx) => (
                                    <li key={idx} className="included"><CheckCircleIcon /> {item}<br /></li>
                                ))}
                                {pass.exclusions.map((item, idx) => (
                                    <li key={idx} className="excluded"><CancelIcon /> {item}<br /></li>
                                ))}
                            </ul>
                            <div className="cardFooter">
                                <div className="cardCoseBox">
                                    <p className="cardCostBoxText">Total Payable</p>
                                    <p className="cardCostBoxPrice">{pass.cost}</p>
                                </div>
                                {(pass?.type === passInfo?.passName && passInfo?.status !== "rejected") ? (
                                    <button className="available">{
                                        passInfo?.status === "pending" ? "Requested" :
                                            passInfo?.status === "verified" ? "Purchased" :
                                                "Buy Now"
                                    }</button>
                                ) : (
                                    <button
                                        onClick={() => handleClick(pass.link)}
                                        className={passPriorityOrder.indexOf(pass.link) > passPriorityOrder.indexOf(passInfo?.passLink) && passInfo?.status !== "rejected" ? "upgrade" : "available"}
                                    >
                                        {passPriorityOrder.indexOf(pass.link) > passPriorityOrder.indexOf(passInfo?.passLink) && passInfo?.status !== "rejected" ? "Upgrade" : passInfo?.status === "rejected" ? "Buy Now" : "Not Valid"}
                                    </button>
                                )}

                                {pass.sold && <button className="unavailable">Not Valid</button>}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Student Passes */}
                {/* <h2 className="sectionTitle">Student Passes</h2>
                <div className="container">
                    {studentPasses.map((pass, i) => (
                        <div className="passCard" key={i}>
                            {pass.sold && <div className="soldOut">Sold Out</div>}
                            <h2 className="passTitle">{pass.type}</h2>
                            <ul className="list">
                                {pass.inclusions.map((item, idx) => (
                                    <li key={idx} className="included"><CheckCircleIcon /> {item}<br /></li>
                                ))}
                                {pass.exclusions.map((item, idx) => (
                                    <li key={idx} className="excluded"><CancelIcon /> {item}<br /></li>
                                ))}
                            </ul>
                            <div className="cardFooter">
                                <div className="cardCoseBox">
                                    <p className="cardCostBoxText">{!pass.sold && "Total Payable"}</p>
                                    <p className="cardCostBoxPrice">{!pass.sold && pass.cost}</p>
                                </div>
                                {!pass.sold && <button onClick={() => handleClick(pass.link)} className="available">{pass?.type?.toString() === passInfo?.passName ? "Purchased" : "Buy Now"}</button>}
                                {pass.sold && <button className="unavailable">Unavailable</button>}
                            </div>
                        </div>
                    ))}
                </div> */}
            </div>
        </Layout>
    );
};

export default Passes;
