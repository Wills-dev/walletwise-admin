export type PermissionAction = "read" | "write" | "create";

export type Permission = {
  id: string;
  name: string;
};

type PermissionWithOptionalList = {
  id: string;
  name: string;
  permissions?: string[];
};

type GroupedPermissions = Record<string, string[]>;

type GroupedPermissionsWithId = Record<
  string,
  { id: string; action: string }[]
>;

export function groupPermissions(
  permissions: Permission[],
): GroupedPermissions {
  const grouped: GroupedPermissions = {};

  permissions.forEach(({ name }) => {
    const [category, action] = name?.split(".");
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(action);
  });

  return grouped;
}

export function groupArrayPermissions(
  permissions: PermissionWithOptionalList[],
): GroupedPermissions {
  if (!Array.isArray(permissions) || permissions.length === 0) {
    return {};
  }

  const grouped: GroupedPermissions = {};

  permissions.forEach((permission) => {
    if (!permission || typeof permission !== "object") {
      return;
    }

    const [category, action] = permission.name.split(".");
    if (category && action) {
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(action);
    }
  });

  return grouped;
}

export function groupPermissionsEdit(
  data: Permission[],
): GroupedPermissionsWithId {
  const grouped: GroupedPermissionsWithId = {};

  data.forEach(({ id, name }) => {
    const [category, action] = name?.split(".");
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push({ id, action });
  });

  return grouped;
}
