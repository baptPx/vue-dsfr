declare const _default: import('vue').DefineComponent<{
    id: {
        type: StringConstructor;
        default(): any;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
    closed: BooleanConstructor;
    closeable: BooleanConstructor;
    small: BooleanConstructor;
}, unknown, unknown, {
    error(): boolean;
    success(): boolean;
    warning(): boolean;
    info(): boolean;
    classes(): {
        'fr-alert--error': any;
        'fr-alert--success': any;
        'fr-alert--warning': any;
        'fr-alert--info': any;
        'fr-alert--sm': any;
    };
}, {
    onClick(): void;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, 'close'[], 'close', import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default(): any;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
    small: BooleanConstructor;
    closed: BooleanConstructor;
    closeable: BooleanConstructor;
}>> & {
    onClose?: (...args: any[]) => any;
}, {
    id: string;
    title: string;
    type: string;
    description: string;
    closed: boolean;
    closeable: boolean;
    small: boolean;
}>
export default _default
