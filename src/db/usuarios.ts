import { Rol, Color, Estado } from '@/generated/client'
import { Hash } from '@/lib/utils'
import db from '@/db/prisma'

type CreateUserDto = {
  nombreCompleto: string
  nombreUsuario: string
  rol: Rol
  correo: string
  password: string
}

const COLORES_DISPONIBLES = Object.values(Color)

export class UserService {
  static async getAll() {
    return await db.usuario.findMany()
  }

  static async getByCorreo(correo: string) {
    const usuario = await db.usuario.findFirst({
      where: {
        Correo: correo,
      },
    })

    return usuario
  }

  static async getByNombreUsuario(nombreUsuario: string) {
    return await db.usuario.findFirst({
      where: {
        Nombre_Usuario: nombreUsuario,
      },
    })
  }

  static async logIn(correo: string, password: string) {
    let usuario
    try {
      usuario = await UserService.getByCorreo(correo)
    } catch (error) {
      console.error('ERROR PRISMA:', error)
    }
    if (!usuario) throw Error('El usuario no existe')

    const userData = {
      Id_Usuario: usuario.Id_Usuario,
      Nombre_Usuario: usuario.Nombre_Usuario,
      Rol: usuario.Rol,
    }
    if (usuario.Contrasena_Hash === Hash(password)) {
      return userData
    }
    return null
  }
  static async eliminarUsuario(id: number) {
    const usuario = await db.usuario.findUnique({ where: { Id_Usuario: id } })
    if (!usuario) throw Error('El usuario no existe')

    return await db.usuario.delete({ where: { Id_Usuario: id } })
  }
  static async createUsuario(newUsuario: CreateUserDto) {
    const { nombreCompleto, nombreUsuario, rol, correo, password } = newUsuario

    const correoExistente = await UserService.getByCorreo(correo)
    if (correoExistente) throw Error('Ya existe un usuario con ese correo')

    const usuarioExistente = await UserService.getByNombreUsuario(nombreUsuario)
    if (usuarioExistente) throw Error('Ese nombre de usuario ya está en uso')

    const hashedPassword = Hash(password)
    const totalUsuarios = await db.usuario.count()
    const color = COLORES_DISPONIBLES[totalUsuarios % COLORES_DISPONIBLES.length]

    return await db.usuario.create({
      data: {
        Nombre_Completo: nombreCompleto,
        Nombre_Usuario: nombreUsuario,
        Rol: rol,
        Correo: correo,
        Contrasena_Hash: hashedPassword,
        Color: color,
        Estado: Estado.Activo,
      },
    })
  }
}
