import React from "react";

interface ContainerProps {
    children: React.ReactNode;
}

const ContainerPage = (props: ContainerProps) => {
    const { children } = props;
    return (
        <div className="w-full max-w-6xl px-4 pb-20 mx-auto mt-0 md:pb-0 md:px-6">
            {children}
        </div>
    );
}

export default ContainerPage;
