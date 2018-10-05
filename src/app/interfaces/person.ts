import { Team } from './team';
import { Activity } from './activity';

export interface Person {
    id: number;
    name: string;
    firstName: string;
    uid: string;
    phoneNumber: number;
    mobilePhoneNumber: number;
    mailAddress: string;
    team: Team;
    workstationName: string;
    activityList: Activity[];
}
