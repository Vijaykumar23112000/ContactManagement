const LoadingPage = ({ text }) => {
    return (
        <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-200 bg-opacity-50'>
            <p className='text-gray-800 text-xl'>{text}</p>
        </div>
    )
}

export default LoadingPage
