import classNames from 'classnames';
import type { CSSProperties, ReactElement } from 'react';
import React from 'react';

export interface NativeProps<S extends string = never> {
    className?: string;
    style?: CSSProperties & Partial<Record<S, string>>;
}

/** 合并 props的 className、style 和 element的 className、style
 *
 * @example
 *
 *  withNativeProps(props,<div className='xxx' style={{width:100}} >xx</div>)
 */
export function withNativeProps<P extends NativeProps>(props: P, element: ReactElement) {
    const p = {
        ...element.props
    };
    if (props.className) {
        p.className = classNames(element.props.className, props.className);
    }
    if (props.style) {
        p.style = {
            ...props.style,
            ...props.style
        };
    }
    return React.cloneElement(element, p);
}
