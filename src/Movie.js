import PoropTypes from 'prop-types'

function Movie() {
    return(
        <h1>Hello</h1>
    )
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    year:propTypes.number.isRequired,
    title:PoropTypes.string.isRequired,
    summary:PoropTypes.string.isRequired,
    poster:PoropTypes.string.isRequired
};

export default Movie