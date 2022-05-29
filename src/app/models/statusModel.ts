import { Observable, Subject } from "rxjs";
import { Cell } from "./cellModel";

export class StatusModel {
  grid?: Cell[][];
  mines?: number;
  flags?: number;
  revealed?: number;
  time?: Subject<number>;
  gamerunning?: Subject<boolean>;
  victory?: boolean;
  finalTime?: Subject<number>;
}
