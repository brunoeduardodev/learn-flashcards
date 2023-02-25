import type { Collection } from "@prisma/client";
import Link from "next/link";
import { buttonStyles } from "../../../../button";

type CollectionItemProps = {
  collection: Collection;
};

export const CollectionItem = ({ collection }: CollectionItemProps) => {
  return (
    <Link
      href={`/${collection.slug}`}
      className={buttonStyles({ color: "opacity", size: "sm" })}
    >
      {collection.name}
    </Link>
  );
};
