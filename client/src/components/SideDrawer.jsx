import React, { useState } from "react";
import { Drawer } from "antd";
import { RxAvatar } from "react-icons/rx";
import { LuLogOut } from "react-icons/lu";

const App = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <RxAvatar onClick={showDrawer} size={35} />
      <Drawer width={300} title="Profile" onClose={onClose} open={open}>
        <div className="mb-4 flex gap-4 text-md p-2 hover:bg-slate-100 hover:rounded-lg active:bg-slate-200">
          <RxAvatar size={50} />
          <div className="mt-1">
            <h3>Name Here..</h3>
            <h6>abc@gmail.com</h6>
          </div>
        </div>
        <div className="flex items-center">
          <p className="mr-2 text-lg">Logout</p>
          <LuLogOut size={25} />
        </div>
      </Drawer>
    </>
  );
};
export default App;
