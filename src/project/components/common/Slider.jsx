// 轮播图
import React from "react";
import { Carousel } from "antd";
import "./style/slider.scss";
let arrData = [
  {
    id: 1,
    title: 1,
    address:
      "http://images.csdn.581zxw.com/attachs/photo/201905/20190511_FAE3033A6DF01FD34036C337905CF5B5.jpg"
  },
  {
    id: 2,
    title: 2,
    address:
      "http://images.csdn.581zxw.com/attachs/photo/201905/20190516_CAA09820146B124355BFBFB130A47788.jpg"
  },
  {
    id: 3,
    title: 3,
    address:
      "http://images.csdn.fzjtzs.com/attachs/photo/201806/20180605_A8B399B5C20A1BA1A2C6BC8A47AF3785.jpg"
  },
  {
    id: 4,
    title: 4,
    address:
      "http://images.csdn.fzjtzs.com/attachs/photo/201806/20180620_E2C0C4C7990F58777480E14938723907.png"
  }
];
export default props => {
  return (
    <Carousel autoplay="true">
      {/* 遍历渲染 */}
      {arrData.map(item => {
        return (
          <div key={item.id}>
            <img src={item.address} alt="" />
            <h3>{item.title}</h3>
          </div>
        );
      })}
    </Carousel>
  );
};
