import PropTypes from "prop-types";

const Container = ({ children }) => {
	return <div>{children}</div>;
};

export default Container;

Container.propTypes = {
	children: PropTypes.node,
};
