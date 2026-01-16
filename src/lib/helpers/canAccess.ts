export const canAccess = (userPermissions?: string[], required?: string[]) => {
  if (!required || required.length === 0) return true;
  if (!userPermissions) return false;

  return required.some((p) => userPermissions.includes(p));
};
