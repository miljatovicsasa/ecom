
export interface Product {
  name: string;
  sku: string;
  url_key: string;
  stock_status: string;
  price_range: {
    minimum_price: {
      regular_price: {
        value: number;
        currency: string;
      };
    };
  };
  media_gallery: { url: string; label?: string }[];
  categories: { name: string; url_key: string }[];
  description: {
    html: string;
  };
  attributes: { name: string; value: string }[];
}

export interface ConfigurableOption {
  attribute_code: string;
  label: string;
  values: ConfigurableOptionValue[];
}

export interface ConfigurableOptionValue {
  value_index: number;
  label: string;
}

export interface CustomAttribute {
  attribute_code: string;
  value: string;
}
