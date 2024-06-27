const express = require('express');
const router = express.Router();
const conn = require('../db/conn');

// Register user data
router.post('/create', (req, res) => {
  const {
    model,
    jsr,
    lkw,
    ckdliv,
    pune,
    spd,
    lkoadv,
    puneadv,
    totalrequired,
    micoprod,
    micobal,
    excw,
    expin,
    totcw,
    totpin,
  } = req.body;

  if (!model || !jsr || !lkw || !ckdliv || !pune || !spd || !lkoadv || !puneadv || !totalrequired || !micoprod || !micobal || !excw || !expin || !totcw || !totpin) {
    return res.status(422).json({ error: 'Please enter all required data' });
  }

  conn.query('SELECT * FROM users WHERE model = ?', model, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    if (result.length) {
      return res.status(422).json({ error: 'This data already exists' });
    }

    const userData = {
      model,
      jsr,
      lkw,
      ckdliv,
      pune,
      spd,
      lkoadv,
      puneadv,
      totalrequired,
      micoprod,
      micobal,
      excw,
      expin,
      totcw,
      totpin,
    };

    conn.query('INSERT INTO users SET ?', userData, (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }

      return res.status(200).json(userData);
    });
  });
});

// Get user data
router.get('/getusers', (req, res) => {
  console.log("dmsaf")
  conn.query('SELECT * FROM users', (err, result) => {
    if (err) {
      return res.json({status: false, Error :"error"});
    }


    console.log(result)


    return res.json({status: true, Result :result});
  });
});

// Delete user API
router.delete('/deleteuser/:id', (req, res) => {
  const { id } = req.params;

  conn.query('DELETE FROM users WHERE id = ?', id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    return res.status(200).json({ message: 'User deleted successfully' });
  });
});

// Get single user
router.get('/induser/:id', (req, res) => {
  const { id } = req.params;

  conn.query('SELECT * FROM users WHERE id = ?', id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    if (!result.length) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json(result[0]);
  });
});

// Update users API
router.patch('/updateuser/:id', (req, res) => {
  const { id } = req.params;
  const data = req.body;

  conn.query('UPDATE users SET ? WHERE id = ?', [data, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    return res.status(200).json({ message: 'User updated successfully' });
  });
});



//  shop 1 

// Register user data
router.post('/createShop1', (req, res) => {
  const {
    model,
    date,
    totcn,
    totpin,
    cnmade,
    pinmade,
    cnbal,
    pinbal,
  } = req.body;

  if (!model || !date || !totcn || !totpin || !cnmade || !pinmade || !cnbal || !pinbal ) {
    return res.status(422).json({ error: 'Please enter all required data' });
  }

  conn.query('SELECT * FROM shop1 WHERE model = ?', model, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    if (result.length) {
      return res.status(422).json({ error: 'This data already exists' });
    }

    const userData = {
        model,
        date,
        totcn,
        totpin,
        cnmade,
        pinmade,
        cnbal,
        pinbal,
    };

    conn.query('INSERT INTO shop1 SET ?', userData, (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }

      return res.status(200).json(userData);
    });
  });
});

// Get user data
router.get('/getusersShop1', (req, res) => {
  console.log("dmsaf")
  conn.query('SELECT * FROM shop1', (err, result) => {
    if (err) {
      return res.json({status: false, Error :"error"});
    }


    console.log(result)


    return res.json({status: true, Result :result});
  });
});

// Delete user API
router.delete('/deleteuserShop1/:id', (req, res) => {
  const { id } = req.params;

  conn.query('DELETE FROM shop1 WHERE id = ?', id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    return res.status(200).json({ message: 'User deleted successfully' });
  });
});

// Get single user
router.get('/induserShop1/:id', (req, res) => {
  const { id } = req.params;

  conn.query('SELECT * FROM shop1 WHERE id = ?', id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    if (!result.length) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json(result[0]);
  });
});

// Update users API
router.patch('/updateuserShop1/:id', (req, res) => {
  const { id } = req.params;
  const data = req.body;

  conn.query('UPDATE shop1 SET ? WHERE id = ?', [data, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    return res.status(200).json({ message: 'User updated successfully' });
  });
});
module.exports = router;



