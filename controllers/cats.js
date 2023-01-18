const { Cat } = require("../models")

const create = async (req, res) => {
  try {
    const cat = await Cat.create(req.body)
    res.status(200).json(cat)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const cats = await Cat.findAll()
    res.status(200).json(cats)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const cat = await Cat.update(
      req.body,
      { where: { id: req.params.id }, returning: true }
    )
    res.status(200).json(cat)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteCat = async (req, res) => {
  try {
    // Calling destroy on the model will not return the deleted record:
    // const numberOfRowsRemoved = await Cat.destroy(
    //   { where: { id: req.params.id } }
    // )

    // We can also call destroy on an instance:
    const cat = await Cat.findByPk(req.params.id)
    await cat.destroy()
    res.status(200).json(cat)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
  deleteCat,
}