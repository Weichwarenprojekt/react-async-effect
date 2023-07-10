import React from "react";
import { act, render, waitFor } from '@testing-library/react';
import { useState } from 'react';
import { useAsyncEffect } from './useAsyncEffect';

describe('useAsyncEffect', () => {
    it('prevents parallel execution of the hook', async () => {
        // Execute the hook in a test wrapper
        let setState: undefined | ((input: number) => void);
        const executionOrder: number[] = [];
        let resolve: undefined | (() => void);
        const promise = new Promise<void>((r) => (resolve = r));
        const TestWrapper = () => {
            const [counter, setCounter] = useState(0);
            setState = setCounter;
            useAsyncEffect(async () => {
                executionOrder.push(counter);
                await promise;
                executionOrder.push(counter);
            }, [counter]);
            return <div></div>;
        };
        render(<TestWrapper></TestWrapper>);

        // Trigger 3 changes
        await waitFor(() => expect(setState).not.toBeUndefined());
        await act(() => setState?.(1));
        await act(() => setState?.(2));
        await act(() => setState?.(3));
        await act(() => resolve?.());
        await waitFor(() => expect(executionOrder).toEqual([0, 0, 1, 1, 2, 2, 3, 3]));
    });
});
