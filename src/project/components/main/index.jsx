import React, { lazy, Suspense } from "react";
import All from "../common/All"; // 整体
import { Tabs } from "antd";
import "../common/style/imgItem.scss";
import "./main.scss";
// 懒加载组件
//  铺砖
let Brick = lazy(() => import("../common/Brick"));
// 厨具
let Cupboard = lazy(() => import("../common/Cupboard"));
// 吊顶
let Suspended = lazy(() => import("../common/Suspended"));

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
          <Suspense fallback="加载中....">
            <Brick />
          </Suspense>
        </TabPane>
        <TabPane tab="橱柜" key="3">
          {/* 橱柜 */}
          <Suspense fallback="加载中....">
            <Cupboard />
          </Suspense>
        </TabPane>
        <TabPane tab="吊顶" key="4">
          {/* 吊顶 */}
          <Suspense fallback="加载中....">
            <Suspended />
          </Suspense>
        </TabPane>
      </Tabs>
    </main>
  );
};
