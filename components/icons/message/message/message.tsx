import * as React from "react";
import Svg, { Path } from "react-native-svg";

type MessageIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const MessageIcon: React.FC<MessageIconProps> = (props) => {
    if (props.size === "large") return <MessageIconLarge {...props} />;

    if (props.size === "medium") return <MessageIconMedium {...props} />;

    return <MessageIconSmall {...props} />;
};

const MessageIconLarge: React.FC<MessageIconProps> = () => (
    <Svg width={24} height={24} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.996 11h.01M11.995 11h.01M7.995 11h.008"
        />
    </Svg>
);

const MessageIconMedium: React.FC<MessageIconProps> = () => (
    <Svg width={20} height={20} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.25}
            d="M7.084 15.833h-.417c-3.333 0-5-.833-5-5V6.666c0-3.333 1.667-5 5-5h6.667c3.333 0 5 1.667 5 5v4.167c0 3.333-1.667 5-5 5h-.417a.845.845 0 0 0-.667.333L11 17.834c-.55.734-1.45.734-2 0l-1.25-1.666c-.133-.184-.441-.334-.666-.334Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.667}
            d="M13.33 9.167h.008M9.996 9.167h.008M6.662 9.167h.008"
        />
    </Svg>
);

const MessageIconSmall: React.FC<MessageIconProps> = () => (
    <Svg width={18} height={18} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.125}
            d="M6.375 14.25H6c-3 0-4.5-.75-4.5-4.5V6C1.5 3 3 1.5 6 1.5h6c3 0 4.5 1.5 4.5 4.5v3.75c0 3-1.5 4.5-4.5 4.5h-.375a.76.76 0 0 0-.6.3L9.9 16.05c-.495.66-1.305.66-1.8 0l-1.125-1.5a.848.848 0 0 0-.6-.3Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11.997 8.25h.007M8.997 8.25h.007M5.996 8.25h.007"
        />
    </Svg>
);

export default MessageIcon;
