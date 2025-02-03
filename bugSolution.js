```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = async () => {
    const routeChangePromise = new Promise(resolve => {
      router.events.on('routeChangeComplete', resolve);
      router.push('/another-page');
    });
    await routeChangePromise;
    // Code here is guaranteed to run after the route change
    console.log('Route change complete');
  };

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}
```