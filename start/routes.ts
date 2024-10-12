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
// import auth from '@adonisjs/auth/services/main'
import AuthController from '#controllers/auth_controller'
import MusicaDbsController from '#controllers/musica_dbs_controller'

// router.get('/tablas/{num1?}/{num2?}/{fibonacci?}', [TablasMultiplicarsController,'index'])
router.get('/tablas/:num1?/:num2?/:fibonacci?', [TablasMultiplicarsController,'index'])

router.post('/personas', [PersonasController,'store'])

router.post('/ahorcado/:palabra?/:intentos?/:p?', [AhorcadosController,'update']);
router.get('/ahorcado', [AhorcadosController,'show']);

router.get('/registrar', [AuthController,'register']);

router.get('/registrar', [MusicaDbsController,'index']);

