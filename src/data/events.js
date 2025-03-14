import BuildAndPitch from "../assets/Contests/BuildAndPitch.png";
import BizQuiz from "../assets/Contests/BizQuiz.png";
import SpeakerSessions from "../assets/Contests/SpeakerSession.png";
import BargainBattles from "../assets/Contests/BargainBattles.png";
import Bazaar from "../assets/Contests/Bazaar.png";
import IPLAuction from "../assets/Contests/IPLAuction.png";
import FundingConclave from "../assets/Contests/FundingConclave.png";
import NetworkingArena from "../assets/Contests/NetworkArena.png";
import Hackathon from "../assets/Contests/Hackathon.png";
import CaseStudy from "../assets/Contests/CaseStudy.png";
import TreasureHunt from "../assets/Contests/treasurehunt.png";

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
    Time: "12:45 p.m.",
    team: { max: 5, min: 1 },
  },
  {
    EventName: "BizQuiz",
    EventType: "Business & Strategy",
    About:
      "Test your business acumen and strategic thinking in this thrilling quiz competition. Covering topics from startups to global markets, it's a must for business enthusiasts.",
    EventPhoto: BizQuiz,
    EventLink: "bizquiz",
    free: true,
    Date: "Round 1 from 16th March",
    Time: "10:10 Am",
    team: { max: 3, min: 1 },
  },
  {
    EventName: "Speaker Sessions",
    EventType: "Knowledge & Inspiration",
    About:
      "Gain insights from industry leaders, successful entrepreneurs, and influential personalities. A chance to interact with and learn from the best in the business world.",
    EventPhoto: SpeakerSessions,
    EventLink: "speaker-sessions",
    free: true,
    Date: "March 22",
    Time: "12:45 p.m."
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
    team: { max: 2, min: 1 },
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
    team: { max: 4, min: 1 },
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
  },
  {
    EventName: "Funding Conclave",
    EventType: "Investment & Growth",
    About:
      "Startups pitch their ideas to a panel of investors, VCs, and industry experts. A chance to secure funding and valuable mentorship.",
    EventPhoto: FundingConclave,
    EventLink: "funding-conclave",
    free: false,
    Date: "22nd March",
    Time: "10:10 Am",
  },
  {
    EventName: "Networking Arena",
    EventType: "Connections & Growth",
    About:
      "An exclusive space for entrepreneurs, investors, and professionals to connect, share ideas, and explore collaborations.",
    EventPhoto: NetworkingArena,
    EventLink: "networking-arena",
    free: true,
    Date: "22nd March",
    Time: "10:10 Am",
  },
  {
    EventName: "Hackathon",
    EventType: "Tech & Innovation",
    About:
      "A 24-hour coding marathon where developers, designers, and entrepreneurs collaborate to build innovative solutions.",
    EventPhoto: Hackathon,
    EventLink: "hackathon",
    free: true,
    Date: "Round 1 from 16th March",
    Time: "10:10 Am",
    team: { max: 5, min: 2 },
  },
  {
    EventName: "Case Study Competition",
    EventType: "Strategy & Analysis",
    About:
      "Participants analyze real-world business cases, propose strategic solutions, and compete to be the best problem-solvers.",
    EventPhoto: CaseStudy,
    EventLink: "case-study",
    free: true,
    Date: "Round 1 from 16th March",
    Time: "10:10 Am",
    team: { max: 4, min: 1 },
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
      team: { max: 4, min: 1 }
    },
    
];
