import PopularProductsCarouselClient from "./PopularProductsCarouselClient";
import { GET_POPULAR_PRODUCTS } from "@/lib/queries/products";
import createApolloClient from "@/lib/apollo/apolloClient";
import getApolloClient from "@/lib/apollo/apolloClient";

export default async function PopularProductsCarousel() {
  const apolloClient = getApolloClient();

  try {
    const { data } = await apolloClient.query({ query: GET_POPULAR_PRODUCTS });
    const products = data?.products?.items || [];
    
    return <PopularProductsCarouselClient products={products} />;
  } catch (error) {
    console.error("Error fetching data:", error);

    return (
      <div>
        <p>Sorry, we couldn't fetch the popular products at the moment. Please try again later.</p>
      </div>
    );
  }
}
