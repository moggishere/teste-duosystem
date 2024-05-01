import React, { useState, useRef, useEffect } from "react";

import * as T from "@radix-ui/react-toast";

const Toast: React.FC<T.ToastProps> = ({}) => {
  return (
    <T.Root open={true}>
      <T.Title>teste toast</T.Title>
      <T.Description>teste description</T.Description>
      <T.Action altText="alt text">teste action</T.Action>
      <T.Close>teste close</T.Close>
    </T.Root>
  );
};

const ToastProvider: React.FC<T.ToastProviderProps> = ({}) => {
  return <T.Provider></T.Provider>;
};

export { Toast, ToastProvider };
