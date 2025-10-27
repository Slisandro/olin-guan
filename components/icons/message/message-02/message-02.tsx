import * as React from "react";
import Svg, { Path } from "react-native-svg";

type Message02IconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const Message02Icon: React.FC<Message02IconProps> = (props) => {
    if (props.size === "large") return <Message02IconLarge {...props} />;

    if (props.size === "medium") return <Message02IconMedium {...props} />;

    return <Message02IconSmall {...props} />;
};

const Message02IconLarge: React.FC<Message02IconProps> = () => (
    <Svg width={24} height={24} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M22 6.25v5.1c0 1.27-.42 2.34-1.17 3.08-.74.75-1.81 1.17-3.08 1.17v1.81c0 .68-.76 1.09-1.32.71l-.97-.64c.09-.31.13-.65.13-1.01V12.4c0-2.04-1.36-3.4-3.4-3.4H5.4c-.14 0-.27.01-.4.02V6.25C5 3.7 6.7 2 9.25 2h8.5C20.3 2 22 3.7 22 6.25Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M15.59 12.4v4.07c0 .36-.04.7-.13 1.01-.37 1.47-1.59 2.39-3.27 2.39H9.47l-3.02 2.01a.671.671 0 0 1-1.05-.56v-1.45c-1.02 0-1.87-.34-2.46-.93-.6-.6-.94-1.45-.94-2.47V12.4c0-1.9 1.18-3.21 3-3.38.13-.01.26-.02.4-.02h6.79c2.04 0 3.4 1.36 3.4 3.4Z"
        />
    </Svg>
);

const Message02IconMedium: React.FC<Message02IconProps> = () => (
    <Svg width={20} height={20} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.25}
            d="M18.334 5.208v4.25c0 1.059-.35 1.95-.975 2.567-.617.625-1.509.975-2.567.975v1.508c0 .567-.633.909-1.1.592l-.808-.534c.075-.258.108-.541.108-.841v-3.392c0-1.7-1.133-2.833-2.833-2.833H4.5c-.116 0-.225.008-.333.017V5.208c0-2.125 1.417-3.542 3.542-3.542h7.083c2.125 0 3.542 1.417 3.542 3.542Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.25}
            d="M12.992 10.333v3.392c0 .3-.033.583-.108.842-.309 1.225-1.325 1.991-2.725 1.991H7.892l-2.517 1.675a.56.56 0 0 1-.875-.466v-1.209c-.85 0-1.558-.283-2.05-.775-.5-.5-.783-1.208-.783-2.058v-3.392c0-1.583.983-2.675 2.5-2.816.108-.009.217-.017.333-.017h5.659c1.7 0 2.833 1.133 2.833 2.833Z"
        />
    </Svg>
);

const Message02IconSmall: React.FC<Message02IconProps> = () => (
    <Svg width={18} height={18} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.125}
            d="M16.5 4.688v3.824c0 .953-.315 1.755-.877 2.31-.555.563-1.358.878-2.31.878v1.357c0 .51-.57.818-.99.533l-.728-.48c.067-.232.098-.487.098-.758V9.3c0-1.53-1.02-2.55-2.55-2.55H4.05c-.105 0-.202.008-.3.015V4.688C3.75 2.774 5.025 1.5 6.938 1.5h6.375c1.912 0 3.187 1.275 3.187 3.188Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.125}
            d="M11.693 9.3v3.052c0 .27-.03.525-.098.758-.277 1.103-1.193 1.793-2.453 1.793h-2.04L4.838 16.41a.503.503 0 0 1-.788-.42v-1.088c-.765 0-1.402-.254-1.845-.697-.45-.45-.705-1.088-.705-1.853V9.3c0-1.425.885-2.407 2.25-2.535.098-.007.195-.015.3-.015h5.093c1.53 0 2.55 1.02 2.55 2.55Z"
        />
    </Svg>
);

export default Message02Icon;
