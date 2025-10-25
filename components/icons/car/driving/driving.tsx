import * as React from "react";
import Svg, { Path } from "react-native-svg";

type DrivingIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const DrivingIcon: React.FC<DrivingIconProps> = (props) => {
    if (props.size === "large") return <DrivingIconLarge {...props} />

    if (props.size === "medium") return <DrivingIconMedium {...props} />

    return <DrivingIconSmall {...props} />
};

const DrivingIconLarge: React.FC<DrivingIconProps> = () => (
    <Svg
        width={24}
        height={24}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M14.55 2h-5.1c-1.8 0-2.2.9-2.43 2.01L6.2 7.93h11.6l-.82-3.92C16.75 2.9 16.35 2 14.55 2Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19.24 14.32c.08.85-.6 1.58-1.47 1.58h-1.36c-.78 0-.89-.33-1.03-.75l-.15-.43c-.2-.59-.33-.99-1.38-.99h-3.71c-1.04 0-1.2.45-1.38.99l-.15.43c-.14.41-.25.75-1.03.75H6.22c-.87 0-1.55-.73-1.47-1.58l.41-4.42c.1-1.09.31-1.98 2.21-1.98h9.25c1.9 0 2.11.89 2.21 1.98l.41 4.42ZM6.2 5.75h-.73M18.53 5.75h-.73M7.65 10.83h2.17M14.18 10.83h2.17M12 17v1M12 21v1M3 18l-1 4M21 18l1 4"
        />
    </Svg>
)

const DrivingIconMedium: React.FC<DrivingIconProps> = () => (
    <Svg
        width={20}
        height={20}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M12.123 1.667h-4.25c-1.5 0-1.833.75-2.025 1.675l-.683 3.266h9.667l-.684-3.266c-.191-.925-.525-1.675-2.025-1.675Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M16.032 11.934c.066.708-.5 1.316-1.226 1.316h-1.133c-.65 0-.742-.275-.858-.625l-.125-.358c-.167-.492-.275-.825-1.15-.825H8.448c-.866 0-1 .375-1.15.825l-.125.358c-.116.342-.208.625-.858.625H5.182c-.725 0-1.292-.608-1.225-1.316l.341-3.684c.084-.908.258-1.65 1.842-1.65h7.708c1.583 0 1.758.742 1.842 1.65l.342 3.684ZM5.165 4.792h-.608M15.44 4.792h-.608M6.374 9.025h1.808M11.815 9.025h1.809M10 14.167V15M10 17.5v.833M2.5 15l-.833 3.333M17.5 15l.833 3.333"
        />
    </Svg>
)

const DrivingIconSmall: React.FC<DrivingIconProps> = () => (
    <Svg
        width={18}
        height={18}
        fill="none"
    >
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M10.91 1.5H7.087c-1.35 0-1.65.675-1.823 1.508l-.615 2.94h8.7l-.615-2.94c-.172-.833-.472-1.508-1.822-1.508Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M14.429 10.74c.06.637-.45 1.185-1.103 1.185h-1.02c-.585 0-.667-.248-.772-.563l-.113-.322c-.15-.443-.247-.743-1.035-.743H7.604c-.78 0-.9.338-1.035.743l-.113.323c-.105.307-.187.562-.772.562h-1.02A1.093 1.093 0 0 1 3.56 10.74l.308-3.315c.075-.818.232-1.485 1.657-1.485h6.938c1.425 0 1.582.667 1.657 1.485l.308 3.315ZM4.65 4.313h-.548M13.896 4.313h-.547M5.737 8.123h1.628M10.634 8.123h1.627M9 12.75v.75M9 15.75v.75M2.25 13.5l-.75 3M15.75 13.5l.75 3"
        />
    </Svg>
)

export default DrivingIcon;