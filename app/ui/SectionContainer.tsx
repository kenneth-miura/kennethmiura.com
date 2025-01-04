export default function SectionContainer({children}: {children: React.ReactNode}) {
    return (<main className="flex flex-row justify-center py-24">
        {children}
    </main>)

}