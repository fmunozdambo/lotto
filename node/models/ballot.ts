import { Lottery } from "./lottery";
import { User } from "./user";

export class Ballot {
    id: number;
    winner: boolean;
    fk_user: number;
    fk_lottery: number;
    user: User;
    lottery: Lottery;
};