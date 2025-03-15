import BuildAndPitch from "/Contests/BuildAndPitch.png";
import BizQuiz from "/Contests/BizQuiz.png";
import SpeakerSessions from "/Contests/SpeakerSession.png";
import BargainBattles from "/Contests/BargainBattles.png";
import Bazaar from "/Contests/Bazaar.png";
import IPLAuction from "/Contests/IPLAuction.png";
import FundingConclave from "/Contests/FundingConclave.png";
import NetworkingArena from "/Contests/NetworkArena.png";
import Hackathon from "/Contests/Hackathon.png";
import CaseStudy from "/Contests/CaseStudy.png";
import TreasureHunt from "/Contests/treasurehunt.png";

export const events = [
  {
    EventName: "Build & Pitch",
    EventType: "Entrepreneurship",
    About:
      "A platform where innovators and aspiring entrepreneurs pitch their groundbreaking ideas to a panel of judges and investors. Compete for mentorship and funding opportunities.",
    EventPhoto: BuildAndPitch,
    EventLink: "build-and-pitch",
    free: true,
    Date: "14th Feb",
    reg: '14',
    regmon: '02',
    forreg: true,
    Time: "12:45 p.m.",
    team: { max: 5, min: 1 },
    unstopLink: "https://unstop.com/quiz/build-pitch-punjab-engineering-college-pec-chandigarh-1369658",
  },
  {
    EventName: "BizQuiz",
    EventType: "Business & Strategy",
    About:
      "Test your business acumen and strategic thinking in this thrilling quiz competition. Covering topics from startups to global markets, it's a must for business enthusiasts.",
    EventPhoto: BizQuiz,
    EventLink: "bizquiz",
    free: true,
    reg: '16',
    forreg: true,
    regmon: '03',
    Date: "Round 1 from 16th March",
    Time: "10:10 Am",
    team: { max: 3, min: 1 },
    unstopLink: "",
  },
  {
    EventName: "Speaker Sessions",
    EventType: "Knowledge & Inspiration",
    About:
      "Gain insights from industry leaders, successful entrepreneurs, and influential personalities. A chance to interact with and learn from the best in the business world.",
    EventPhoto: SpeakerSessions,
    EventLink: "speaker-sessions",
    free: true,
    forreg : false,
    reg: '23',
    regmon: '03',
    Date: "March 22",
    Time: "12:45 p.m.",
    unstopLink: "",
  },
  {
    EventName: "Bargain Battles",
    EventType: "Negotiation & Strategy",
    About:
      "A fun and intense competition where participants negotiate their way to victory. Hone your persuasion skills and crack the best deals.",
    EventPhoto: BargainBattles,
    EventLink: "bargain-battles",
    free: false,
    Date: "Round 1 from 16th March",
    Time: "10:10 Am",
    forreg : true,
    reg: '16',
    regmon: '03',
    team: { max: 2, min: 1 },
    unstopLink: "https://unstop.com/competitions/bargain-battles-bid-sell-conquer-e-summit25-e-summit25-punjab-engineering-college-pec-chandigarh-1427017",
  },
  {
    EventName: "Bazaar",
    EventType: "Trade & Sales",
    About:
      "An interactive marketplace where participants sell products using unique marketing strategies. A real-world experience in business and sales.",
    EventPhoto: Bazaar,
    EventLink: "bazaar",
    free: false,
    Date: "Round 1 from 16th March",
    Time: "10:10 Am",
    forreg : true,
    reg: '16',
    regmon: '03',
    team: { max: 4, min: 1 },
    unstopLink: "https://unstop.com/competitions/bazzar-the-stock-market-simulator-punjab-engineering-college-pec-chandigarh-1425356",
  },
  {
    EventName: "IPL Auction",
    EventType: "Sports & Strategy",
    About:
      "Put your managerial skills to the test in this simulation of an IPL auction. Bid wisely and create the ultimate cricket team.",
    EventPhoto: IPLAuction,
    EventLink: "ipl-auction",
    free: false,
    Date: "Round 1 from 16th March",
    Time: "10:10 Am",
    team: { max: 4, min: 1 },
    forreg : true,
    reg: '16',
    regmon: '03',
    unstopLink: "https://unstop.com/quiz/ipl-auction-e-summit25-punjab-engineering-college-pec-chandigarh-1424081",
  },
  {
    EventName: "Funding Conclave",
    EventType: "Investment & Growth",
    About:
      "Startups pitch their ideas to a panel of investors, VCs, and industry experts. A chance to secure funding and valuable mentorship.",
    EventPhoto: FundingConclave,
    EventLink: "funding-conclave",
    free: false,
    forreg : false,
    reg: '22',
    regmon: '03',
    Date: "22nd March",
    Time: "10:10 Am",
    unstopLink: "",
  },
  {
    EventName: "Networking Arena",
    EventType: "Connections & Growth",
    About:
      "An exclusive space for entrepreneurs, investors, and professionals to connect, share ideas, and explore collaborations.",
    EventPhoto: NetworkingArena,
    EventLink: "networking-arena",
    forreg : false,
    free: true,
    reg: '22',
    regmon: '03',
    Date: "22nd March",
    Time: "10:10 Am",
    unstopLink: "",
  },
  {
    EventName: "Hack2Hatch",
    EventType: "Tech & Innovation",
    About:
      "A 24-hour coding marathon where developers, designers, and entrepreneurs collaborate to build innovative solutions.",
    EventPhoto: Hackathon,
    EventLink: "hackathon",
    free: true,
    Date: "Round 1 from 16th March",
    Time: "10:10 Am",
    forreg : true,
    reg: '16',
    regmon: '03',
    team: { max: 5, min: 2 },
    unstopLink: "https://unstop.com/hackathons/hack2hatch-e-summit-25-punjab-engineering-college-pec-chandigarh-1424019",
  },
  {
    EventName: "Scale Up Sprint",
    EventType: "Strategy & Analysis",
    About:
      "Participants analyze real-world business cases, propose strategic solutions, and compete to be the best problem-solvers.",
    EventPhoto: CaseStudy,
    EventLink: "case-study",
    free: true,
    Date: "Round 1 from 16th March",
    Time: "10:10 Am",
    forreg : true,
    reg: '18',
    regmon: '03',
    team: { max: 4, min: 1 },
    unstopLink: "https://unstop.com/competitions/scaleup-sprint-e-summit25-punjab-engineering-college-pec-chandigarh-1424120",
  },
  {
    EventName: "Treasure Hunt",
      EventType: "Adventure & Strategy",
      About: 
        "An exhilarating challenge where participants solve riddles and follow clues to uncover hidden treasures. Test your problem-solving skills, teamwork, and strategic thinking in this thrilling quest.",
      EventPhoto: TreasureHunt,
      EventLink: "treasurehunt",
      free: false,
      Date: "Round 1 from 16th March",
      Time: "10:10 Am",
      forreg : true,
      reg: '20',
      regmon: '03',
      team: { max: 4, min: 1 },
      unstopLink: "https://unstop.com/quiz/treasure-hunt-e-summit25-punjab-engineering-college-pec-chandigarh-1426976",
    },
    
];
