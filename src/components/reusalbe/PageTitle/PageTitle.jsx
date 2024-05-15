import PropTypes from 'prop-types';

const PageTitle = ({text}) => {
    return (
        <>
            <p className="my-5 text-3xl text-[#06286E]">{text}</p>
        </>
    );
};

PageTitle.propTypes = {
    text: PropTypes.string
}

export default PageTitle;