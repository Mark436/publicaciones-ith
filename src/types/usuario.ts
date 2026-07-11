export type Rol = "Administrador" | "Editor";

export type Estado = "Activo" | "Inactivo";

export type ColorAvatar =
  | "purple"
  | "pink"
  | "teal"
  | "amber"
  | "indigo"
  | "rose"
  | "sky"
  | "emerald";

export interface Usuario {
  id: string;
  nombreCompleto: string;
  nombreUsuario: string;
  correo: string;
  rol: Rol;
  estado: Estado;
  iniciales: string;
  colorAvatar: ColorAvatar;
}
