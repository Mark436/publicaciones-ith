import { defineMiddleware } from 'astro:middleware'

const PUBLIC_ROUTES = ['/login']
const VALID_ROUTES = [
  '/',
  '/login',
  '/usuarios',
  '/estadisticas',
  '/publicaciones/nueva',
  '/publicaciones/ordenar',
]
export const onRequest = defineMiddleware(({ url, cookies, redirect }, next) => {
  const isPublic = PUBLIC_ROUTES.includes(url.pathname)

  // if (isPublic) return next()
  if (!VALID_ROUTES.includes(url.pathname)) {
    return redirect('/')
  }

  if (true) return next()

  const session = cookies.get('session')?.value

  if (!session) {
    return redirect('/login')
  }
})
