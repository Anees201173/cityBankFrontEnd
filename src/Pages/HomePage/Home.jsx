import React from "react";
import HomeCom_1 from "../../Components/HomePageComponents/HomeCom_1";
import HomeCom_2 from "../../Components/HomePageComponents/HomeCom_2";
import HomeCom_3 from "../../Components/HomePageComponents/HomeCom_3";
import HomeCom_4 from "../../Components/HomePageComponents/HomeCom_4";
import HomeCom_5 from "../../Components/HomePageComponents/HomeCom_5";
import HomeCom_6 from "../../Components/HomePageComponents/HomeCom_6";
import HomeCom_7 from "../../Components/HomePageComponents/HomeCom_7";
import HomeCom_8 from "../../Components/HomePageComponents/HomeCom_8";
import HomeCom_9 from "../../Components/HomePageComponents/HomeCom_9";

function Home() {
  return (
    <div className="bg-[#030305] h-full">
      <div>
        <HomeCom_1 />
      </div>

      <HomeCom_2 />

      <HomeCom_3 />

      <div className="bg-[#030305]">
        <HomeCom_4 />

        <div className="mt-[200px]">
          <HomeCom_5 />

          <div className="mt-[100px]">
            <HomeCom_6 />
          </div>

          <HomeCom_7 />

          <div className="mt-[40px]">
            <HomeCom_8 />
          </div>
        </div>

        <HomeCom_9 />
      </div>
    </div>
  );
}

export default Home;
