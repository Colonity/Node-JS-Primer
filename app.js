//console.log('Hello World5');
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

class order {
    delivered=false;

    constructor(id,message){
        this.id=id;
        this.message=message;
    }

    summarize_2(){
        const summary = 'order id: ' +this.id+', message: ' +this.message+', delivered: '+this.delivered;
        return summary;
    }

    //{Parameterit, p2, ...)=>{Koodi}
    summarize = async() => {
        console.log('Start Summarize');
        await sleep(2000);
        const summary = 'order id: ' +this.id+', message: ' +this.message+', delivered: '+this.delivered;
        console.log('Summarize ready');
        return summary;
    }

    deliver = async ()=> {
        console.log('start delivery');
        await sleep(2000);
        this.delivered=true;
        console.log('delivery ready');
    }
}

let order_obj =new order(1234,'The order');


/*
let order = {
    id: 1234,
    message: 'my order',
    delivered: false
}*/

const order_id = 1234;
const order_message = 'my order';
//var order_message1 = "my order";
//var order_message2 = `my ${order_id} order`;
/* */
let order_delivered = false; 

function summarize_order(id,message, delivered){
    const summary = 'order id: ' +id+', message: ' +message+', delivered: '+delivered;
    return summary;
}

// const order_summary = summarize_order(order_id,order_message,order_delivered)
// console.log(order_summary);

// order.delivered = true; 
// const order_summary_2 = summarize_order(order_obj.id,order_obj.message,order_obj.delivered)
// console.log(order_summary_2);


// const order_summary_3 =order_obj.summarize();
// console.log(order_summary_3);

// const order_summary_4 =order_obj.summarize_2();
// console.log(order_summary_4);

console.log('Vaihe 1');
order_obj.deliver()
    .then(()=>{
        return order_obj.summarize();
    })
    .then((retValue)=>{console.log(retValue)})

// order_obj.summarize()
//     .then( (summary)=>{
//         console.log(summary)} )

console.log('Vaihe 2');