export const restrictViewByPermissions = (
  userPermissions: string[],
  requiredPermissions: string[]
) => {
  if (!userPermissions || !requiredPermissions) {
    return false;
  }

  if (requiredPermissions.length === 0) {
    return true;
  }

  return requiredPermissions.some((perm) => userPermissions.includes(perm));
};
