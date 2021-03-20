/** PropTypes library external*/
import PropTypes from "prop-types";

/** cx library external */
import cx from "classnames";

/** Link manage routes */
import Link from "next/link";


/**
 * @param {string} content - Text to be displayed on the button
 * @param {string} color - The background color on the button
 * @param {function} callback - Action when executing button
 * @param {string} link - Url Link target of the button
 * @param {string} target - The target tag if a Link exists
 * @param {boolean} isSubmit - True for submit type button
 * @param {boolean} fullWidth - True for full Width button
 * @param {JSX.Element} icon - Icon (SVG) to be displayed on the left side
 */
const Button = ({
                    content = "Button",
                    color = "primary",
                    callback = undefined,
                    link = undefined,
                    target = undefined,
                    isSubmit = false,
                    fullWidth = false,
                    icon = undefined,
                }) => {

    const BUTTON_DEFAULT = `py-1.5 px-6 rounded-lg shadow-sm font-medium focus:outline-none inline-flex items-center justify-center`;
    const COLOR_BG = `bg-${color}-600`;
    const COLOR_TXT = color === "primary" ? "text-gray-800" : "text-white";
    const WIDTH = fullWidth && "w-full";
    const HOVER = `hover:bg-${color}-700 hover:shadow`;
    const TRANSITION = `transition duration-300 ease-in-out`;

    const classButton = cx(
        BUTTON_DEFAULT,
        COLOR_BG,
        COLOR_TXT,
        WIDTH,
        HOVER,
        TRANSITION,
    );

    const defaultRel = target === "_blank" ? "noopener" : undefined;

    return link ? (
        <Link href={link}>
            <a target={target} rel={defaultRel} className={classButton}>
                {content}
            </a>
        </Link>
    ) : (
        <button
            type={isSubmit ? "submit" : "button"}
            onClick={callback && (() => callback())}
            className={classButton}
        >
            {icon && icon}
            <span>{content}</span>
        </button>
    );
};

Button.displayName = "Button";

Button.propTypes = {
    content: PropTypes.string,

    color: PropTypes.string,

    callback: PropTypes.func,

    link: PropTypes.string,

    target: PropTypes.string,

    isSubmit: PropTypes.bool,

    fullWidth: PropTypes.bool,

    icon: PropTypes.element,
};

export default Button;
