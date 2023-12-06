# Illustration of useMemo

Note: React StrickMode has been removed from main.jsx as double messages were impacting clarity.

Open the browser console, keep clicking on "New Number", notice that when the random number is repeated, the memoized value is used and the slowCalculation function is not called.

## References
* https://www.joshwcomeau.com/react/why-react-re-renders/
* https://www.joshwcomeau.com/react/usememo-and-usecallback/
* https://react.dev/reference/react/useMemo
