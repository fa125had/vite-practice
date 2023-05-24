import React from 'react';
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div>
      <h1>Pocket Counter</h1>
      <h2>Welcome, Please Login</h2>
      <Outlet />
    </div>
  )
}
