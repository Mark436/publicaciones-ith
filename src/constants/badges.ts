import type { Rol } from "@/types/usuario";

export function getRolBadgeClasses(rol: Rol): string {
  if (rol === "Administrador") {
    return "bg-indigo-50 text-indigo-700 border-indigo-100";
  }
  return "bg-slate-100 text-slate-700 border-slate-200";
}
