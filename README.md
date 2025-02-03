# Next.js router.push Async Race Condition

This repository demonstrates a potential race condition when using the `router.push` method in Next.js. The issue arises when code that depends on the route change executes before the route transition is fully completed.

## Bug

The `bug.js` file contains a component that uses `router.push` to navigate to another page.  However, code after `router.push` assumes the route change has finished, which might not be the case. This could lead to inconsistent behavior or errors.

## Solution

The `bugSolution.js` file demonstrates how to solve this problem using an event listener or a Promise. The solution waits for the route change to complete before executing code that depends on the new route.