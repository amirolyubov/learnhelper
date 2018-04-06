/// <reference types="react" />
import * as React from "react";
export interface ImageProps {
    alt?: string;
    className?: string;
    src?: string;
    size?: string;
}
declare const Image: React.StatelessComponent<ImageProps>;
export default Image;
