/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import TablasMultiplicarsController from '#controllers/tablas_multiplicars_controller'
import AhorcadosController from '#controllers/ahorcados_controller'
import PersonasController from '#controllers/personas_controller'
const AuthController = () => import('#controllers/auth_controller')
import { middleware } from './kernel.js'

// import auth from '@adonisjs/auth/services/main'
import MusicaDbsController from '#controllers/musica_dbs_controller'

router.group(() => {

// router.get('/tablas/{num1?}/{num2?}/{fibonacci?}', [TablasMultiplicarsController,'index'])
router.get('/tablas/:num1?/:num2?/:fibonacci?', [TablasMultiplicarsController,'index'])

router.post('/personas', [PersonasController,'store'])

router.post('/ahorcado/:palabra?/:intentos?/:p?', [AhorcadosController,'update']);
router.get('/ahorcado', [AhorcadosController,'show']);

router.get('/ver', [MusicaDbsController,'index']);

})
.use(
  middleware.auth({
    guards: ['api'],
  })
) // Aquí protegemos el grupo de rutas con el middleware de autenticación
// hola
router.post('/register', [AuthController, 'register']).as('auth.register')
router.post('/login', [AuthController, 'login']).as('auth.login')
router.get('/me', [AuthController, 'me']).as('auth.me')

