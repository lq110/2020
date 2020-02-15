// 吊顶
import React from "react";
import Slider from "./Slider"; // 轮播图
import SuspendedItem from "./SuspendedItem"; //图片
// 整体轮播图
let arrData = [
  {
    id: 1,
    title: 1,
    address: "https://raw.githubusercontent.com/lq110/-/master/all/slider01.png"
  },
  {
    id: 2,
    title: 2,
    address: "https://raw.githubusercontent.com/lq110/-/master/all/slider02.png"
  },
  {
    id: 3,
    title: 3,
    address: "https://raw.githubusercontent.com/lq110/-/master/all/slider03.png"
  }
];
export default props => {
  return (
    <div className="All">
      {/* 轮播图 */}
      <Slider arrdata={arrData} />
      {/* 吊顶每一张图片 */}
      <SuspendedItem />
    </div>
  );
};
