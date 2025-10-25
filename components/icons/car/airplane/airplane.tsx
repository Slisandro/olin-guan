import * as React from "react";
import Svg, { Path } from "react-native-svg";

type AirplaneIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const AirplaneIcon: React.FC<AirplaneIconProps> = (props) => {
    if (props.size === "large") return <AirplaneIconLarge {...props} />

    if (props.size === "medium") return <AirplaneIconMedium {...props} />

    return <AirplaneIconSmall {...props} />
};

const AirplaneIconLarge: React.FC<AirplaneIconProps> = () => (
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
            d="m9.03 21.69 2.33-1.96c.35-.3.93-.3 1.28 0l2.33 1.96c.54.27 1.2 0 1.4-.58l.44-1.33c.11-.32 0-.79-.24-1.03l-2.27-2.28c-.17-.16-.3-.48-.3-.71v-2.85c0-.42.31-.62.7-.46l4.91 2.12c.77.33 1.4-.08 1.4-.92v-1.29c0-.67-.5-1.44-1.12-1.7L14.3 8.25a.554.554 0 0 1-.3-.46v-3c0-.94-.69-2.05-1.53-2.48-.3-.15-.65-.15-.95 0-.84.43-1.53 1.55-1.53 2.49v3c0 .18-.14.39-.3.46l-5.58 2.41c-.62.25-1.12 1.02-1.12 1.69v1.29c0 .84.63 1.25 1.4.92l4.91-2.12c.38-.17.7.04.7.46v2.85c0 .23-.13.55-.29.71l-2.27 2.28c-.24.24-.35.7-.24 1.03l.44 1.33c.18.58.84.86 1.39.58Z"
        />
    </Svg>
)

const AirplaneIconMedium: React.FC<AirplaneIconProps> = () => (
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
            d="m7.525 18.075 1.941-1.633a.852.852 0 0 1 1.067 0l1.942 1.633c.45.225 1 0 1.166-.483l.367-1.109c.092-.266 0-.658-.2-.858l-1.892-1.9a.926.926 0 0 1-.25-.592v-2.375c0-.35.258-.516.583-.383l4.092 1.767c.642.275 1.167-.067 1.167-.767V10.3c0-.558-.417-1.2-.933-1.417l-4.659-2.008a.462.462 0 0 1-.25-.383v-2.5c0-.784-.575-1.709-1.275-2.067a.882.882 0 0 0-.791 0C8.9 2.283 8.325 3.217 8.325 4v2.5c0 .15-.117.325-.25.383l-4.65 2.009c-.517.208-.934.85-.934 1.408v1.075c0 .7.525 1.042 1.167.767l4.092-1.767c.316-.142.583.033.583.383v2.375a.963.963 0 0 1-.242.592l-1.891 1.9c-.2.2-.292.583-.2.858l.366 1.109c.15.483.7.716 1.159.483Z"
        />
    </Svg>
)

const AirplaneIconSmall: React.FC<AirplaneIconProps> = () => (
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
            d="m6.772 16.268 1.748-1.47a.767.767 0 0 1 .96 0l1.747 1.47c.405.202.9 0 1.05-.435l.33-.998a.83.83 0 0 0-.18-.772l-1.702-1.71a.834.834 0 0 1-.225-.533V9.683c0-.315.232-.465.525-.345l3.682 1.59c.578.247 1.05-.06 1.05-.69V9.27c0-.502-.375-1.08-.84-1.275l-4.192-1.807a.416.416 0 0 1-.225-.345v-2.25c0-.705-.518-1.538-1.148-1.86a.794.794 0 0 0-.712 0c-.63.322-1.148 1.162-1.148 1.867v2.25a.416.416 0 0 1-.225.345L3.082 8.003c-.465.187-.84.765-.84 1.267v.968c0 .63.473.937 1.05.69l3.683-1.59c.285-.128.525.03.525.345v2.137a.867.867 0 0 1-.218.533l-1.702 1.71c-.18.18-.263.525-.18.772l.33.998c.135.435.63.645 1.042.435Z"
        />
    </Svg>
)

export default AirplaneIcon;