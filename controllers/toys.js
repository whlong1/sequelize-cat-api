const { Toy, Cat } = require("../models")

const create = async (req, res) => {
  try {
    // const toy = await Toy.create(req.body)


    const toys = await Toy.findAll(
      {
        include: [
          { model: Cat, 
            as: "cats", 
            through: { attributes: [] } }
        ]
      }
    )



    res.status(200).json(toys)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}



module.exports = {
  create,
}