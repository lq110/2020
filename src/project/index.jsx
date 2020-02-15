import React, { Component } from "react";
import Header from "./components/header/"; // 头部
import Main from "./components/main/"; // 内容
import Footer from "./components/footer/"; //底部
// 根目录
export default props => {
  return (
    <div>
      {/* 头部组件 */}
      <Header />
      {/* 内容 */}
      <Main />
      {/* 底部 */}
      <Footer />
    </div>
  );
};
