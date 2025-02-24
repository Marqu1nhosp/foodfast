"use client"
import { Product } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface ProductHeaderProps {
    product: Pick<Product, "name" | "imageUrl">
}

const ProductHeader = ({ product }: ProductHeaderProps) => {
    const { slug } = useParams<{ slug: string }>()
    const router = useRouter();
    const handleBackClick = () => router.back();
    const handleOrdersclick = () => router.push(`/${slug}/orders`)
    return (
        <div className="relative w-full min-h-[300px]">
            <Image src={product.imageUrl} alt={product.name} fill className="object-contain" />
            <Button onClick={handleBackClick} variant={"secondary"} size="icon" className="absolute top-4 left-4 rounded-full z-50">
                <ChevronLeftIcon />
            </Button>
            <Button onClick={handleOrdersclick} variant={"secondary"} size="icon" className="absolute top-4 right-4 rounded-full z-50">
                <ScrollTextIcon />
            </Button>
        </div>
    );
}

export default ProductHeader;