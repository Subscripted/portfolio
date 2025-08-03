import type {ILinkRef} from "../interfaces/ILinkRef.ts";


function LinkRef({text, href, className}: ILinkRef) {
    return (
        <>
            <a href={href} className={className}>
                {text}
            </a>
        </>
    )
}

export default LinkRef;