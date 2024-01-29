import router from '@adonisjs/core/services/router'

class DemoController {
  async store() {}
  async destroy() {}
}

router.resource('demo', DemoController).apiOnly().only(['store', 'destroy'])
