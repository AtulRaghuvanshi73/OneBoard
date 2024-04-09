import Image from "next/image";

export const EmptyFavorites = () => {
    return(
        <div className="h-full flex flex-col items-center justify-center">
            <Image 
                src="/empty-favorites.svg"
                height={140}
                width={140}
                alt="Empty"
            />
            <h2 className="text-2xl font-semibold mt-6">
                No results where found...
            </h2>
            <p className="text-muted-foreground text-sm mt-4">
                You have to favorite some boards first...
            </p>
        </div>
    )
}