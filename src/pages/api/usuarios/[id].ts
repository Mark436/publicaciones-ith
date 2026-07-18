// src/pages/api/usuarios/[id].ts
import type { APIRoute } from 'astro'
import { UserService } from '@/db/usuarios'

export const DELETE: APIRoute = async ({ params }) => {
  const id = Number(params.id)

  if (!Number.isInteger(id)) {
    return new Response(JSON.stringify({ mensaje: 'Id inválido' }), { status: 400 })
  }

  try {
    await UserService.eliminarUsuario(id)
    return new Response(null, { status: 204 })
  } catch (error) {
    const mensaje = error instanceof Error ? error.message : 'No se pudo eliminar el usuario'
    return new Response(JSON.stringify({ mensaje }), { status: 404 })
  }
}
