// 轮播图
import React from "react";
import { Carousel } from "antd";
import "./style/slider.scss";

export default props => {
  // 结构出数据
  const { arrdata } = props;

  return (
    <Carousel autoplay="true">
      {/* 遍历渲染 */}
      {arrdata.map(item => {
        return (
          <div key={item.id}>
            <img src={item.address} alt="" />
          </div>
        );
      })}
    </Carousel>
  );
};
