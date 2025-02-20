"use client"
import { Prisma } from "@prisma/client";
import { ChefHatIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { FormatCurrency } from "@/app/utils/format-currency";
import { Button } from "@/components/ui/button";

interface ProductDetailsProps {
    product: Prisma.ProductGetPayload<{
        include: {
            restaurant: {
                select: {
                    name: true,
                    avatarImageUrl: true
                }
            }
        }
    }>;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
    const [quantity, setQuantity] = useState(1);

    const handleDecreaseQuantity = () => {
        setQuantity((prev) => {
            if (prev === 1) {
                return 1;;
            }
            return prev - 1
        });
    }

    const handleIncreaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    }

    return (
        <div className="relative z-50 rounded-t-3xl p-5 mt-[-1.5rem] flex-auto flex flex-col">
            <div className="flex-auto">
                <div>
                    <div className="flex items-center gap-1.5 ">
                        <Image src={product.restaurant.avatarImageUrl}
                            alt={product.restaurant.name}
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                        <p className="text-xs text-muted-foreground space-x-1">{product.restaurant.name}</p>
                    </div>
                    <h2 className="mt-1 text-xl font-semibold">
                        {product.name}
                    </h2>
                </div>

                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold"> {FormatCurrency(product.price)} </h3>
                    <div className="flex items-center gap-3 text-center">
                        <Button onClick={handleDecreaseQuantity} variant="outline" className="h-8 w-8 rounded-xl">
                            <ChevronLeftIcon />
                        </Button>
                        <p className="w-4">{quantity}</p>
                        <Button onClick={handleIncreaseQuantity} variant="destructive" className="h-8 w-8 rounded-xl">
                            <ChevronRightIcon />
                        </Button>
                    </div>
                </div>

                <div className="mt-6 space-y-3">
                    <h4 className="font-semibold">Sobre</h4>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                </div>

                <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-1">
                        <ChefHatIcon />
                        <h4 className="font-semibold">Ingredientes</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                </div>
            </div>
            <Button className="rouded-full w-full mt-6">
                Adicionar à sacola
            </Button>
        </div>

    );
}

export default ProductDetails;