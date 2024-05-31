import { type PropsWithChildren } from "react";

const AoyamaLayout: React.FC<PropsWithChildren>
= ({
    children
}) => {
    return (
        <div>
        <h1>Aoyama Layout</h1>
            {children}
        </div>
    );
    }

export default AoyamaLayout;