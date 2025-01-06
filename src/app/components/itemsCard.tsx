


interface ItemPropInterface {
    title: string;
    description: string;
    price: number
}


export default function ItemsCard(items:ItemPropInterface){


    return(
        <div>
            <div>
                {items.title}
            </div>
            <div>
                {items.description}
            </div>
            <div>
                {items.price}
            </div>
        </div>
    )
}