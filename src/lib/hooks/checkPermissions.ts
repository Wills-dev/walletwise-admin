export function checkPermissions(
  userPermissions: string[] | undefined,
  requiredPermissions: string[],
  requireAll: boolean = true
): boolean {
  if (!userPermissions || userPermissions.length === 0) return false;

  if (requireAll) {
    return requiredPermissions.every((permission) =>
      userPermissions.includes(permission)
    );
  } else {
    return requiredPermissions.some((permission) =>
      userPermissions.includes(permission)
    );
  }
}
