import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
    themeConfig: {
        title: '@pigjs/utils'
    },
    outputPath: 'docs-dist',
    resolve: {
        docDirs: ['docs'],
        atomDirs: [
            { type: 'utils', dir: 'packages/type/src' },
            { type: 'utils', dir: 'packages/practical/src' }
        ]
    },
    alias: {
        '@pigjs/type-utils': path.join(__dirname, 'packages/type/src/index'),
        '@pigjs/practical-utils': path.join(__dirname, 'packages/practical-utils/src/index')
    },
    lessLoader: {
        javascriptEnabled: true,
        math: 'always'
    }
    // more config: https://d.umijs.org/config
});
