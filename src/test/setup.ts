import * as matchers from '@testing-library/jest-dom/matchers';
import { configure } from '@testing-library/react';

// increase wait-for timeout
configure({ asyncUtilTimeout: 20000 });

// extends the vitest expect method with methods from react-testing-library
expect.extend(matchers);
