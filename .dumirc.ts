import { defineConfig } from 'dumi';
import { readdirSync } from 'fs';
import path from 'path';

const headPkgList: string[] = [];
const pkgList = readdirSync(path.join(__dirname, 'packages')).filter(
    (pkg) => pkg.charAt(0) !== '.' && !headPkgList.includes(pkg)
);

const alias = pkgList.reduce((pre, pkg) => {
    if (pkg === 'utils') {
        pre[`@pogjs/${pkg}`] = path.join(__dirname, 'packages', pkg, 'src');
    } else {
        pre[`@pogjs/${pkg}-utils`] = path.join(__dirname, 'packages', pkg, 'src');
    }
    return {
        ...pre
    };
}, {});

const atomDirs = pkgList.map((path) => ({ type: 'docs', dir: `packages/${path}/src` }));

export default defineConfig({
    themeConfig: {
        title: '@pigjs/utils',
        socialLinks: {
            github: 'https://github.com/pigjs/utils'
        }
    },
    logo: 'logo.png',
    metas: [
        {
            property: 'og:description',
            content: '前端实用工具库'
        },
        {
            name: 'keywords',
            content: 'JavaScript,React,utils库,工具库'
        },
        {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        },
        {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black-translucent'
        }
    ],
    styles: [
        `
        .dumi-default-sidebar {
            min-width: 260px !important;
        }
        .dumi-default-sidebar > dl > dt {
            font-size: 16px !important;
            text-transform: none !important;
        }
        .dumi-default-sidebar > dl > dd > a {
            font-size: 14px !important;
            padding: 8px 12px !important;
            line-height: 1.5 !important;
            color: rgba(61, 62, 64, 0.65) !important;
        }
        .dumi-default-content:not([data-no-sidebar]) {
            box-shadow: 0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%), 0 9px 28px 8px rgb(0 0 0 / 5%) !important;
        }
        .dumi-default-sidebar > dl > dd {
            padding: 0 !important;
        }
        .dumi-default-sidebar > dl > dd > a.active {
            color: #004ca1 !important;
            background: #d9ebfb !important;
            border-radius: 6px !important;
            font-weight: 400 !important;
        }
        `
    ],
    outputPath: 'docs-dist',
    resolve: {
        docDirs: ['docs'],
        atomDirs: [...atomDirs]
    },
    alias,
    lessLoader: {
        javascriptEnabled: true,
        math: 'always'
    }
    // more config: https://d.umijs.org/config
});
