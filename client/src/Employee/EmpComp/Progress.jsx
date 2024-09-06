import React, { useState } from "react";

import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex, Progress } from "antd";

export const WeeklyProgress = () => {
  const [percent, setPercent] = useState(0);

  const increase = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent + 10;
      if (newPercent > 100) {
        return 100;
      }
      return newPercent;
    });
  };

  const decline = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent - 10;
      if (newPercent < 0) {
        return 0;
      }
      return newPercent;
    });
  };
  return (
    <div className="rounded-lg flex flex-col gap-4 bg-blue-100 p-5">
      <div>
        <div className="flex flex-row gap-6 mt-7 mb-7">
          <div>
            <p className="font-bold">Weekly Progress</p>
            <div className="mt-4">
              <p>Start from</p>
              <p>Aug 3, 2024</p>
            </div>
          </div>
          <div className="">
            <Flex vertical gap="small">
             <Flex vertical gap = "small"> <Progress percent={percent} type="circle" /></Flex>
              <Button.Group className="gap-2">
                <Button onClick={decline} icon={<MinusOutlined />} />
                <Button onClick={increase} icon={<PlusOutlined />} />
              </Button.Group>
            </Flex>
          </div>
        </div>
      </div>
    </div>
  );
};
