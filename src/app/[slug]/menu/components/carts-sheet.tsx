
import { useContext, useState } from "react";

import { formatCurrency } from "@/app/utils/format-currency";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

import { CartContext } from "../contexts/cart";
import CartProductItem from "./cart-product-item";
import FinishOrderDialog from "./finish-order-dialog";


const CartSheet = () => {
    const { isOpen, toggleCart, products, total } = useContext(CartContext)
    const [finishedOrderDialogIsOpen, setFinishedOrderDialogIsOpen] = useState(false);

    return (
        <Sheet open={isOpen} onOpenChange={toggleCart}>
            <SheetContent className="w-[65%]">
                <SheetHeader>
                    <SheetTitle className="text-left">Sacola</SheetTitle>
                </SheetHeader>
                <div className="flex h-full flex-col py-5 ">
                    <div className="flex-auto space-y-2">
                        {products.map((product) => (
                            <CartProductItem key={product.id} product={product} />
                        ))}
                    </div>
                    <Card className="mb-6">
                        <CardContent className="p-5">
                            <div className="flex justify-between">
                                <p className="text-sm text-muted-foreground">Total</p>
                                <p className="font-semibold text-sm">{formatCurrency(total)}</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Button
                        variant="secondary"
                        className="w-full rounded-full "
                        onClick={() => setFinishedOrderDialogIsOpen(true)}
                    >
                        Finalizar pedido
                    </Button>
                    <FinishOrderDialog open={finishedOrderDialogIsOpen} onOpenChange={setFinishedOrderDialogIsOpen} />
                </div>

            </SheetContent>
        </Sheet>
    );
}

export default CartSheet;


