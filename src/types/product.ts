export interface Product {
  id: string;
  name: string;
  sku: string;
  price: {
    regularPrice: {
      amount: {
        value: number;
        currency: string;
      };
    };
  };
  image: {
    url: string;
    label?: string;
  };
  configurable_options?: ConfigurableOption[];
  custom_attributes?: CustomAttribute[];
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
