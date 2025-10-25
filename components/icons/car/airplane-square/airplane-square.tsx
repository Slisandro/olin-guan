import * as React from "react";
import Svg, { Path } from "react-native-svg";

type AirplaneSquareIconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const AirplaneSquareIcon: React.FC<AirplaneSquareIconProps> = (props) => {
    if (props.size === "large") return <AirplaneSquareIconLarge {...props} />

    if (props.size === "medium") return <AirplaneSquareIconMedium {...props} />

    return <AirplaneSquareIconSmall {...props} />
};

const AirplaneSquareIconLarge: React.FC<AirplaneSquareIconProps> = () => (
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
            d="m9.86 19 1.68-1.42c.25-.21.67-.21.93 0L14.14 19c.39.2.87 0 1.01-.42l.32-.96c.08-.23 0-.57-.17-.74l-1.64-1.65a.827.827 0 0 1-.21-.51v-1.85c0-.42.31-.62.7-.46l3.35 1.44c.55.24 1.01-.06 1.01-.66v-.93c0-.48-.36-1.04-.81-1.23l-3.94-1.7a.534.534 0 0 1-.3-.46V6.8c0-.68-.5-1.48-1.1-1.79a.763.763 0 0 0-.69 0c-.61.3-1.1 1.11-1.1 1.79v2.07c0 .18-.14.39-.3.46l-3.94 1.7c-.44.19-.81.75-.81 1.23v.93c0 .6.45.9 1.01.66l3.35-1.44c.38-.17.7.04.7.46v1.85c0 .17-.1.4-.21.51L8.7 16.87c-.17.17-.25.51-.17.74l.32.96c.14.43.61.63 1.01.43Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
        />
    </Svg>
)

const AirplaneSquareIconMedium: React.FC<AirplaneSquareIconProps> = () => (
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
            d="m8.216 15.833 1.4-1.183a.638.638 0 0 1 .775 0l1.392 1.183c.325.167.725 0 .842-.35l.266-.8a.663.663 0 0 0-.141-.616l-1.367-1.375a.69.69 0 0 1-.175-.425v-1.542c0-.35.258-.517.583-.383l2.792 1.2c.458.2.842-.05.842-.55v-.775c0-.4-.3-.867-.675-1.025l-3.284-1.417a.445.445 0 0 1-.25-.383V5.667c0-.567-.416-1.234-.916-1.492a.635.635 0 0 0-.575 0c-.509.25-.917.925-.917 1.492v1.725c0 .15-.117.325-.25.383L5.275 9.192c-.367.158-.675.625-.675 1.025v.775c0 .5.375.75.841.55l2.792-1.2c.317-.142.583.033.583.383v1.542a.697.697 0 0 1-.175.425L7.25 14.058c-.142.142-.209.425-.142.617l.267.8c.116.358.508.525.841.358Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M7.5 18.333h5c4.167 0 5.834-1.666 5.834-5.833v-5c0-4.167-1.667-5.833-5.834-5.833h-5c-4.166 0-5.833 1.666-5.833 5.833v5c0 4.166 1.667 5.833 5.833 5.833Z"
        />
    </Svg>
)

const AirplaneSquareIconSmall: React.FC<AirplaneSquareIconProps> = () => (
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
            d="m7.395 14.25 1.26-1.065a.574.574 0 0 1 .697 0l1.253 1.065c.292.15.652 0 .757-.315l.24-.72a.597.597 0 0 0-.127-.555l-1.23-1.238a.62.62 0 0 1-.158-.382V9.652c0-.315.233-.465.525-.345l2.513 1.08c.412.18.757-.045.757-.495v-.697c0-.36-.27-.78-.607-.923L10.32 6.997a.4.4 0 0 1-.225-.345V5.1c0-.51-.375-1.11-.825-1.343a.572.572 0 0 0-.518 0c-.457.225-.825.833-.825 1.343v1.552a.416.416 0 0 1-.225.345L4.747 8.272c-.33.143-.607.563-.607.923v.697c0 .45.337.675.757.495l2.513-1.08c.285-.127.525.03.525.345v1.388c0 .127-.075.3-.158.382l-1.252 1.23c-.128.128-.188.383-.128.555l.24.72a.538.538 0 0 0 .758.323Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M6.75 16.5h4.5c3.75 0 5.25-1.5 5.25-5.25v-4.5C16.5 3 15 1.5 11.25 1.5h-4.5C3 1.5 1.5 3 1.5 6.75v4.5C1.5 15 3 16.5 6.75 16.5Z"
        />
    </Svg>
)

export default AirplaneSquareIcon;