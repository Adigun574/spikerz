export interface INode {
    id: string;
    name: string;
    type: string;
    iconBackgroundColor: string;
    badgeType?: string;
    iconColor: string;
    children: any[];
}