export interface IAsset {
    name: string;
    ipAddress: string;
    level: 'Low' | 'Medium' | 'High' | 'Critical';
}

export interface ITableData {
    label: string;
    value: string;
}

export interface IAccordiongPanelData {
    title: string;
    subtitle: string;
    subdetail: string;
    detail: string;
    description: string;
    open: boolean;
}