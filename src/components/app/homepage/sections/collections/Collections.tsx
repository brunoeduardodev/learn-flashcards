import { Section, SectionContent, SectionTitle } from "../../section";
import { api } from "../../../../../utils/api";
import { CollectionItem } from "./CollectionItem";
import { CollectionSkeleton } from "./CollectionSkeleton";
import { Error } from "./Error";
import { Empty } from "./Empty";

export const Collections = () => {
  const {
    data: collections,
    isLoading,
    error,
  } = api.collections.getAll.useQuery();

  return (
    <Section>
      <SectionTitle>Collections</SectionTitle>
      <SectionContent>
        {error && <Error message={error.message} />}
        {!isLoading && !collections?.length && <Empty />}

        {collections?.map((collection) => {
          return <CollectionItem key={collection.id} collection={collection} />;
        })}

        {isLoading && (
          <>
            <CollectionSkeleton />
            <CollectionSkeleton />
            <CollectionSkeleton />
          </>
        )}
      </SectionContent>
    </Section>
  );
};
