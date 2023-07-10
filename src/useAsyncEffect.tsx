import { useEffect, useMemo } from 'react';

/**
 * The dependency list for change detection
 */
export type DependencyList = ReadonlyArray<unknown>;

/**
 * The info
 */
export interface EffectInfo {
    /** true if the component is mounted */
    isMounted: boolean;
}

/**
 * Custom hook for improved side effect handling
 * @param effect The callback that is executed as the effect
 * @param deps The dependency list that is used for change detection
 */
export const useAsyncEffect = (
    effect: (info: EffectInfo) => Promise<unknown>,
    deps?: DependencyList,
) => {
    const queue = useMemo(
        () => ({
            queue: Promise.resolve() as Promise<unknown>,
        }),
        [],
    );

    useEffect(() => {
        const info: EffectInfo = { isMounted: true };

        queue.queue = queue.queue.then(() => effect(info));

        return () => {
            info.isMounted = false;
        };
    }, deps);
};
