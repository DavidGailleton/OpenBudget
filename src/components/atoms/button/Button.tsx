import {ReactElement} from "react";

export function Button({content, className}: {content: string, className: string}): ReactElement {
    return <button className={className}>{content}</button>
}