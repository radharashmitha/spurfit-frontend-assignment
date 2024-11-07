// import React, { useState } from "react";
// import "./Header.css";
// import Logo from "../../assets/logo.png";
// import Bars from "../../assets/bars.png";
// import { Link } from "react-scroll";

// const Header = () => {
//   const mobile = window.innerWidth <= 768 ? true : false;
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="header">
//       <img src={Logo} alt="" className="logo" />

//       {menuOpen === false && mobile === true ? (
//         <div
//           style={{
//             backgroundColor: "var(--appColor)",
//             padding: "0.5rem",
//             borderRadius: "5px",
//           }}
//           onClick={() => {
//             setMenuOpen(true);
//           }}
//         >
//           <img src={Bars} style={{ width: "1.5rem", height: "1.5rem" }} alt=""/>
//         </div>
//       ) : (
//         <ul className="header-menu">
//           <li>
//             <Link
//               to="home"
//               span={true}
//               smooth={true}
//               onClick={() => setMenuOpen(false)}
//               activeClass={true}
//             >
//               Home
//             </Link>
//           </li>
//           <li onClick={() => setMenuOpen(false)}>
//             <Link
//               to="programs"
//               span={true}
//               smooth={true}
//               onClick={() => setMenuOpen(false)}
//             >
//               Programs
//             </Link>
//           </li>

//           <li>
//             <Link
//               to="mealplans"
//               span={true}
//               smooth={true}
//               onClick={() => setMenuOpen(false)}
//             >
//               mealplans
//             </Link>
//           </li>

//           <li>
//             <Link
//               to="reasons"
//               span={true}
//               smooth={true}
//               onClick={() => setMenuOpen(false)}
//             >
//               Why us
//             </Link>
//           </li>

//           <li>
//             <Link
//               to="plans"
//               span={true}
//               smooth={true}
//               onClick={() => setMenuOpen(false)}
//             >
//               Plans
//             </Link>
//           </li>

//           <li>
//             <Link
//               to="testimonials"
//               span={true}
//               smooth={true}
//               onClick={() => setMenuOpen(false)}
//             >
//               Testimonials
//             </Link>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Header;
import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="Logo" className="logo" />

      {menuOpen === false && mobile ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpen(true)}
        >
          <img src={Bars} style={{ width: "1.5rem", height: "1.5rem" }} alt="Menu Icon"/>
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link to="home" span={true} smooth={true} onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="programs" span={true} smooth={true} onClick={() => setMenuOpen(false)}>
              Programs
            </Link>
          </li>
          <li>
            <Link to="mealplans" span={true} smooth={true} onClick={() => setMenuOpen(false)}>
              Meal Plans
            </Link>
          </li>
          <li>
            <Link to="ai-copilot" span={true} smooth={true} onClick={() => setMenuOpen(false)}>
              AI Copilot
            </Link>
          </li>
          <li>
            <Link to="wearable-integration" span={true} smooth={true} onClick={() => setMenuOpen(false)}>
              Wearable Integration
            </Link>
          </li>
          <li>
            <Link to="global-reach" span={true} smooth={true} onClick={() => setMenuOpen(false)}>
              Global Reach
            </Link>
          </li>
          <li>
            <Link to="white-label" span={true} smooth={true} onClick={() => setMenuOpen(false)}>
              White Label
            </Link>
          </li>
          <li>
            <Link to="plans" span={true} smooth={true} onClick={() => setMenuOpen(false)}>
              Plans
            </Link>
          </li>
          <li>
            <Link to="testimonials" span={true} smooth={true} onClick={() => setMenuOpen(false)}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="join" span={true} smooth={true} onClick={() => setMenuOpen(false)}>
              Join
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
