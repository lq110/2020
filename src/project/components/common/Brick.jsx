// 铺砖
import React from "react";
import Slider from "./Slider"; //轮播图
// 整体轮播图
let arrData = [
  {
    id: 1,
    title: 1,
    address:
      "https://raw.githubusercontent.com/lq110/-/master/brick/slider1.png"
  },
  {
    id: 2,
    title: 2,
    address:
      "https://raw.githubusercontent.com/lq110/-/master/brick/slider2.png"
  }
];
export default props => {
  return (
    <div className="All">
      {/* 轮播图 */}
      <Slider arrdata={arrData} />
      铺砖
    </div>
  );
};
