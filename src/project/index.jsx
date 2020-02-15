import React, { Component } from "react";
import Header from "./components/header/"; // 头部
import Main from "./components/main/"; // 内容
// 根目录
export default props => {
  return (
    <div>
      {/* 头部组件 */}
      <Header />
      {/* 内容 */}
      <Main />
    </div>
  );
};
