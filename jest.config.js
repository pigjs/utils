module.exports = {
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    // // 是否显示覆盖率报告
    // collectCoverage: true,
    // 告诉 jest 哪些文件需要经过单元测试测试
    collectCoverageFrom: [
        'packages/**/src/**/*.{ts,tsx}',
        '!packages/**/src/**/__test__/__snapshots__',
        '!packages/**/src/**/demos/**',
        '!packages/**/src/index.ts'
    ],
    // 设置单元测试覆盖率阀值
    coverageThreshold: {
        // 设置单测覆盖率阀值
        global: {
            // 保证每个语句都执行了
            statements: 80,
            // 保证每个函数都调用了
            functions: 80,
            // 保证每个 if 等分支代码都执行了
            branches: 80
            // 保证 每一行都执行了
            // lines:xxx,
        }
    }
};
