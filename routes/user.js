const { Router } = require('express');

const router = Router();


router.get('/', (req, res ) =>{

    res.json({
        msg:"bien"
      });

})



module.exports = router;