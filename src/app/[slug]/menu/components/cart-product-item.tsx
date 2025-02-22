import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";

import { FormatCurrency } from "@/app/utils/format-currency";
import { Button } from "@/components/ui/button";

import { CartContext, CartProduct } from "../contexts/card";

interface CartItemProps {
    product: CartProduct;
}

const CartProductItem = ({ product }: CartItemProps) => {
    const { decreaseProductQuantity, increaseProductQuantity, removeProduct } = useContext(CartContext)

    return (
        <div className="flex items-center justify-between" >
            <div className="flex items-center gap-3">
                <div className="relative h-20 w-20 bg-gray-100 rounded-xl">
                    <Image src={product.imageUrl} alt={product.name} fill />
                </div>
                <div className="space-y-1">
                    <p className="text-xs max-w-[90%] truncate text-ellipsis">{product.name}</p>
                    <p className="text-sm font-semibold text-left">{FormatCurrency(product.price)}</p>
                    <div className="flex items-center gap-1 text-center">
                        <Button onClick={() => decreaseProductQuantity(product.id)} className="w-7 h-7 rounded-lg" variant="outline">
                            <ChevronLeftIcon />
                        </Button>
                        <p className="w-7 text-xs">{product.quantity}</p>
                        <Button onClick={() => increaseProductQuantity(product.id)} className="w-7 h-7 rounded-lg" variant="destructive">
                            <ChevronRightIcon />
                        </Button>
                    </div>
                </div>
            </div>
            <Button onClick={() => removeProduct(product.id)} className="w-7 h-7 rounded-lg" variant="outline">
                <TrashIcon />
            </Button>
        </div>
    );
}

export default CartProductItem;