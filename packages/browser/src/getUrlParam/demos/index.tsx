/**
 * title: 基础用法
 * desc: 获取url参数
 */

import { getUrlParam } from '@pigjs/utils';
import React from 'react';

export default () => {
    const getId = () => {
        const id = getUrlParam('id');
        alert(`id 为 ${id}`);
    };

    return (
        <div>
            <button onClick={getId}>获取id</button>
        </div>
    );
};
