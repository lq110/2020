// 整体
import React from "react";
import Slider from "./Slider"; // 轮播图
import LazeImg from "./AllItem";
export default props => {
  // 整体轮播图
  let arrData = [
    {
      id: 1,
      title: 1,
      address:
        "https://raw.githubusercontent.com/lq110/-/master/all/slider01.png"
    },
    {
      id: 2,
      title: 2,
      address:
        "https://raw.githubusercontent.com/lq110/-/master/all/slider02.png"
    },
    {
      id: 3,
      title: 3,
      address:
        "https://raw.githubusercontent.com/lq110/-/master/all/slider03.png"
    },
    {
      id: 4,
      title: 4,
      address:
        "https://raw.githubusercontent.com/lq110/-/master/all/slider04.png"
    },
    {
      id: 5,
      title: 5,
      address:
        "https://raw.githubusercontent.com/lq110/-/master/all/slider05.png"
    }
  ];
  return (
    <div className="All">
      {/* 轮播图 */}
      <Slider arrdata={arrData} />
      {/* 懒加载图片 */}
      <LazeImg />
    </div>
  );
};
