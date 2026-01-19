const RESTRICTED_USER_IDS = [
  "49054560-2861-4622-9f7f-b87bfb7125e9",
  "94bb069d-3970-4a07-9061-fc0bf9d124a2",
  "cd1a7820-5e1d-4e48-9f6e-d4c68f83dec1",
  "8a319b07-91c9-4469-99b9-b4760195b0e5",
  "bf36562f-cce7-4e42-8001-915a27446951",
  "c23b2c5f-4511-4bd6-8f4a-a8e88ab76d42",
  "933aa83e-9751-4bb8-9f9c-c9c695bf8421",
  "3dca3034-0684-45b8-acf7-5f585963392c",
  "89ca0fb6-5f87-40a6-8693-4955978bd7da",
  "45152dc4-6a17-4caa-901f-3ed04a59903a",
  "fe0abfb7-2bb1-4dc2-8431-35154e4da597",
  "14aaad6d-fcf5-4292-8fdb-e192832d788c",
  "fd91bb4a-f590-4f71-b969-a2ffa8296798",
  "c7503352-fa57-4f65-bf52-2a7fe639d7fb",
  "b6348bcf-ff79-4888-b6ae-daf58cdc5a0d",
  "6616bfc5-6a4d-472e-8f9d-0313fc990f9e",
  "3febaf2c-a5e1-4e3a-94dd-db9337c2f8bc",
  "4f17e859-0936-44e5-b788-26b94424338b",
  "52830e3c-a445-4190-a6ec-e03d5a3bcdd2",
  "bf1be0e4-2ac6-4f22-924d-adcd8a3752d6",
  "85a63e88-9441-4b90-a000-85eae249df1d",
  "df6f235b-b1de-45d6-9375-1307fce2f591",
  "ea552d49-bfe1-47a4-a74b-a8ce5f8ce790",
  "2403776a-2a39-4d34-9ef4-f592410500f2",
];
const AUTHORIZED_ADMIN_IDS = [
  "286f5c8c-6a88-4514-a098-e8546f7ba042",
  "ae698d60-0639-43ee-b8c9-cc8d178d0c90",
  "9949b747-763a-4980-9d2e-c1f2f891c48a",
];

export const canViewTransactions = (
  currentUserId: string,
  currentAdminId: string,
) => {
  if (RESTRICTED_USER_IDS.includes(currentUserId)) {
    return AUTHORIZED_ADMIN_IDS.includes(currentAdminId);
  }
  // For all other users, admin can view transactions normally
  return true;
};
