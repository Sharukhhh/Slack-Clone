const FormWrapper = ({children}) => {
    return (
        <>
            <div className="flex items-center justify-center bg-violet-100 min-h-screen">
                <div className="w-full max-w-xl p-8 space-y-6 bg-white rounded shadow-2xl">
                    {children}
                </div>
            </div>
        </>
    )
};

export default FormWrapper;