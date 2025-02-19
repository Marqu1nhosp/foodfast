//import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";
import Image from "next/image";
import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ConsumptionMethodOption from "./components/consumption-method-option";

interface RestaurantPageProps {
    params: Promise<{ slug: string }>
}


const RestaurantPage = async ({ params }: RestaurantPageProps) => {
    const { slug } = await params
    const restaurant = await db.restaurant.findUnique({ where: { slug } });

    if (!restaurant) {
        return notFound();
    }

    return (
        <div className="flex h-screen flex-col items-center justify-center px-6 pt-16">
            <div className="flex flex-col items-center gap-1">
                <Image src={restaurant?.avatarImageUrl} alt={restaurant?.name} width={200} height={200} />
                <h2 className="font-semibold">
                    {restaurant.name}
                </h2>
            </div>
            <div className="pt-24 text-center space-y-2">
                <h3 className="text-2xl font-semibold">
                    Seja bem-vindo!
                </h3>
                <p className="opacity-55">
                    Escolha como prefere aproveitar sua refeição. Estamos oferecer praticidade e saber em cada detalhe!
                </p>
            </div>

            <div className="pt-14 grid grid-cols-2 gap-4">
                <ConsumptionMethodOption buttonText="Para comer aqui" imageAlt="Para comer aqui" imageUrl="/dine_in.png" option="DINE_IN" slug={slug} />
                <ConsumptionMethodOption buttonText="Para levar" imageAlt="Para levar" imageUrl="/takeaway.png" option="TAKEAWAY" slug={slug} />
            </div>
        </div>
    );
}

export default RestaurantPage;