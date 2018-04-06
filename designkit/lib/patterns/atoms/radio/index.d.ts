/// <reference types="react" />
import * as React from 'react';
/**
 * @name Radio
 */
export interface RadioProps {
    /** @name Label Text @default Lorem Ipsum */ labelText?: string;
    /** @name Group Name @default radio1 */ groupName?: string;
    /** @name Value @default value */ value?: string;
    /** @name Checked @default false */ checked?: boolean;
    /** @name Disabled @default false */ disabled?: boolean;
    /** @name Handle Change @hidden */ handleChange?: React.EventHandler<React.ChangeEvent<HTMLInputElement>>;
}
declare const Radio: React.StatelessComponent<RadioProps>;
export default Radio;
