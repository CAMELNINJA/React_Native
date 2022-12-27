export interface Product {
    id: string,
    title: string,
    description: string,
    isLiked: boolean,
    price: number,
    count:number,
    image:string[],
}

export interface Buy{
    id : string ,
    count: number,
}