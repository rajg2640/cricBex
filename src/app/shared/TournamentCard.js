import Link from "next/link"

const TournamentCard = ({ tournament }) => {
    function formatTeams(teams) {
        if (!teams || teams.length === 0) return ""
        if (teams.length === 1) return `<span class="font-medium">${teams[0]}</span>`
        if (teams.length === 2)
            return `<span class="font-medium">${teams[0]}</span> and <span class="font-medium">${teams[1]}</span>`
        return `<span class="font-medium">${teams.slice(0, -1).join(", ")}</span> and <span class="font-medium">${teams.slice(-1)}</span>`
    }
    return (
        <div className="border border-black/10 rounded-xl p-6 mb-4 bg-white shadow-lg">
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
                <div>
                    <h2 className="text-xl font-semibold text-black-100">{tournament.name}</h2>
                    <p className="text-sm text-black-300">
                        {tournament.date} <span className="mx-2 text-lg align-middle">•</span> {tournament.venue} <span className="mx-2 text-lg align-middle">•</span> {tournament.format}
                    </p>
                </div>
                <span
                    className={`px-3 py-1 border rounded-full ${tournament.status === "Ongoing"
                        ? "bg-success-100/10 text-success-200 border-success-200"
                        : tournament.status === "Completed"
                            ? "bg-info-50/10 text-info-50 border-info-50" : "bg-red-100 text-red-600"
                        }`}
                >
                    {tournament.status}
                </span>
            </div>

            {/* Match Info */}
            <div className="flex gap-4 mb-3">
                <div className="bg-light-gray-700 rounded-2xl p-6 max-w-48 w-full">
                    <p className="text-sm text-black-300">Total Matches</p>
                    <p className="text-lg font-semibold">{tournament.matches.total}</p>
                </div>
                <div className="bg-light-gray-700 rounded-2xl p-6 max-w-48 w-full">
                    <p className="text-sm text-black-300">Completed</p>
                    <p className="text-lg font-semibold text-success-200">
                        {tournament.matches.completed}
                    </p>
                </div>
                <div className="bg-light-gray-700 rounded-2xl p-6 max-w-48 w-full">
                    <p className="text-sm text-black-300">Remaining</p>
                    <p className="text-lg font-semibold text-primary">
                        {tournament.matches.remaining}
                    </p>
                </div>
            </div>

            {/* Teams */}
            <p
                className="text-sm text-gray-600 mb-3 italic"
                dangerouslySetInnerHTML={{ __html: `Participating Teams: ${formatTeams(tournament.teams)}` }}
            />

            {/* Links */}
            <div className="flex flex-wrap gap-4 text-sm border-t border-black/10 pt-3">
                {tournament.links.map((link, idx) => (
                    <Link
                        key={idx}
                        href={link.href}
                        className="text-primary hover:underline"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default TournamentCard;