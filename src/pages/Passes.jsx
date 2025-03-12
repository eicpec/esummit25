import React from "react";
import { passData } from "../data/passData";
import { Link } from "react-router-dom";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Layout from "../layouts/Layout";
import "../styles/passes.css";
// import { buyPass } from "../utils/backend";
import { getCurrentUser } from "../utils/firebaseConfig";

const Passes = () => {
    // Separate passes into two categories
    const startupPasses = passData.slice(4, 7); // Last 3 as Startup Passes
    const studentPasses = passData.slice(0, 4); // First 4 as Student Passes
    const user = getCurrentUser();

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
                                <Link to={`/pass/${pass.link}`}>
                                    {!pass.sold && <button className="available">Buy Now</button>}
                                    {pass.sold && <button className="unavailable">Unavailable</button>}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Student Passes */}
                <h2 className="sectionTitle">Student Passes</h2>
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
                                    <p className="cardCostBoxText">Total Payable</p>
                                    <p className="cardCostBoxPrice">{pass.cost}</p>
                                </div>
                                <Link to={`/pass/${pass.link}`}>
                                    {!pass.sold && <button className="available">Buy Now</button>}
                                    {pass.sold && <button className="unavailable">Unavailable</button>}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Passes;
