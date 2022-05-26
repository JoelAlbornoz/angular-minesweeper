import { Cell } from "./cellModel";

export class StatusModel {
  grid?: Cell[][];
  mines?: number;
  flags?: number;
  revealed?: number;
}
