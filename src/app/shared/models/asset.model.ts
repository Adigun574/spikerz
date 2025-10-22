export interface IAsset {
    name: string;
    ipAddress: string;
    level: 'Low' | 'Medium' | 'High' | 'Critical';
}