```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Missing cleanup function
    return () => clearInterval(interval);
  }, []);

  return <div>Count: {count}</div>;
}
```