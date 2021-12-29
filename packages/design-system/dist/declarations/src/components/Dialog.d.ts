import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
declare type DialogProps = React.ComponentProps<typeof DialogPrimitive.Root> & {
    children: React.ReactNode;
};
export declare function Dialog({ children, ...props }: DialogProps): any;
export declare const DialogContent: any;
export declare const DialogTrigger: any;
export declare const DialogClose: any;
export declare const DialogTitle: any;
export declare const DialogDescription: any;
export {};
