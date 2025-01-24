'use client'

export default function Error({ reset}: {
    reset: () => void
}) {
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <h1 className='mb-10'>Something went wrong!</h1>
            <button onClick={reset}>Try again</button>
        </div>
    )
}