//   shop 2 

// Register user data
router.post('/createShop2', (req, res) => {
  const {
    model,
    date,
    totcn,
    totpin,
    cnmade,
    pinmade,
    cnbal,
    pinbal,
  } = req.body;

  if (!model || !date || !totcn || !totpin || !cnmade || !pinmade || !cnbal || !pinbal ) {
    return res.status(422).json({ error: 'Please enter all required data' });
  }

  conn.query('SELECT * FROM shop2 WHERE model = ?', model, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    if (result.length) {
      return res.status(422).json({ error: 'This data already exists' });
    }

    const userData = {
        model,
        date,
        totcn,
        totpin,
        cnmade,
        pinmade,
        cnbal,
        pinbal,
    };

    conn.query('INSERT INTO shop2 SET ?', userData, (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }

      return res.status(200).json(userData);
    });
  });
});

// Get user data
router.get('/getusersShop2', (req, res) => {
  console.log("dmsaf")
  conn.query('SELECT * FROM shop2', (err, result) => {
    if (err) {
      return res.json({status: false, Error :"error"});
    }


    console.log(result)


    return res.json({status: true, Result :result});
  });
});
// Delete user API
router.delete('/deleteuserShop2/:id', (req, res) => {
  const { id } = req.params;

  conn.query('DELETE FROM shop2 WHERE id = ?', id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    return res.status(200).json({ message: 'User deleted successfully' });
  });
});

// Get single user
router.get('/induserShop2/:id', (req, res) => {
  const { id } = req.params;

  conn.query('SELECT * FROM shop2 WHERE id = ?', id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    if (!result.length) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json(result[0]);
  });
});

// Update users API
router.patch('/updateuserShop2/:id', (req, res) => {
  const { id } = req.params;
  const data = req.body;

  conn.query('UPDATE shop2 SET ? WHERE id = ?', [data, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    return res.status(200).json({ message: 'User updated successfully' });
  });
});
module.exports = router;


//  shop 3

// Register user data
router.post('/createShop3', (req, res) => {
  const {
    model,
    date,
    totcn,
    totpin,
    cnmade,
    pinmade,
    cnbal,
    pinbal,
  } = req.body;

  if (!model || !date || !totcn || !totpin || !cnmade || !pinmade || !cnbal || !pinbal ) {
    return res.status(422).json({ error: 'Please enter all required data' });
  }

  conn.query('SELECT * FROM shop3 WHERE model = ?', model, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    if (result.length) {
      return res.status(422).json({ error: 'This data already exists' });
    }

    const userData = {
        model,
        date,
        totcn,
        totpin,
        cnmade,
        pinmade,
        cnbal,
        pinbal,
    };

    conn.query('INSERT INTO shop3 SET ?', userData, (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }

      return res.status(200).json(userData);
    });
  });
});

// Get user data
router.get('/getusersShop3', (req, res) => {
  console.log("dmsaf")
  conn.query('SELECT * FROM shop3', (err, result) => {
    if (err) {
      return res.json({status: false, Error :"error"});
    }


    console.log(result)


    return res.json({status: true, Result :result});
  });
});

// Delete user API
router.delete('/deleteuserShop3/:id', (req, res) => {
  const { id } = req.params;

  conn.query('DELETE FROM shop3 WHERE id = ?', id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    return res.status(200).json({ message: 'User deleted successfully' });
  });
});

// Get single user
router.get('/induserShop3/:id', (req, res) => {
  const { id } = req.params;

  conn.query('SELECT * FROM shop3 WHERE id = ?', id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    if (!result.length) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json(result[0]);
  });
});

// Update users API
router.patch('/updateuserShop3/:id', (req, res) => {
  const { id } = req.params;
  const data = req.body;

  conn.query('UPDATE shop3 SET ? WHERE id = ?', [data, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    return res.status(200).json({ message: 'User updated successfully' });
  });
});
module.exports = router;