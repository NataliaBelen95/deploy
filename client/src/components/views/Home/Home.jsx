import React from "react";

import style from "../Home/Home.module.css";
import img from "../../../assets/landing3.png";
//import SearchBar from "../SearchBar/SearchBar";

const Home = () => {
  // 0 /-> 12-12

  //const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <div className={style.contenedor}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Home;
