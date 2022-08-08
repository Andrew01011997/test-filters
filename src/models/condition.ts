export interface Condition {
    definitionId: string;
    operator: string | "eq";
    value: string | number | Date;
}