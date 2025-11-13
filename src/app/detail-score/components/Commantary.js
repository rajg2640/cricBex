import React from 'react'

const Commentary = () => {

    const overCommentary = [
        {
            over: "52.0",
            batter: "Ayush Mhatre",
            bowler: "Tom Straker",
            time: "14:23",
            description:
                "Single to end the over. Mhatre works it to midwicket and scampers through for one. He's looking well set now, having faced nearly 100 balls.",
            score: "181/4",
            result: "1 run",
            value: "1",
        },
        {
            over: "51.5",
            batter: "Ayush Mhatre",
            bowler: "Tom Straker",
            time: "14:21",
            description: "Good length ball outside off, left alone by Mhatre.",
            score: "180/4",
            result: "dot",
            value: "•",
        },
        {
            over: "51.4",
            batter: "Ayush Mhatre",
            bowler: "Tom Straker",
            time: "14:19",
            description: "Driven beautifully through covers for four!",
            score: "180/4",
            result: "4 runs",
            value: "4",
        },
        {
            over: "51.3",
            batter: "Ayush Mhatre",
            bowler: "Tom Straker",
            time: "14:18",
            description: "Full ball on the pads, flicked for a couple.",
            score: "176/4",
            result: "2 runs",
            value: "2",
        },
        {
            over: "51.2",
            batter: "Ayush Mhatre",
            bowler: "Tom Straker",
            time: "14:16",
            description: "Edge... but safe! Falls short of slip. No run.",
            score: "174/4",
            result: "dot",
            value: "•",
        },
        {
            over: "51.1",
            batter: "Ayush Mhatre",
            bowler: "Tom Straker",
            time: "14:14",
            description: "Straker starts the over with a sharp bouncer. Mhatre ducks under it.",
            score: "174/4",
            result: "Wicket",
            value: "W",
        },
    ];

    return (
        <div className='lg:pb-[120px] sm:pb-20 pb-10 space-y-6'>
            <div className="rounded-2xl bg-[#D9D9D9] flex items-center justify-center h-[375px] w-full mt-6">AD</div>
            <div className='shadow-sm bg-white rounded-[10px] overflow-auto divide-y divide-black/10'>
                <h5 className='tetx-lg leading-7 text-black-100 p-6'>Ball by Ball Commentary</h5>
                {overCommentary.map((data, i) => (
                    <div
                        key={i}
                        className="p-6 flex justify-between gap-4 border-b border-light-gray-600 last:border-0"
                    >
                        <div>
                            <div className="flex gap-3">
                                <div className="py-1 px-2.5 rounded-sm bg-orange text-white h-fit text-sm font-medium">
                                    {data.over}
                                </div>
                                <div className="flex flex-wrap">
                                    <p className="max-w-[200px] text-sm leading-5 text-black-300">
                                        {data.batter} facing {data.bowler}
                                    </p>
                                    <span className="text-light-gray-900 text-xs leading-4 mt-1">{data.time}</span>
                                </div>
                            </div>

                            <p className="text-black-100 leading-[26px] mt-1">{data.description}</p>

                            <div className="mt-3.5 flex items-center gap-4 text-sm leading-5 text-black-300">
                                <p>{data.score}</p>
                                <span>•</span>
                                <p>{data.result}</p>
                            </div>
                        </div>

                        {/* Ball Value (Right Side Circle) */}
                        <div
                            className={`md:h-14 sm:h-10 h-6 md:w-14 sm:w-10 w-6 flex-none rounded-full flex items-center justify-center text-dark-gray-50 lg:text-2xl md:text-xl sm:text-lg xxs:text-base text-sm leading-7 bg-light-gray-300 ${data.value === "4" || data.value === "6"
                                ? "bg-success/30"
                                : data.value === "W"
                                    ? "bg-primary-100"
                                    : ""
                                }`}
                        >
                            {data.value}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Commentary