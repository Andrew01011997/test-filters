export function makeOptions<D extends { name?: string, label?: string , id: string | number }>(data: D[]){
    return data.map(item => ({ label: item.name ?? item.label ?? "", value: item.id }))
}