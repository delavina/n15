import { cn, formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

const ProductCard = ({ product }: { product: ProductTypeCard }) => {
  const {
    _createdAt,
    views,
    author,
    _id,
    _type,
    name,
    description,
    image,
    price,
    currency,
    category,
  } = product;

  return (
    <li className="product-card group">
      <Link href={`/product/${_id}`}>
        <img src={image} alt="placeholder" className="product-card_img" />
      </Link>
      <div className="product-card_wrapper">
        <div className="flex-between mt-1 gap-5">
          <div className="flex-1">
            {/* <Link href={`/user/${author?._id}`}>
            <p className="text-16-medium line-clamp-1">{author?.name}</p>
          </Link> */}
            <Link href={`/product/${product._id}`}>
              <h3 className="text-26-semibold line-clamp-1">{name}</h3>
            </Link>
          </div>

          {/*         <Link href={`/user/${author?._id}`}>
          <Image
            src={author?.image!}
            alt={author?.name!}
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link> */}

          <div>
            <p>
              {price}
              {currency}
            </p>
          </div>
        </div>
        <div>
          {" "}
          <p className="product-card_desc">{description}</p>
        </div>
        <div className="flex-between gap-3 mt-5">
          <Link href={`/?query=${category?.toLowerCase()}`}>
            <p className="font-geist-mono text-xs">{category}</p>
          </Link>
          <Button className="product-card_btn" asChild>
            <Link href={`/product/${_id}`}>Details</Link>
          </Button>
        </div>
      </div>

      {/*       <div className="flex-between">
        <p className="product-card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div> */}
    </li>
  );
};

export const ProductCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((index: number) => (
      <li key={cn("skeleton", index)}>
        <Skeleton className="product-card_skeleton" />
      </li>
    ))}
  </>
);

export default ProductCard;
