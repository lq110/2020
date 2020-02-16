// 铺砖
import React from "react";
import Slider from "./Slider"; //轮播图
import BackItem from "./BrickItem"; //图片
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
  },
  {
    id: 3,
    title: 3,
    address:
      "https://raw.githubusercontent.com/lq110/-/master/brick/slider3.png"
  },
  {
    id: 4,
    title: 4,
    address:
      "https://raw.githubusercontent.com/lq110/-/master/brick/slider4.png"
  }
];
export default props => {
  return (
    <div className="All">
      {/* 轮播图 */}
      <Slider arrdata={arrData} />
      {/* 懒加载图片部分 */}
      <BackItem />
    </div>
  );
};
