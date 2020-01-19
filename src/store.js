export default {
    authenticated: false,

    //Podaci trenutnog korisnika
    userId: 'your_id',
    userEmail: 'your_email',
    position: null,
    table: 'Table#1',

    food_options: ['Appetizer', 'Main course', 'Dessert'],
    drink_options: ['Soda', 'Juice', 'Other', 'Beer', 'Wine', 'Liquors'],

    data_fetched: false,

    cards:[],
    order:[],
    
    call_cards:[],
    call_cards_staff:[],
    order_cards:[],


    //podaci za funkcionalnosti managera
    imageData: null,
    misc:{
      id: null,
      registration_code: ''
    },
    statistics:{
      id: null,
      hour_price: null,
      hour_orders: null,
      day_orders: null,
      day_price: null  
    },
    users: [],

    //Listeners
    product_listener: null,
    orders_listener: null,
    waiter_calls_listener: null,
    staff_calls_listener: null,
    statistics_listener: null,
    users_listener: null,
    misc_listener: null,


    //Funkcije------------------------------------------------------
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

}