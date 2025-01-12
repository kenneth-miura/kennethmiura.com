export default function SectionContainer({children}: {children: React.ReactNode}) {
    return (<div className="flex flex-col justify-center py-24 min-h-screen items-center w-full">
        {children}
    </div>)

}