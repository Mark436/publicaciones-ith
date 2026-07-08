export type PostStatus = 'visible' | 'hidden' | 'draft'

export interface Post {
  id: number
  titulo: string
  autor: string
  fecha: string
  status: PostStatus
  orden: number
}

export const POSTS_DATA: Post[] = [
  {
    id: 1,
    titulo: 'Alumnos del ITH obtienen primer lugar en concurso regional de robótica 2026',
    autor: 'Luis Beaven',
    fecha: '28 may 2026',
    status: 'visible',
    orden: 1,
  },
  {
    id: 2,
    titulo: 'Convocatoria abierta: Programas de Verano Científico para estudiantes de sistemas',
    autor: 'Kavin Moreno',
    fecha: '25 may 2026',
    status: 'visible',
    orden: 2,
  },
  {
    id: 3,
    titulo: 'ITH firma convenio con empresa líder del sector tecnológico de Sonora',
    autor: 'Eduardo Dueñas',
    fecha: '22 may 2026',
    status: 'visible',
    orden: 3,
  },
  {
    id: 4,
    titulo: 'Resultados del proceso de titulación ordinario del semestre enero–junio',
    autor: 'Luis Beaven',
    fecha: '20 may 2026',
    status: 'hidden',
    orden: 4,
  },
  {
    id: 5,
    titulo: 'Semana del emprendimiento: más de 200 proyectos presentados en el ITH',
    autor: 'Kavin Moreno',
    fecha: '18 may 2026',
    status: 'visible',
    orden: 5,
  },
  {
    id: 6,
    titulo: 'Borrador: Ceremonia de graduación generación 2022–2026',
    autor: 'Eduardo Dueñas',
    fecha: '08 may 2026',
    status: 'draft',
    orden: 6,
  },
]
