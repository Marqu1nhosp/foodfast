"use client";

import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";


interface RestaurantHeaderProps {
    restaurant: Pick<Restaurant, 'name' | 'coverImageUrl'>
}

const RestaurantHeader = ({ restaurant }: RestaurantHeaderProps) => {
    const { slug } = useParams<{ slug: string }>()
    const router = useRouter();
    const handleBackClick = () => router.back();
    const handleOrdersclick = () => router.push(`/${slug}/orders`)
    return (
        <div className="relative h-[250px] w-full">
            <Button onClick={handleBackClick} variant={"secondary"} size="icon" className="absolute top-4 left-4 rounded-full z-50">
                <ChevronLeftIcon />
            </Button>
            <Image src={restaurant.coverImageUrl} fill alt={restaurant.name} className="object-cover" />
            <Button onClick={handleOrdersclick} variant={"secondary"} size="icon" className="absolute top-4 right-4 rounded-full z-50">
                <ScrollTextIcon />
            </Button>
        </div>
    );
}

export default RestaurantHeader;