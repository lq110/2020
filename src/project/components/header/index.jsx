import React from "react";
import "./header.scss";

export default props => {
  return (
    <header className="header">
      <h1>
        洛阳装修李先生：15978678836
        <br />
        价格根据需求：面议 装修区域：洛阳市
        <br />
        下面是部分装修效果 可到实体店看实际样式
      </h1>
      <img
        src="https://raw.githubusercontent.com/lq110/-/master/owner/owner.jpg"
        alt=""
      />
    </header>
  );
};
