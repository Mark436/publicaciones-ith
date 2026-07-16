import { db } from '@/db/mysql.ts'
import type { Usuario } from '@/types/usuario'

type CreatePostDto = {
  Titulo: string
  Contenido: string
  FechaCreacion: Date
  Estado: string
  Orden: string
  IdUsuario: Usuario['id']
}

export class PostService {
  static async getAll() {
    const [rows] = await db.query('select * from Publicacion')

    return rows
  }

  static async createPublicacion(newPost: CreatePostDto) {
    const { Titulo, Contenido, FechaCreacion, Estado, Orden, IdUsuario } = newPost

    await db.query(
      'insert into Publicaciones(Titulo,Contenido,Fecha_Creacion,Estado,Orden,Id_Usuario) values(?,?,?,?,?,?)',
      [Titulo, Contenido, FechaCreacion, Estado, Orden, IdUsuario],
    )
  }
}
