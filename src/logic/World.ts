import {IBug} from "./Bug"
import {IColor} from "./Color"
import {IPosition} from "./Position"
import {IWorldCell} from "./WorldCell"

export interface IWorld {
    x: number
    y: number
    map: IWorldCell[][]

    cellAt: (position: IPosition) => IWorldCell
    adjacent: (position: IPosition, direction: number) => IWorldCell
    turn: (direction: number, turn: number) => number
    sensedCell: (position: IPosition, direction: number) => IWorldCell

    isObstructedAt: (position: IPosition) => boolean

    isOccupiedAt: (position: IPosition) => boolean
    setBugAt: (position: IPosition, bug: IBug) => boolean
    getBugAt?: (position: IPosition) => IBug
    removeBugAt: (position: IPosition) => boolean

    setFoodAt: (position: IPosition, number: number) => void
    getFoodAt: (position: IPosition) => number

    isFriendlyBaseAt: (position: IPosition, color: IColor) => boolean
    isEnemyBaseAt: (position: IPosition, color: IColor) => boolean

    setMarkerAt: (position: IPosition, color: IColor) => void
    clearMarkerAt: (position: IPosition, color: IColor) => void
    isFriendlyMarkerAt: (position: IPosition, color: IColor) => boolean
    isEnemyMarkerAt: (position: IPosition, color: IColor) => boolean

    toString: () => string
}