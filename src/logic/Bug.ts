import {IBugBrain} from "./BugBrain"
import {IColor} from "./Color"

export interface IBug {
    id: number
    color: IColor
    state: number
    resting: number
    direction: number
    hasFood: boolean
    brain: IBugBrain

    kill: () => void
    getPosition: () => number
    toString: () => string
}