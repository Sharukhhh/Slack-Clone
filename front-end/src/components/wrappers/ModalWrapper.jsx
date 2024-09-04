const ModalWrapper = ({children}) => {
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                {children}
            </div>
        </>
    )
};

export default ModalWrapper;