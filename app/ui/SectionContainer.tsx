export default function SectionContainer({children}: {children: React.ReactNode}) {
    return (<div className="flex flex-col justify-center py-24 min-h-screen">
        {children}
    </div>)

}