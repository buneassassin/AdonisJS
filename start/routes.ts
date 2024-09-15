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

// router.get('/tablas/{num1?}/{num2?}/{fibonacci?}', [TablasMultiplicarsController,'index'])
router.get('/tablas/:num1?/:num2?/:fibonacci?', [TablasMultiplicarsController,'index'])