export default function Header() {
    const date = new Date()
    const currentDate = date.toLocaleDateString("en-GB", {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })
    const currentHour = date.getHours()
    const greeting = currentHour < 12 ? 'Morning' : currentHour < 17 ? 'Afternoon' : 'Evening'

    return (
        <header>
            <h1 className="inter-semibold">Good {greeting}, User 👋</h1>
            <h2 className="inter-medium gray">It's {currentDate}</h2>
        </header>
    )
}