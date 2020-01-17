export default {
    authenticated: false,

    //Podaci trenutnog korisnika
    userId: 'your_id',
    userEmail: 'your_email',
    position: 'your_position',
    table: 'Table#1',

    food_options: ['Appetizer', 'Main course', 'Dessert'],
    drink_options: ['Soda', 'Juice', 'Other', 'Beer', 'Wine', 'Liquors'],

    data_fetched: false,

    cards:[],
    order:[],
    
    
    call_cards:[],
    call_cards_staff:[],
    order_cards:[],


    //Funkcije
    current_date(){
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
       
        return yyyy + '/' + mm + '/' + dd; //https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
      },
    current_time(){
      let today = new Date();
      return today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(); //https://tecadmin.net/get-current-date-time-javascript/
    },

    //podaci za funkcionalnosti managera
    imageData: null,
    statistics:{
      id: null,
      /*
      hour_price: null,
      hour_orders: null,
      day_orders: null,
      day_price: null 
      */
      hour_price: [1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023],
      hour_orders: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
      day_orders: [0, 1, 2, 3, 4, 5, 6],
      day_price: [1000, 1001, 1002, 1003, 1004, 1005, 1006]      
    },
    users: [],

    //Listeners
    product_listener: null,
    orders_listener: null,
    waiter_calls_listener: null,
    staff_calls_listener: null,
    statistics_listener: null,
    users_listener: null,
}