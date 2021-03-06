// 橱柜
import React from "react";
import Slider from "./Slider"; // 轮播图
import CupboardItem from "./CupboardItem"; // 懒加载图片
// 整体轮播图
let arrData = [
  {
    id: 1,
    title: 1,
    address:
      "https://raw.githubusercontent.com/lq110/-/master/cupboard/slider01.png"
  },
  {
    id: 2,
    title: 2,
    address:
      "https://raw.githubusercontent.com/lq110/-/master/cupboard/slider02.png"
  },
  {
    id: 3,
    title: 3,
    address:
      "https://raw.githubusercontent.com/lq110/-/master/cupboard/slider03.png"
  }
];
export default props => {
  return (
    <div className="All">
      {/* 轮播图 */}
      <Slider arrdata={arrData} />
      {/* 懒加载图片 */}
      <CupboardItem />
    </div>
  );
};
