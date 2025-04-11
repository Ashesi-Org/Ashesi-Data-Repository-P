// components/FeaturedCollections.tsx
import CollectionsContainer from "@/components/CollectionsContainer";
import { BASE_URL } from "@/utils/constants";

export default async function FeaturedCollections() {
    const data = await fetch(`${BASE_URL}/get_all_collections?page=1`);
    const initialCollections = await data.json();

    return (
        <div className="mb-14 mx-auto w-full max-w-4xl">
            <CollectionsContainer initialCollections={initialCollections} filterOn={false} />
        </div>
    );
}
