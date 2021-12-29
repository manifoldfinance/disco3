import React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
declare type PopoverProps = React.ComponentProps<typeof PopoverPrimitive.Root> & {
    children: React.ReactNode;
};
export declare function Popover({ children, ...props }: PopoverProps): any;
export declare const PopoverContent: any;
export declare const PopoverTrigger: any;
export declare const PopoverClose: any;
export {};
