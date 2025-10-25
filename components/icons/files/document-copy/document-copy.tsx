import * as React from "react";
import Svg, { Path } from "react-native-svg";

type DocumentCopyIconProps = {
    size?: "small" | "medium" | "large" | "extra-large";
    color?: string;
};

const DocumentCopyIcon: React.FC<DocumentCopyIconProps> = (props) => {
    if (props.size === "extra-large") return <DocumentCopyIconExtraLarge {...props} />

    if (props.size === "large") return <DocumentCopyIconLarge {...props} />

    if (props.size === "medium") return <DocumentCopyIconMedium {...props} />

    return <DocumentCopyIconSmall {...props} />
};

const DocumentCopyIconExtraLarge: React.FC<DocumentCopyIconProps> = () => (
    <Svg width={24} height={24} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 13.4v3c0 4-1.6 5.6-5.6 5.6H7.6c-4 0-5.6-1.6-5.6-5.6v-3.8C2 8.6 3.6 7 7.6 7h3"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 13.4h-3.2c-2.4 0-3.2-.8-3.2-3.2V7l6.4 6.4ZM11.6 2h4M7 5c0-1.66 1.34-3 3-3h2.62M22 8v6.19c0 1.55-1.26 2.81-2.81 2.81M22 8h-3c-2.25 0-3-.75-3-3V2l6 6Z"
        />
    </Svg>
)

const DocumentCopyIconLarge: React.FC<DocumentCopyIconProps> = () => (
    <Svg width={20} height={20} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M14.167 11.167v2.5c0 3.333-1.333 4.667-4.667 4.667H6.334C3 18.334 1.667 17 1.667 13.667V10.5c0-3.333 1.333-4.667 4.667-4.667h2.5"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M14.166 11.167H11.5c-2 0-2.667-.667-2.667-2.667V5.833l5.333 5.334ZM9.666 1.667h3.333M5.833 4.167c0-1.384 1.117-2.5 2.5-2.5h2.183M18.334 6.667v5.158a2.344 2.344 0 0 1-2.342 2.342M18.333 6.667h-2.5c-1.875 0-2.5-.625-2.5-2.5v-2.5l5 5Z"
        />
    </Svg>
)

const DocumentCopyIconMedium: React.FC<DocumentCopyIconProps> = () => (
    <Svg width={18} height={18} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M12.75 10.05v2.25c0 3-1.2 4.2-4.2 4.2H5.7c-3 0-4.2-1.2-4.2-4.2V9.45c0-3 1.2-4.2 4.2-4.2h2.25"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M12.75 10.05h-2.4c-1.8 0-2.4-.6-2.4-2.4v-2.4l4.8 4.8ZM8.7 1.5h3M5.25 3.75A2.247 2.247 0 0 1 7.5 1.5h1.965M16.5 6v4.643a2.11 2.11 0 0 1-2.107 2.107M16.5 6h-2.25C12.562 6 12 5.437 12 3.75V1.5L16.5 6Z"
        />
    </Svg>
)

const DocumentCopyIconSmall: React.FC<DocumentCopyIconProps> = () => (
    <Svg width={14} height={14} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.875}
            d="M9.917 7.817v1.75c0 2.333-.933 3.266-3.267 3.266H4.434c-2.334 0-3.267-.933-3.267-3.266V7.35c0-2.333.933-3.267 3.267-3.267h1.75"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.875}
            d="M9.917 7.817H8.05c-1.4 0-1.866-.467-1.866-1.867V4.083l3.733 3.734ZM6.767 1.167H9.1M4.083 2.917c0-.969.782-1.75 1.75-1.75h1.528M12.834 4.667v3.61a1.64 1.64 0 0 1-1.64 1.64M12.833 4.667h-1.75c-1.312 0-1.75-.438-1.75-1.75v-1.75l3.5 3.5Z"
        />
    </Svg>
)

export default DocumentCopyIcon;