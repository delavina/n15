import ProductCard from "@/components/ProductCard";
import SearchForm from "@/components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  const params = { search: query || null };

  const products = [
    {
      _createdAt: new Date(),
      views: 3,
      author: { _id: 1, name: "dev", image: "/dogon.svg" },
      _id: "1",
      _type: "product",
      name: "User Interface",
      slug: "t-shirt",
      description: "docs & forms for every usecase",
      image: "/img.008.png",
      price: 65,
      tags: ["ui", "ux"],
      currency: " €",
      quantity: 1,
      category: "action graphics",
    },
    {
      _createdAt: new Date(),
      views: 3,
      author: { _id: 1, name: "dev", image: "/dogon.svg" },
      _id: "2",
      _type: "product",
      name: "User Interface",
      slug: "design",
      description: "user interfaces for every device",
      image: "/img.009.png",
      price: 120,
      tags: ["ui", "ux"],
      currency: " €",
      quantity: 1,
      category: "user interaction",
    },
    {
      _createdAt: new Date(),
      views: 3,
      author: { _id: 1, name: "dev", image: "/dogon.svg" },
      _id: "3",
      _type: "product",
      name: "Paper",
      slug: "t-shirt",
      description: "huge collection of digital assets",
      image: "/img.010.png",
      price: 65,
      tags: ["ui", "ux"],
      currency: " €",
      quantity: 1,
      category: "screen content",
    },
    {
      _createdAt: new Date(),
      views: 3,
      author: { _id: 1, name: "dev", image: "/dogon.svg" },
      _id: "4",
      _type: "product",
      name: "Content",
      slug: "design",
      description: "pieces that decorate the set",
      image: "/img.011.png",
      price: 120,
      tags: ["ui", "ux"],
      currency: " €",
      quantity: 1,
      category: "set graphics",
    },
  ];

  const backgroundImageUrl = "/hero.png";

  return (
    <>
      <section
        className="image_container"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="heading">digitale Requisiten</h1>

        <p className="hidden md:block sub-heading !max-w-3xl pb-16">
          beautifully designed{" "}
          <span className="text-red-600 font-semibold ">digital props</span> for modern filmmaking
        </p>
        <p className="md:hidden sub-heading !max-w-4xl py-4">
          beautifully designed{" "}<span className="text-red-600 font-semibold ">digital props</span>{" "}<br />
          for modern filmmaking
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Deine Suchergebnisse für "${query}"` : "Unsere Produkte"}
        </p>

        <ul className="mt-7 card_grid">
          {products?.length > 0 ? (
            products.map((product: ProductTypeCard) => (
              <ProductCard key={product?._id} product={product} />
            ))
          ) : (
            <p className="no-results">keine Produkte gefunden</p>
          )}
        </ul>
      </section>
    </>
  );
}
