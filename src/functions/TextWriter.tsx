import {useEffect, useState} from "react";
import type {ITextWriter} from "./interfaces/ITextWriter.ts";

const TextWriter = ({
                        text,
                        speed = 100,
                        deleteSpeed = 50,
                        pause = 1000,
                        className = "",
                    }: ITextWriter) => {
    const [visibleText, setVisibleText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setVisibleText("");
        setIsDeleting(false);
        setIndex(0);
    }, [text]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting && index < text.length) {
                setVisibleText(text.slice(0, index + 1));
                setIndex(index + 1);
            } else if (isDeleting && index > 0) {
                setVisibleText(text.slice(0, index - 1));
                setIndex(index - 1);
            } else {
                setTimeout(() => {
                    setIsDeleting(!isDeleting);
                }, pause);
            }
        }, isDeleting ? deleteSpeed : speed);

        return () => clearTimeout(timeout);
    }, [index, isDeleting, text, speed, deleteSpeed, pause]);

    return (
        <span className={`font-mono ${className}`}>{visibleText}
            <span className="animate-pulse text-white">|</span>
        </span>
    );
};

export default TextWriter;