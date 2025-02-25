export declare class ConnectedOverlayScrollHandler {
    constructor(element: any, listener?: () => void);
    bindScrollListener(): void;
    unbindScrollListener(): void;
    destroy(): void;
}

export declare class DomHandler {
    static innerWidth(el: HTMLElement): number;
    static width(el: HTMLElement): number;
    static getWindowScrollTop(): number;
    static getWindowScrollLeft(): number;
    static getOuterWidth(el: HTMLElement, margin: boolean): number;
    static getOuterHeight(el: HTMLElement, margin: boolean): number;
    static getClientHeight(el: HTMLElement, margin: boolean): number;
    static getViewport(): { width: number; height: number };
    static getOffset(el: HTMLElement): { top: any; left: any };
    static index(el: HTMLElement): number;
    static addMultipleClasses(el: HTMLElement, className: string): void;
    static addClass(el: HTMLElement, className: string): void;
    static removeClass(el: HTMLElement, className: string): void;
    static hasClass(el: HTMLElement, className: string): boolean;
    static addStyles(el: HTMLElement, styles: object): void;
    static find(el: HTMLElement, selector: string): any[];
    static findSingle(el: HTMLElement, selector: string): any;
    static createElement(type: string, attributes: object, ...children: any): HTMLElement;
    static setAttributes(el: HTMLElement, attributes: object): void;
    static getAttribute(el: HTMLElement, name: string): any;
    static isAttributeEquals(el: HTMLElement, name: string, value: any): boolean;
    static isAttributeNotEquals(el: HTMLElement, name: string, value: any): boolean;
    static getHeight(el: HTMLElement): number;
    static getWidth(el: HTMLElement): number;
    static absolutePosition(el: HTMLElement, target: HTMLElement): void;
    static relativePosition(el: HTMLElement, target: HTMLElement): void;
    static getParents(el: HTMLElement, parents?: any[]): any[];
    static getScrollableParents(el: HTMLElement): any[];
    static getHiddenElementOuterHeight(el: HTMLElement): number;
    static getHiddenElementOuterWidth(el: HTMLElement): number;
    static getHiddenElementDimensions(el: HTMLElement): { width?: number; height?: number };
    static fadeIn(el: HTMLElement, duration: number): void;
    static fadeOut(el: HTMLElement, duration: number): void;
    static getUserAgent(): string;
    static appendChild(el: HTMLElement, target: HTMLElement): void;
    static scrollInView(container: HTMLElement, item: HTMLElement): void;
    static clearSelection(): void;
    static getSelection(): string | null;
    static calculateScrollbarWidth(): number;
    static getBrowser(): object;
    static resolveUserAgent(): { browser: string; version: string };
    static isVisible(el: HTMLElement): boolean;
    static invokeElementMethod(el: HTMLElement, methodName: string, args: any): void;
    static isExist(el: HTMLElement): boolean;
    static isClient(): boolean;
    static focus(el: HTMLElement, options?: FocusOptions): void;
    static getFocusableElements(el: HTMLElement, selector?: string): any[];
    static getFirstFocusableElement(el: HTMLElement, selector?: string): any;
    static getLastFocusableElement(el: HTMLElement, selector?: string): any;
    static isClickable(el: HTMLElement): boolean;
    static applyStyle(el: HTMLElement, style: any): void;
    static isIOS(): boolean;
    static isAndroid(): boolean;
    static isTouchDevice(): boolean;
    static exportCSV(csv: any, filename: string): void;
}

export declare class ObjectUtils {
    static equals(obj1: any, obj2: any, field: string): boolean;
    static deepEquals(a: any, b: any): boolean;
    static resolveFieldData(data: any, field: string): any;
    static isFunction(obj: any): boolean;
    static filter(value: any, fields: any, filterValue: any): any;
    static reorderArray(value: any, from: number, to: number): void;
    static findIndexInList(value: any, list: any[], dataKey?: string): number;
    static contains(value: any, list: any[]): boolean;
    static insertIntoOrderedArray(item: any, index: number, arr: any[], sourceArr: any[]): void;
    static removeAccents(str: any): string;
    static convertToFlatCase(str: string): string;
    static isEmpty(value: any): boolean;
    static isNotEmpty(value: any): boolean;
    static isFunction(value: any): boolean;
    static isObject(value: any): boolean;
    static isDate(value: any): boolean;
    static isArray(value: any): boolean;
    static isPrintableCharacter(char: string): boolean;
    static findLast(value: any[], callback: () => any): any;
    static findLastIndex(value: any[], callback: () => any): number;
}

export declare namespace ZIndexUtils {
    export function get(el?: HTMLElement): number;
    export function set(key: string, el: HTMLElement, baseZIndex?: number): void;
    export function clear(el: HTMLElement): void;
    export function getCurrent(): number;
}

export declare function UniqueComponentId(prefix?: string): string;

export declare function EventBus(): {
    on(type: string, fn: any): void;
    emit(type: string, evt?: any): void;
    off(type: string, fn: any): void;
};
