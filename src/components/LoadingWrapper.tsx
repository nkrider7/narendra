"use client";

import LoadingScreen from "@/components/LoadingScreen";
import { createContext, useContext, useState } from "react";

const AppReadyContext = createContext(false);

export function useAppReady() {
  return useContext(AppReadyContext);
}

export default function LoadingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isReady, setIsReady] = useState(false);

  return (
    <AppReadyContext.Provider value={isReady}>
      <LoadingScreen minDuration={3500} onComplete={() => setIsReady(true)} />
      {children}
    </AppReadyContext.Provider>
  );
}
