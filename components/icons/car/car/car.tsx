import * as React from "react";
import Svg, { Path } from "react-native-svg";

type CarIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const CarIcon: React.FC<CarIconProps> = (props) => {
    if (props.size === "large") return <CarIconLarge {...props} />

    if (props.size === "medium") return <CarIconMedium {...props} />

    return <CarIconSmall {...props} />
};

const CarIconLarge: React.FC<CarIconProps> = ({ color }) => (
    <Svg
        width={24}
        height={24}
        fill="none"
    >
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15.51 2.83H8.49C6 2.83 5.45 4.07 5.13 5.59L4 11h16l-1.13-5.41c-.32-1.52-.87-2.76-3.36-2.76ZM21.99 19.82c.11 1.17-.83 2.18-2.03 2.18h-1.88c-1.08 0-1.23-.46-1.42-1.03l-.2-.6c-.28-.82-.46-1.37-1.9-1.37H9.44c-1.44 0-1.65.62-1.9 1.37l-.2.6C7.15 21.54 7 22 5.92 22H4.04c-1.2 0-2.14-1.01-2.03-2.18l.56-6.09C2.71 12.23 3 11 5.62 11h12.76c2.62 0 2.91 1.23 3.05 2.73l.56 6.09ZM4 8H3M21 8h-1M12 3v2M10.5 5h3M6 15h3M15 15h3"
        />
    </Svg>
)

const CarIconMedium: React.FC<CarIconProps> = ({ color }) => (
    <Svg
        width={20}
        height={20}
        fill="none"
    >
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M12.925 2.358h-5.85c-2.075 0-2.534 1.034-2.8 2.3l-.942 4.509h13.333l-.941-4.509c-.267-1.266-.725-2.3-2.8-2.3Z"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M18.325 16.517c.092.974-.691 1.816-1.691 1.816h-1.567c-.9 0-1.025-.383-1.183-.858l-.167-.5c-.233-.684-.383-1.142-1.583-1.142H7.867c-1.2 0-1.375.517-1.583 1.142l-.167.5c-.158.475-.283.858-1.183.858H3.367c-1 0-1.783-.841-1.692-1.816l.467-5.075c.117-1.25.358-2.276 2.542-2.276h10.633c2.183 0 2.425 1.025 2.542 2.275l.466 5.075ZM3.333 6.667H2.5M17.5 6.667h-.833M10 2.5v1.667M8.75 4.167h2.5M5 12.5h2.5M12.5 12.5H15"
        />
    </Svg>
)

const CarIconSmall: React.FC<CarIconProps> = ({ color }) => (
    <Svg
        width={18}
        height={18}
        fill="none"
    >
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M11.633 2.123H6.368c-1.868 0-2.28.93-2.52 2.07L3 8.25h12l-.848-4.057c-.24-1.14-.652-2.07-2.52-2.07ZM16.492 14.865c.083.877-.622 1.635-1.522 1.635h-1.41c-.81 0-.923-.345-1.065-.773l-.15-.45c-.21-.614-.345-1.027-1.425-1.027H7.08c-1.08 0-1.237.465-1.425 1.027l-.15.45c-.142.428-.255.773-1.065.773H3.03c-.9 0-1.605-.758-1.522-1.635l.42-4.568c.105-1.125.322-2.047 2.287-2.047h9.57c1.965 0 2.182.922 2.288 2.047l.42 4.568ZM3 6h-.75M15.75 6H15M9 2.25v1.5M7.875 3.75h2.25M4.5 11.25h2.25M11.25 11.25h2.25"
        />
    </Svg>
)

export default CarIcon;