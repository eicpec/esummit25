"use client";
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

const Label = React.forwardRef(({ className, ...props }, ref) => {
  // Combine class names manually
  const combinedClasses = `
    text-sm font-medium text-black dark:text-white leading-none 
    peer-disabled:cursor-not-allowed peer-disabled:opacity-70
    hover:text-orange-500 dark:hover:text-green-500 transition-colors duration-200
    ${className || ""}
  `;

  return (
    <LabelPrimitive.Root
      ref={ref}
      className={combinedClasses.trim()} // Trim to remove extra spaces
      {...props}
    />
  );
});
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };