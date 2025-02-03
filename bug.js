```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/another-page');
    // ... some code that depends on the route change ...
  };

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}
```
This code might lead to unexpected behavior if the code depending on route change executes before the route transition is complete.  The `router.push` method is asynchronous.