
import { useContext } from "react";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

import { CartContext } from "../contexts/card";
import CartProductItem from "./cart-product-item";

const CartSheet = () => {
    const { isOpen, toggleCart, products } = useContext(CartContext)
    return (
        <Sheet open={isOpen} onOpenChange={toggleCart}>
            <SheetContent className="w-[75%]">
                <SheetHeader>
                    <SheetTitle className="text-left">Sacola</SheetTitle>
                    <div className="py-5">
                        {products.map(product => (
                            <CartProductItem key={product.id} product={product} />
                        ))}
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}

export default CartSheet;