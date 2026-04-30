import { cn } from "../utils/cn"

const RecipeDifficulty = ({ difficulty }) => {
    const levels = ["Easy", "Medium", "Hard"];

    return (
        <div className="flex flex-col gap-2 py-3 px-2 bg-white rounded-xl mt-2">
            <h3 className="font-bold text-xl">Diffucilty</h3>
            <div className="flex gap-1">
                {levels.map((label, index) => (
                    <div
                        key={label}
                        className={cn(
                            "rounded-xl py-1 px-1",
                            difficulty === index
                            ? difficulty === 2 && "bg-red-400 text-white"
                            : "bg-amber-100 text-black"
                        )}
                    >
                        {label}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecipeDifficulty
