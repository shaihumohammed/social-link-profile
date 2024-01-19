import PropTypes from "prop-types";
export default function Link({ social }) {
  return <a href="#">{social} </a>;
}

Link.propTypes = {
  social: PropTypes.string,
};
