import React from "react";
import All from "../common/All"; // 整体
import Cupboard from "../common/Cupboard"; //橱柜
import Brick from "../common/Brick"; // 铺砖
import Suspended from "../common/Suspended"; //吊顶
import { Tabs } from "antd";
import "./main.scss";
// console.log(Tabs);
var TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}
export default props => {
  return (
    <main className="main">
      <Tabs className="header-tabs" defaultActiveKey="1" onChange={callback}>
        <TabPane tab="整体" key="1">
          {/* 整体 */}
          <All />
        </TabPane>
        <TabPane tab="铺砖" key="2">
          {/* 铺砖 */}
          <Brick />
        </TabPane>
        <TabPane tab="橱柜" key="3">
          {/* 橱柜 */}
          <Cupboard />
        </TabPane>
        <TabPane tab="吊顶" key="4">
          {/* 吊顶 */}
          <Suspended />
        </TabPane>
      </Tabs>
    </main>
  );
};
