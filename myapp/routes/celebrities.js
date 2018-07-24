
const express = require('express');
const Celebrity = require('../models/celebrity')
const router = express.Router();
/* GET celebrities page. */
router.get('/', function (req, res, next) {
  Celebrity.find({})
    .then((celebrities) => {
      res.render('celebrities/index', { celebrities });
    })
    .catch((error) => {
      next(error);
    })
});

/* GET celebrities ADD NEW page */
router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
  
  });
//add new celebrity

router.post('/add', (req, res, next) => {
  const { name, ocupation, catchPhrase } = req.body;
  Celebrity.create({ name, ocupation, catchPhrase })
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((err) => {
      next(err);
    });
});

 /* GET celebrities ID page. */
 router.get('/:id', function (req, res, next) {
   const { id } = req.params;
   Celebrity.findById(id)
     .then((celebrityData) => {
       res.render('celebrities/show', { celebrityData });
     })
     .catch((error) => {
       next(error);
     })
 });



// router.get('/:id/edit', (req, res, next) => {
//   const celebrityId = req.params.id;
//   Celebrity.findById(celebrityId)
//     .then((celebrity) => {
//       res.render('celebrities/edit', celebrity);
//     })
//     .catch((err) => {
//       next(err);
//     });
// });
// router.post('/:id/update', (req, res, next) => {
//   const celebrityId = req.params.id;
//   const { name, occupation, catchPhrase } = req.body;
//   Celebrity.findByIdAndUpdate(celebrityId, { name, occupation, catchPhrase })
//     .then(() => {
//       res.redirect('/celebrities');
//     })
//     .catch((err) => {
//       next(err);
//     });
// });

// router.post('/add', (req, res, next) => {
//   const { name, occupation, catchPhrase } = req.body;
//   Celebrity.create({ name, occupation, catchPhrase })
//     .then(() => {
//       res.redirect('celebrities');
//     })
//     .catch((err) => {
//       next(err);
//     });
// });
router.post('/:id/delete', (req, res, next) => {
  const {id} = req.params;
  Celebrity.findByIdAndRemove(id)
    .then(() => {
      console.log('hola');
      res.redirect('/celebrities');
    })
    .catch((error) => {
      next(error);
    });
});
module.exports = router;



