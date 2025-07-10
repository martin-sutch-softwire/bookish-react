import type { Book } from './Book';
import type { Copy } from './Copy';

export type Column = {
    key: string;
    label: string;
    content: (a: Book | Copy) => string;
    button: {
        label: string;
        action: string;
    };
    isButton: boolean;
};
