import * as React from "react";
import Svg, { Path } from "react-native-svg";

type DocumentIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const DocumentIcon: React.FC<DocumentIconProps> = (props) => {

    if (props.size === "large") return <DocumentIconLarge {...props} />

    if (props.size === "medium") return <DocumentIconMedium {...props} />

    return <DocumentIconSmall {...props} />
};

const DocumentIconLarge: React.FC<DocumentIconProps> = () => (
    <Svg width={24} height={24} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h5"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M22 10h-4c-3 0-4-1-4-4V2l8 8Z"
        />
    </Svg>
)

const DocumentIconMedium: React.FC<DocumentIconProps> = () => (
    <Svg width={20} height={20} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M18.334 8.333V12.5c0 4.166-1.667 5.833-5.834 5.833h-5c-4.166 0-5.833-1.666-5.833-5.833v-5c0-4.167 1.667-5.833 5.833-5.833h4.167"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M18.334 8.333H15c-2.5 0-3.333-.833-3.333-3.333V1.667l6.667 6.666Z"
        />
    </Svg>
)

const DocumentIconSmall: React.FC<DocumentIconProps> = () => (
    <Svg width={18} height={18} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M16.5 7.5v3.75c0 3.75-1.5 5.25-5.25 5.25h-4.5C3 16.5 1.5 15 1.5 11.25v-4.5C1.5 3 3 1.5 6.75 1.5h3.75"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M16.5 7.5h-3c-2.25 0-3-.75-3-3v-3l6 6Z"
        />
    </Svg>
)

export default DocumentIcon;