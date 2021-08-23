const router = require('express').Router()
const Category = require('./category-model.js')
const mw = require('./category-middleware.js')
const { checkId } = mw

router.get('/', async (req, res, next) => {
  try {
    const data = await Category.getAll()
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', checkId, async (req, res, next) => {
  try {
    res.status(200).json(req.category)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const data = await Category.create(req.body)
    res.status(201).json(data)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', checkId, async (req, res, next) => {
  try {
    const data = await Category.updateById(req.params.id, req.body)
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', checkId, async (req, res, next) => {
  try {
    const data = await Category.deleteById(req.params.id)
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
})

router.use((err,  req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router;
