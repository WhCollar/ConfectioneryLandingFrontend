import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query';
import { Ref } from 'vue';
import { axiosInstance } from 'shared/model/client.instance';
import { VITE_BASE_MEDIA_URL } from 'shared/model/env';

type RefValueUndefined<T> = Ref<T | undefined>;

// Catalog feature
export interface CategoryResponse {
  name: string;
  id: string;
}
interface FiltersResponse {
  categories: CategoryResponse[];
  minPrice: number;
  maxPrice: number;
}

interface GetProductsQuery {
  CategoryIds?: string[];
  MinPrice?: number;
  MaxPrice?: number;
}

export interface ProductsResponse {
  id: string;
  name: string;
  description: string;
  categoryIds: string[];
  images: string[];
  kilocalorie?: number;
  weight?: number;
  width?: number;
  height?: number;
  depth?: number;
  price?: number;
}

const setProductResponseMediaUrl = (
  product: ProductsResponse | ProductsResponse[],
) => {
  if (Array.isArray(product)) {
    return product.map((product) => {
      product.images = product.images.map((name) => VITE_BASE_MEDIA_URL + name);
      return product;
    });
  }

  product.images = product.images.map((name) => VITE_BASE_MEDIA_URL + name);
  return product;
};

export const useFiltersGet = () =>
  useQuery({
    queryKey: ['catalog/filters'],
    queryFn: () => axiosInstance.get<FiltersResponse>('catalog/filters'),
    select: ({ data }) => data,
  });
export const useProductsGet = (
  CategoryIds?: RefValueUndefined<string[]>,
  MinPrice?: RefValueUndefined<number>,
  MaxPrice?: RefValueUndefined<number>,
) =>
  useQuery({
    queryKey: ['catalog/products', CategoryIds, MinPrice, MaxPrice],
    queryFn: () =>
      axiosInstance.post<ProductsResponse[]>('catalog/products', {
        categoryIds: CategoryIds?.value,
        minPrice: MinPrice?.value,
        maxPrice: MaxPrice?.value,
      }),
    select: ({ data }) => setProductResponseMediaUrl(data),
  });
export const useProductGet = (ProductId: RefValueUndefined<string>) =>
  useQuery({
    queryKey: ['catalog/product/{productId}', ProductId],
    queryFn: () =>
      axiosInstance.get<ProductsResponse>(`catalog/product/${ProductId.value}`),
    enabled: () => !!ProductId.value,
    select: ({ data }) => setProductResponseMediaUrl(data) as ProductsResponse,
  });

// Comment feature
interface CreateCommentCommand {
  firstName: string;
  secondName: string;
  email: string;
  text: string;
}

interface CommentResponse {
  contentItemId: string;
  firstName: string;
  secondName: string;
  email: string;
  text: string;
  createdAt: Date;
}

const CommentByProductQueryKey = 'comments/{productId}';
export const useCommentByProductGet = (ProductId: RefValueUndefined<string>) =>
  useQuery({
    queryKey: [CommentByProductQueryKey],
    queryFn: () =>
      axiosInstance.get<CommentResponse[]>(`comments/${ProductId.value}`),
    enabled: () => !!ProductId.value,
    select: ({ data }) => data,
  });
export const useCommentCreate = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationKey: ['comments/{productId}'],
    mutationFn: ({
      productId,
      command,
    }: {
      productId: string;
      command: CreateCommentCommand;
    }) => axiosInstance.post<CommentResponse>(`comments/${productId}`, command),
    onSettled: () =>
      qc.invalidateQueries({ queryKey: [CommentByProductQueryKey] }),
  });
};

// Contact info feature
interface ContactInfoResponse {
  address: string;
  email: string;
  phone: string;

  titleLabel: string;
  title: string;
  text: string;
  contactPageText: string;
  mapLink: string;

  facebookLink: string;
  pinterestLink: string;
  instagramLink: string;
  twitterLink: string;
  linkedInLink: string;
  telegramLink: string;
}

export const useContactInfoGet = () =>
  useQuery({
    queryKey: ['contact-info'],
    queryFn: () => axiosInstance.get<ContactInfoResponse>('contact-info'),
    select: ({ data }) => data,
  });

// Main page info

export interface CategorySectionResponse {
  id: string;
  name: string;
  description: string;
  products: ProductsResponse;
}

export interface CarouselItemResponse {
  title: string;
  secondTitle: string;
  description: string;
  image: string;
  productId: string;
}

export const useMainPageCategorySection = () =>
  useQuery({
    queryKey: ['main-page-info/category-section'],
    queryFn: () =>
      axiosInstance.get<CategorySectionResponse>(
        'main-page-info/category-section',
      ),
    select: ({ data }) => {
      data.products = setProductResponseMediaUrl(data.products) as any;
      return data;
    },
  });

export const useMainPageCarouselItems = () =>
  useQuery({
    queryKey: ['main-page-info/carousel-items'],
    queryFn: () =>
      axiosInstance.get<CarouselItemResponse[]>(
        'main-page-info/carousel-items',
      ),
    select: ({ data }) =>
      data?.map((item) => {
        item.image = VITE_BASE_MEDIA_URL + item.image;
        return item;
      }),
  });

// Order feature
export interface ReceiptTypeResponse {
  id: string;
  name: string;
}

interface CreateOrderCommand {
  firstName: string;
  secondName: string;
  receiptTypeId: string;
  address?: string;
  phone: string;
  email?: string;
  notes?: string;
  productIds: string[];
}

export const useOrderCreate = () =>
  useMutation({
    mutationKey: ['order'],
    mutationFn: ({ command }: { command: CreateOrderCommand }) =>
      axiosInstance.post('order', command),
  });

export const useReceiptTypes = () =>
  useQuery({
    queryKey: ['receipt-type'],
    queryFn: () => axiosInstance.get<ReceiptTypeResponse[]>('receipt-type'),
    select: ({ data }) => data,
  });

// Request form
interface CreateRequestCommand {
  firstName: string;
  secondName: string;
  phone: string;
  message: string;
}

export const useRequestFormSend = () =>
  useMutation({
    mutationKey: ['request-form'],
    mutationFn: ({ command }: { command: CreateRequestCommand }) =>
      axiosInstance.post('request-form', command),
  });
