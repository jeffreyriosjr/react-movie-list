const HeadingComponent = ({ title}) => {
    return (
        <div className='row text-center'>
            <div className='col'>
            <h1 className='my-3'>{title}</h1>
        </div>
        </div>
    );
};

export default HeadingComponent;