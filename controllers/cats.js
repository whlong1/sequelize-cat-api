const { Cat, Feeding, CatToy, Toy } = require("../models")

const associateToy = async (req, res) => {
  try {
    const { catId, toyId } = req.params

    const association = await CatToy.create({
      cat_id: catId, toy_id: toyId
    })

    res.status(200).json(association)
  } catch (error) {
    res.status(500).json(error)
  }
}

const addFeeding = async (req, res) => {
  try {
    // Append a cat_id to req.body:
    req.body.cat_id = req.params.id
    const feeding = await Feeding.create(req.body)
    res.status(200).json(feeding)
  } catch (error) {
    res.status(500).json(error)
  }
}

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
    const cats = await Cat.findAll(
      {
        include: [
          { model: Feeding, as: "feedings" },
          { model: Toy, 
            as: "toys", // <= needs to match alias in assocation
            through: { attributes: [] } }
        ]
      }
    )
    res.status(200).json(cats)
  } catch (error) {
    console.log(error)
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
  addFeeding,
  associateToy,
}