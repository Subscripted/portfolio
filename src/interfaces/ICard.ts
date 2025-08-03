export interface ICard {
    className: string;
    title?: string;
    description?: string;
    imageSrc?: string;
    imageAlt?: string;
    href?: string;
    actions?: React.ReactNode;
    children?: React.ReactNode;
}