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

// router.get('/tablas/{num1?}/{num2?}/{fibonacci?}', [TablasMultiplicarsController,'index'])
router.get('/tablas/:num1?/:num2?/:fibonacci?', [TablasMultiplicarsController,'index'])

router.post('/personas', [PersonasController,'store'])

router.post('/ahorcado/:palabra?/:intentos?/:p?', [AhorcadosController,'update']);
router.get('/ahorcado', [AhorcadosController,'show']);