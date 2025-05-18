import { openDatabase } from 'react-native-sqlite-storage';
var customerDB = openDatabase({ name: 'CartDB.db' });
setTimeout(function(){
    customerDB.transaction(function (txn) {
        txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='cart'",
        [],
        function (txn, res) {
            console.log('item:cartDB:::', res.rows.length);
            if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS cart', []);
            txn.executeSql(
                'CREATE TABLE IF NOT EXISTS cart(id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(20),author VARCHAR(20),buy INTEGER, image VARCHAR(20))',
                []
            );
            }
        }
        );
    });
},1000);

//promise or callback
export var  getCart = () => {
    var sql = "select * from cart";
    return new Promise(function(resolve, reject) {
        customerDB.transaction(function (txn) {
            txn.executeSql(sql,[],
              function (txn, res) {
                  let records = [];
                  for(let i = 0; i< res.rows.length;i++){
                    records.push(res.rows.item(i))
                  }
                records.json = () =>{res};
                console.log('result:', records);
                resolve(records);
              },
              function(error){
                console.log('error:', error);
              }
            );
          });
      });
};

export const addCart = (book) =>{
    console.log("DB addCart.."+JSON.stringify(book));
    var sql = "INSERT INTO cart (title, author,buy,image) VALUES ('"+book.title+"', '"+book.author+"', '"+book.buy+"','"+book.image+"')";
    return new Promise(function(resolve, reject) {
        customerDB.transaction(function (txn) {
            txn.executeSql(sql,
             // "INSERT INTO customers (name, email, phone, address) VALUES ("+customer.name+", "+customer.email+", "+customer.phone+","+customer.address+")",
              [],
              function (txn, res) {
                res.json = () =>{res};
                resolve(res);
              },
              function(error){
                console.log('error:', error);
              }
            );
          });
      });
}

export const deleteCart = (id) =>{
    console.log("DB deleteCustomer.. "+id.id);
    var sql = "DELETE FROM cart WHERE id = '"+id.id+"'";
    return new Promise(function(resolve, reject) {
        customerDB.transaction(function (txn) {
            txn.executeSql(sql,
              [],
              function (txn, res) {
                res.json = () =>{res};
                resolve(res);
              },
              function(error){
                console.log('error:', error);
              }
            );
          });
      });
}