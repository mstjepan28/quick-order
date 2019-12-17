export default {
    authenticated: false,
    userEmail: 'your_email',
    position: 'your_position',

    food_options: ['Appetizer', 'Main course', 'Dessert'],
    drink_options: ['Soda', 'Juice', 'Other', 'Beer', 'Wine', 'Liquors'],
    order_state: ['Available', 'Being prepared', 'Finished'],

    data_fetched: false,

    cards:[
        
    ],
    order:[
      
    ],
    call_cards:[
        
    ],
    order_cards:[
        
    ],
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