"use client";

import { useEditGiftcardProducts } from "../../hooks/useEditGiftcardProducts";

import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";
import ProductInfoModal from "@/components/molecules/modals/ProductInfoModal/ProductInfoModal";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

const ProductActionRating = ({ id }: { id: number }) => {
  const {
    openModal,
    setOpenModal,
    product,
    handleChange,
    handleEdit,
    isLoading,
    isSubmitting,
  } = useEditGiftcardProducts(id);

  return (
    <div>
      <ColumnActionDropdown>
        <DropdownMenuItem>
          <button onClick={() => setOpenModal(true)}>Update product</button>
        </DropdownMenuItem>
      </ColumnActionDropdown>
      <ProductInfoModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        handleEdit={handleEdit}
        handleChange={handleChange}
        product={product}
        isSubmitting={isSubmitting}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ProductActionRating;
