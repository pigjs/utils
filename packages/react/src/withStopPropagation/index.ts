import type { ReactElement } from 'react';
import React from 'react';

export type PropagationEvent = keyof GlobalEventHandlersEventMap;

/**
 * 阻止组件事件冒泡
 *
 * @example
 *
 *  withStopPropagation(<div>xxx</div>,['click'])
 */
export function withStopPropagation<E extends PropagationEvent>(
    element: ReactElement,
    events: E[] = ['click'] as unknown as E[]
) {
    const eventToPropRecord: Record<E, string> = {} as Record<E, string>;
    for (const key of events) {
        eventToPropRecord[key] = `on${key}`;
    }
    const props: Record<string, any> = { ...element.props };
    for (const key of events) {
        const prop = eventToPropRecord[key];
        props[prop] = function (e: Event) {
            e.stopPropagation();
            element.props[prop]?.(e);
        };
    }
    return React.cloneElement(element, { ...props });
}
