import { Clock, Pizza, ChartNoAxesColumnIncreasing } from "lucide-react";
import RecipeDifficulty from "./RecipeDifficulty";

const Recipe = ({ id, title, image, time, servings, calories, difficulty }) => {
    return (
        <li key={id} className="flex flex-col items-center gap-1 w-full max-w-[300px]">
            <img src={image} alt={title} className="w-full rounded-xl h-[300px]" />
            <h2 className="text-lg font-semibold">{title}</h2>
            <div className="flex justify-center gap-2 w-full bg-white rounded-xl py-2">
                <div className="flex gap-1">
                    <Clock size={16} />
                    <p className="text-sm">{time}</p>
                </div>
                <div className="flex gap-1">
                    <Pizza size={16} />
                    <p className="text-sm">{servings}</p>
                </div>
                <div className="flex gap-1">
                    <ChartNoAxesColumnIncreasing size={16} />
                    <p className="text-sm">{calories}</p>
                </div>
            </div>
            <RecipeDifficulty difficulty={difficulty} />
        </li>
    )
}

export default Recipe
