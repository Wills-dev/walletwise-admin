export interface DataType {
  name?: string;
  plan_code?: string;
  cost: string;
  commission: string;
  final_price: string;
  is_active: boolean | undefined;
}
