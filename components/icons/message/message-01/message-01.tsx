import * as React from "react";
import Svg, { Path } from "react-native-svg";

type Message01IconProps = {
    size?: "small" | "medium" | "large";
    color?: string;
};

const Message01Icon: React.FC<Message01IconProps> = (props) => {
    if (props.size === "large") return <Message01IconLarge {...props} />;

    if (props.size === "medium") return <Message01IconMedium {...props} />;

    return <Message01IconSmall {...props} />;
};

const Message01IconLarge: React.FC<Message01IconProps> = () => (
    <Svg width={24} height={24} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m18.47 16.83.39 3.16c.1.83-.79 1.41-1.5.98l-4.19-2.49c-.46 0-.91-.03-1.35-.09A4.86 4.86 0 0 0 13 15.23c0-2.84-2.46-5.14-5.5-5.14-1.16 0-2.23.33-3.12.91-.03-.25-.04-.5-.04-.76C4.34 5.69 8.29 2 13.17 2S22 5.69 22 10.24c0 2.7-1.39 5.09-3.53 6.59Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 15.23c0 1.19-.44 2.29-1.18 3.16-.99 1.2-2.56 1.97-4.32 1.97l-2.61 1.55c-.44.27-1-.1-.94-.61l.25-1.97C2.86 18.4 2 16.91 2 15.23c0-1.76.94-3.31 2.38-4.23.89-.58 1.96-.91 3.12-.91 3.04 0 5.5 2.3 5.5 5.14Z"
        />
    </Svg>
);

const Message01IconMedium: React.FC<Message01IconProps> = () => (
    <Svg width={20} height={20} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="m15.391 14.025.325 2.633c.084.692-.658 1.175-1.25.817L10.975 15.4c-.384 0-.759-.025-1.125-.075a4.05 4.05 0 0 0 .983-2.633c0-2.367-2.05-4.284-4.583-4.284-.967 0-1.859.275-2.6.758a5.282 5.282 0 0 1-.034-.633c0-3.791 3.292-6.866 7.359-6.866 4.066 0 7.358 3.075 7.358 6.866 0 2.25-1.159 4.242-2.942 5.492Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M10.834 12.691a4.05 4.05 0 0 1-.984 2.634c-.825 1-2.133 1.642-3.6 1.642l-2.175 1.291c-.366.225-.833-.083-.783-.508l.208-1.642c-1.116-.775-1.833-2.017-1.833-3.417 0-1.466.783-2.758 1.983-3.524a4.736 4.736 0 0 1 2.6-.759c2.534 0 4.584 1.917 4.584 4.284Z"
        />
    </Svg>
);

const Message01IconSmall: React.FC<Message01IconProps> = () => (
    <Svg width={18} height={18} fill="none">
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="m13.852 12.623.293 2.37a.746.746 0 0 1-1.125.734L9.877 13.86c-.345 0-.682-.022-1.012-.067a3.646 3.646 0 0 0 .885-2.37c0-2.13-1.845-3.855-4.125-3.855-.87 0-1.673.247-2.34.682a4.754 4.754 0 0 1-.03-.57c0-3.413 2.962-6.18 6.622-6.18 3.66 0 6.623 2.767 6.623 6.18 0 2.025-1.043 3.818-2.648 4.943Z"
        />
        <Path
            stroke="#646464"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.125}
            d="M9.75 11.422c0 .893-.33 1.718-.885 2.37-.742.9-1.92 1.478-3.24 1.478l-1.958 1.162c-.33.203-.75-.075-.704-.457l.187-1.478C2.145 13.8 1.5 12.682 1.5 11.422c0-1.32.705-2.482 1.785-3.172a4.262 4.262 0 0 1 2.34-.683c2.28 0 4.125 1.725 4.125 3.855Z"
        />
    </Svg>
);

export default Message01Icon;
