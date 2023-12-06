import { ReactElement, ReactNode } from "react";

interface SectionContainerProps {
    id: string
    children: ReactNode
    className: string
}
export const SectionContainer = ({ id, children, className = "" }: SectionContainerProps) => {
    return (
        <section id={id} className={`${className && className}`}>
            {children}
        </section>
    );
};