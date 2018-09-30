import { LinkType } from './link-type';
import { Activity } from './activity';

export interface Link {
    id: number;
    linkType: LinkType;
    title: string;
    path: string;
    activity: Activity;
}
