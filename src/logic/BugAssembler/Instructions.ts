import {ICallDirection} from "./CallDirection"
import {ICondition} from "./Condition"

export interface IInstruction {
}

export interface ISense extends IInstruction {
    dir: ICallDirection
    cond: ICondition
    then: ILabel
    else: ILabel
}

export interface IMark extends IInstruction {
    int: number
    then: ILabel
}

export interface IUnmark extends IInstruction {
    int: number
    then: ILabel
}

export interface IPickUp extends IInstruction {
    then: ILabel
    else: ILabel
}

export interface IDrop extends IInstruction {
    next: ILabel
}

export interface ITurn extends IInstruction {
    dir: IDirection
}

export interface IMove extends IInstruction {
    then: ILabel
    else: ILabel
}

export interface IFlip extends IInstruction {
    int: number
    then: ILabel
    else: ILabel
}

export interface IDirection extends IInstruction {
    dir: number
    then: ILabel
    else: ILabel
}

export interface ILabel extends IInstruction {
    label: string
}