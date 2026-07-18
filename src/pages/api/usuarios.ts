// src/pages/api/usuarios.ts
import type { APIRoute } from 'astro'
import { Rol } from '@prisma/client'
import { UserService } from '@/db/usuarios'
import { getIniciales, getAvatarClasses } from '@/constants/avatarColors'

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json()
  const { nombreCompleto, nombreUsuario, correo, rol, password } = body

  if (!nombreCompleto || !nombreUsuario || !correo || !password) {
    return new Response(JSON.stringify({ mensaje: 'Faltan campos requeridos' }), { status: 400 })
  }

  if (!Object.values(Rol).includes(rol)) {
    return new Response(JSON.stringify({ mensaje: 'Rol inválido' }), { status: 400 })
  }

  try {
    const usuario = await UserService.createUsuario({
      nombreCompleto,
      nombreUsuario,
      correo,
      rol,
      password,
    })

    return new Response(
      JSON.stringify({
        nombreCompleto: usuario.Nombre_Completo,
        nombreUsuario: usuario.Nombre_Usuario,
        correo: usuario.Correo,
        rol: usuario.Rol,
        iniciales: getIniciales(usuario.Nombre_Completo),
        colorAvatarClases: getAvatarClasses(usuario.Color),
      }),
      { status: 201, headers: { 'Content-Type': 'application/json' } },
    )
  } catch (error) {
    const mensaje = error instanceof Error ? error.message : 'No se pudo crear el usuario'
    return new Response(JSON.stringify({ mensaje }), { status: 409 })
  }
}
