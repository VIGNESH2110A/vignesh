const { useContext } = require('react');
const { cartContext } = require('./App');
const { useEffect } = require('react');

const {value,setValue} = useContext(cartContext)
useEffect(()=>
{

const { Client } = require('pg');
const { useEffect } = require('react');
const client = new Client({
  host: 'localhost',
  user: 'post',
  port: 5432,
  password: 'vignesh',
  database: 'postgres'
});

  client.connect()
    .then(() => {
      console.log('Connected to the database');
      client.query('SELECT * FROM postgres.try_db.vignesh', (err, res) => {
        if (!err) {
          const columnValues = res.rows.map(row => {
            if (row.name === "vignesh" && row.phonenumber==7871973447) {
              console.log("true");
            }
          });
         
        } else {
          console.error(err.message);
        }
        client.end();
      });
    })
    .catch(err => {
      console.error('Error connecting to the database:', err.message);
    });
  },[value]
)