
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/react";

interface ItemPropInterface {
    id: string
    title: string;
    description: string;
    price: number
}
interface ItemsCardProps {
    items: {id:string; title:string; description:string; price:number}[]; // Define the type of items; adjust `any` to a more specific type if possible
  }

export default function ItemsCard({items}:ItemsCardProps){


    return(
        <div>
            <div className="container grid grid-cols-3 gap-4 px-4">
                {items.map((item:ItemPropInterface)=>(
                    <div key={item.id} className="container grid grid-cols-3 gap-4">
                         <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                            <CardHeader className="absolute z-10 top-1 flex-col items-start">        
                              <h4 className="text-white/90 font-medium text-2xl px-3">{item.title}</h4>
                            </CardHeader>
                            <Image
                              isBlurred
                              isZoomed
                              removeWrapper
                              alt="Relaxing app background"
                              className="z-0 w-full h-full object-cover"
                              src="https://nextui.org/images/card-example-5.jpeg"
                            />
                            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                              <div className="flex flex-grow gap-2 items-center">
                                <div className="flex flex-col">
                                  <p className="text-tiny text-white/60 px-3">{item.description}</p>
                                  <p className="text-xl text-white/60 px-3">Rs: {item.price}</p>
                                </div>
                              </div>
                              <Button radius="full" size="sm">
                                Order
                              </Button>
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}