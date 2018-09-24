import { AccessType } from './access-type';
import { Activity } from './activity';

export interface Access {
    id: number;
    accessType: AccessType;
    title: string;
    path: string;
    activity: Activity;
}
