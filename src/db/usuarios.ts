import { db } from '@/db/mysql.ts'
import type { Rol } from '@/types/usuario'
import { Hash } from '@/lib/utils'

type CreateUserDto = { nombre: string; rol: Rol; correo: string; password: string }

export class UserService {
  static async getAll() {
    const [rows] = await db.query('select * from Usuarios')

    return rows
  }
  // static async getByCorreo(correo: string, password: string) {
  //   const HashedPassword = Hash(password)
  //   const [result]=await db.query('select * from Usuarios where correo=? and Contrasena_Hash=?', [
  //     correo,
  //     HashedPassword,
  //   ])
  //   if(result[0])return true;
  // }
  static async createUsuario(newUsuario: CreateUserDto) {
    const { nombre, rol, correo, password } = newUsuario

    const HashedPassword = Hash(password)

    await db.query(
      'insert into Usuarios(Nombre_Usuario,Rol,Correo,Contrasena_Hash) values(?,?,?,?)',
      [nombre, rol, correo, HashedPassword],
    )
  }
}
