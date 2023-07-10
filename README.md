# react-async-effect

`react-async-effect` is a custom React hook that helps you handle side effects in a React component, with improvements for async effects.

## Quickstart

- Install the package using the following command:
    ```bash
    npm install --save @weichwarenprojekt/react-async-effect
    ```
- Import the useAsyncEffect hook in your component file:
    ```ts
    import { useAsyncEffect } from '@weichwarenprojekt/react-async-effect';
    ```
- Use the hook in your component, e.g. for fetching data from an api:
    ```ts
    useAsyncEffect(async () => {
        const response = await fetch('https://api.example.com/data');

        const data = await response.json();
        // Do something with data
    }, []);
    ```


