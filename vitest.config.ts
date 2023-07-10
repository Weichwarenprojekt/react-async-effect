import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: [
            './src/test/setup.ts'
        ],
        clearMocks: true,
        coverage: {
            provider: 'v8',
            reporter: ['html', 'cobertura'],
            include: ['src'],
            exclude: [
                'src/tests/**',
                'src/**/*.test.ts',
                'src/**/*.test.tsx',
                'src/**/*.spec.ts',
                'src/**/*.spec.tsx',
                'src/**/*.d.ts',
                'src/**/*.model.ts',
            ],
            all: true,
        },
        testTimeout: 40000,
    },
});
