import { notFound } from "next/navigation";
import getApolloClient from "@/lib/apollo/apolloClient";
import { gql } from "@apollo/client";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import ProductImageSlider from "@/components/product/ProductImageSlider";
import AddToCartButton from "@/components/cart/AddToCartButton";
import { GET_PRODUCT_DETAIL } from "@/lib/queries/products";
import { Product } from "@/types/product";

export default async function ProductDetailPage({
  params,
}: {
  params: { sku: string };
}) {
  const { sku } = params;

  try {
    const apolloClient = getApolloClient();
    const { data } = await apolloClient.query({
      query: GET_PRODUCT_DETAIL,
      variables: { sku },
    });

    const product: Product = data?.products?.items[0];
    if (!product) {
      notFound();
    }

    // I didnt find additional in magento data so i hardcoded it
    const atributiStaticki = [
      {
        name: "Primer Teks",
        value: "asdasdadasdasdasdsa",
      },
      {
        name: "Primer Teks",
        value: "dasdsadadsadas",
      },
      {
        name: "Primer Teks",
        value: "dasdsaasdsadasdsadas",
      },
    ];

    return (
      <Box sx={{ width: "100%", margin: "auto" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
          }}
        >
          <ProductImageSlider images={product.media_gallery} />

          <Box>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", marginBottom: 2 }}
            >
              {product.name}
            </Typography>
            <Typography variant="h5" sx={{ color: "#333", marginBottom: 2 }}>
              {product.price_range.minimum_price.regular_price.value}{" "}
              {product.price_range.minimum_price.regular_price.currency}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              <strong>Stock Status:</strong> {product.stock_status}
            </Typography>

            {/* <AddToCartButton />     This is rest to implement */}

            {product.categories.length > 0 && (
              <Box sx={{ marginTop: 2 }}>
                <Typography variant="body2">Categories:</Typography>
                {product.categories.map((category) => (
                  <Typography key={category.url_key} variant="body2">
                    {category.name}
                  </Typography>
                ))}
              </Box>
            )}

            <Typography variant="body1" sx={{ marginTop: 2 }} component="div">
              <strong>Description:</strong>
              <div
                dangerouslySetInnerHTML={{ __html: product.description.html }}
              />
            </Typography>
          </Box>
        </Box>

        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            Tire Specifications
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                {atributiStaticki.map((attribute) => (
                  <TableRow key={attribute.name}>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      {attribute.name}
                    </TableCell>
                    <TableCell>{attribute.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return <div>Failed to load product details</div>;
  }
}
