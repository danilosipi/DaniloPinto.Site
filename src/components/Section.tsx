import React from 'react';

interface SectionProps {
    index: number;
    children: React.ReactNode;
}

export default function Section({ index, children }: SectionProps) {
    const isOdd = index % 2 === 1;
    return (
        <section role="region" aria-label={`Sessão ${index}`} className={`section ${isOdd ? 'odd' : 'even'}`}>
            <div className="max-w-4xl mx-auto px-4">{children}</div>
        </section>
    );
}
