"use client";

import { useState } from "react";

export default function Test() {
  const [count, setCounter] = useState(0);

  return (
    <div className="m-2 flex flex-col items-center justify-center gap-4 rounded-md bg-gray-100 p-3">
      <p className="rounded-md bg-gray-200 p-3">Counter: {count}</p>
    </div>
  );
}
