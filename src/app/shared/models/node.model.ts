export interface INode {
    id: string;
    name: string;
    type: string;
    iconBackgroundColor: string;
    badgeType?: string;
    iconColor: string;
    children: {
        id: string;
        name: string;
        iconBackgroundColor: string;
        iconColor: string;
        ipAddress: string;
        badgeType: string;
        type: string;
      }[];
}