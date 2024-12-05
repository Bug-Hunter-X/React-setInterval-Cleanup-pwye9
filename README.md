# React setInterval Memory Leak

This example demonstrates a common error when using `setInterval` within a React component's `useEffect` hook.  Without proper cleanup, the interval continues to run even after the component unmounts, leading to memory leaks and potential performance issues.

The `bug.js` file contains the faulty code, while `bugSolution.js` provides the corrected version with a cleanup function to prevent the memory leak.  This is crucial for ensuring efficient and stable React applications.