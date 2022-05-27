import { Observable } from "rxjs";
import { Cell } from "./cellModel";

export class StatusModel {
  grid?: Cell[][];
  mines?: number;
  flags?: number;
  revealed?: number;
  time?: Observable<number>;
  gamerunning?: boolean;
  victory?: boolean;
  finalTime?: number;
}
