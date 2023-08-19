import React from "react";

export const TestContext = React.createContext("test uchun");
export const SetContext = TestContext.Provider;
export const GetContext = TestContext.Consumer;