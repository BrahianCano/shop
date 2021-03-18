/** PropTypes library external*/
import PropTypes from "prop-types";

/** Icons declared in the "svgs" object */
import svgs from "./icons";


/**
 * @param {string} svg - Name of the icon declared in the "svgs" object
 * @param {string} title - Use a descriptive title
 * @param {string} height - (Only use tailwinds classes)
 * @param {string} margin - (Only use tailwinds classes)
 */
const Icon = ({
                  svg,
                  title,
                  height = 'h-5',
                  margin = 'mr-2'
              }) => {

    const svgRender = svgs[svg] || svgs.default;

    return (
        <i title={title}>
            <svg
                viewBox={svgRender.viewBox}
                fill="currentColor"
                stroke="transparent"
                className={`${height} ${margin}`}
                xmlns="http://www.w3.org/2000/svg"
            >
                {svgRender.svg}
            </svg>
        </i>

    );
};

Icon.displayName = "Icon";

Icon.propTypes = {
    svg: PropTypes.string,

    title: PropTypes.string,

    height: PropTypes.string,

    margin: PropTypes.string,
};

export default Icon;
