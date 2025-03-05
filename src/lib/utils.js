/**
 * Combines class names into a single string.
 * @param {...(string | object | Array<string | object>)} classes - Class names or objects with conditional class names.
 * @returns {string} - Combined class names.
 */
export function cn(...classes) {
    return classes
      .flatMap((cls) => {
        if (typeof cls === "string") {
          return cls.split(" "); // Handle space-separated class names
        }
        if (typeof cls === "object" && cls !== null) {
          return Object.entries(cls)
            .filter(([key, value]) => value) // Filter truthy values
            .map(([key]) => key); // Return the keys (class names)
        }
        return [];
      })
      .filter(Boolean) // Remove empty strings
      .join(" "); // Join into a single string
  }
  
  /**
   * Formats a date into a human-readable string.
   * @param {Date} date - The date to format.
   * @returns {string} - Formatted date string.
   */
  export function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  }
  
  /**
   * Delays execution for a specified amount of time.
   * @param {number} ms - The number of milliseconds to delay.
   * @returns {Promise<void>} - A promise that resolves after the delay.
   */
  export function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  // Add more utility functions as needed