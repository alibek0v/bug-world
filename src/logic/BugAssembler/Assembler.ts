import {IInstruction} from "./Instructions";

export interface IAssembler {
    assemble(file: File): IInstruction[]
}