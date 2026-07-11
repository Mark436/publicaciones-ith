import type { ColorAvatar } from "@/types/usuario";

interface AvatarClassSet {
  background: string;
  text: string;
}

// Clases literales completas (nunca interpoladas) para que Tailwind
// pueda detectarlas durante el escaneo estático de JIT.
const AVATAR_CLASSES: Record<ColorAvatar, AvatarClassSet> = {
  purple: { background: "bg-purple-500", text: "text-white" },
  pink: { background: "bg-pink-500", text: "text-white" },
  rose: { background: "bg-rose-500", text: "text-white" },
  teal: { background: "bg-teal-500", text: "text-white" },
  amber: { background: "bg-amber-500", text: "text-white" },
  indigo: { background: "bg-indigo-500", text: "text-white" },
  sky: { background: "bg-sky-500", text: "text-white" },
  emerald: { background: "bg-emerald-500", text: "text-white" },
};

export function getAvatarClasses(color: ColorAvatar): AvatarClassSet {
  return AVATAR_CLASSES[color];
}

export function getIniciales(nombreCompleto: string): string {
  const partes = nombreCompleto.trim().split(/\s+/);
  const primera = partes[0]?.charAt(0) ?? "";
  const segunda = partes[1]?.charAt(0) ?? "";
  return `${primera}${segunda}`.toUpperCase();
}
