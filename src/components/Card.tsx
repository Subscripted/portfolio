import React from "react";
import { twMerge } from "tailwind-merge";

type CardProps = React.ComponentProps<"div"> & {
    image?: string;
};

function Card({ className = "", children, image, ...props }: CardProps) {
    const isImage = Boolean(image);

    return (
        <div
            className={twMerge(
                "rounded-xl shadow-md bg-white border p-4",
                isImage ? "flex items-center " : "flex flex-col",
                className
            )}
            {...props}
        >
            {isImage && (
                <div className="bg-neutral-800 p-2 rounded-lg">
                    <img
                        src={image}
                        alt="card-icon"
                        className="w-10 h-10 object-contain"
                    />
                </div>
            )}
            <div className={isImage ? "flex flex-col" : ""}>{children}</div>
        </div>
    );
}

function CardHeader({ className = "", children, ...props }: React.ComponentProps<"div">) {
    return (
        <div className={twMerge("px-4 ", className)} {...props}>
            {children}
        </div>
    );
}

function CardTitle({ className = "", children, ...props }: React.ComponentProps<"h2">) {
    return (
        <h2 className={twMerge("text-lg font-semibold", className)} {...props}>
            {children}
        </h2>
    );
}

function CardDescription({ className = "", children, ...props }: React.ComponentProps<"p">) {
    return (
        <p className={twMerge("px-4 text-sm", className)} {...props}>
            {children}
        </p>
    );
}

function CardContent({ className = "", children, ...props }: React.ComponentProps<"div">) {
    return (
        <div className={twMerge("p-4", className)} {...props}>
            {children}
        </div>
    );
}

function CardAction({ className = "", children, ...props }: React.ComponentProps<"div">) {
    return (
        <div className={twMerge("flex gap-2 p-4", className)} {...props}>
            {children}
        </div>
    );
}

function CardActions({ className = "", children, ...props }: React.ComponentProps<"div">) {
    return (
        <div className={twMerge("flex justify-end gap-2 p-4 border-t", className)} {...props}>
            {children}
        </div>
    );
}

function CardFooter({ className = "", children, ...props }: React.ComponentProps<"div">) {
    return (
        <div className={twMerge("mt-auto p-4 text-sm text-gray-500 break-words", className)} {...props}>
            {children}
        </div>
    );
}

// Export all components
export {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardAction,
    CardActions,
    CardFooter,
};