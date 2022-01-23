const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    // include: [
    //   {
    //     model: Category,
    //     attributes: ['id', 'category_name']
    //   },
      // {
      //   model: ProductTag,
      //   attributes: ['id', 'product_id', 'tag_id'],
      //   include: {
      //     model: Tag,
      //     attributes: ['tag_name']
      //   }
      // },
      // {
      //   model: Tag,
      //   attributes: ['tag_name'],
      //   through: ProductTag,
      //   as: 'tag_name'
      // }
    // ]
  })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
