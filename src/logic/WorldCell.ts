import {IBug} from "./Bug"
import {IBugCondition} from "./BugCondition"
import {IColor} from "./Color"
import {IPosition} from "./Position"
import {IMarker} from "./Marker";

export interface IWorldCell {
    obstructed: boolean
    bug?: IBug
    food: number
    marker: IMarker
    base?: IColor

    isObstructed: () => boolean
    isOccupied: () => boolean
    setBug: (bug: IBug) => boolean
    getBug?: () => IBug
    removeBug: () => boolean

    setFood: (number: number) => void

    isFriendlyBase: (color: IColor) => boolean
    isEnemyBase: (color: IColor) => boolean

    setMarker: (color: IColor, position: IPosition) => void
    clearMarker: (color: IColor, position: IPosition) => void
    isFriendlyMarker: (color: IColor, position: IPosition) => boolean
    isEnemyMarker: (color: IColor, position: IPosition) => boolean

    cellMatches: (position: IPosition, BugCondition: IBugCondition, color: IColor) => boolean

    toString: () => string
}