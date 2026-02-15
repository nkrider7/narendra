"use client";

import LoadingScreen from "@/components/LoadingScreen";

export default function LoadingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LoadingScreen minDuration={3500} />
      {children}
    </>
  );
}
