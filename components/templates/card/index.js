import PropTypes from 'prop-types'


const Card = ({
                  media: Media,
                  content: Content,
                  vertical,
                  responsive,
                  highlight,
                  href,
                  tabIndex
              }) => {

    return (
        <article>

        </article>
    );
}

Card.displayName = 'Card';

Card.propTypes = {
    /** HTML (component) to be displayed on the left/right side. It's an optional component */
    media: PropTypes.oneOfType([
        PropTypes.element, PropTypes.func
    ]),

    /** HTML (component) to be displayed on the other side */
    content: PropTypes.oneOfType([
        PropTypes.element, PropTypes.func
    ]),

    /** true for vertical layout */
    vertical: PropTypes.bool,

    /** true for make responsive layout */
    responsive: PropTypes.bool,

    /** true for highlight mode */
    highlight: PropTypes.bool,

    /** url target of the card */
    href: PropTypes.string,

    /** tab order */
    tabIndex: PropTypes.string
}

export default Card;
