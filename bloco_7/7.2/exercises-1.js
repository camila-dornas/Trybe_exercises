const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (objeto) => {
    const obj1 = order.order.delivery.deliveryPerson;
    const obj2 = order.name;
    const obj3 = order.phoneNumber;
    const obj4 = order.address.street;
    const obj5 = order.address.number;
    const obj6 = order.address.apartment;

    console.log(`Olá ${obj1}, entrega para: ${obj2}, Telefone: ${obj3}, R. ${obj4}, Nº: ${obj5}, AP: ${obj6}.`);
  }
  
  customerInfo(order);
  
  // --> Alterando chaves e valores <-- //
  const orderModifier = (objeto) => {
    const newObject = Object.assign({}, order);
    newObject.name = 'Luiz Silva';
    const pizzas = Object.keys(order.order.pizza);
    for(let key = 0; key<= pizzas.length; key += 1) {
      pizzas[0] = 'muzzarella'
      pizzas[1] = 'calabresa'
    };
    newObject.order.pizza.muzzarella = {
      amount: 1,
      price: 25,
    }
    newObject.order.pizza.calabresa = {
      amount: 1,
      price: 25,
    }
    newObject.payment = newObject.order.pizza.muzzarella.price + newObject.order.pizza.calabresa.price;
    console.log(`Ola ${newObject.name}, o total do seu pedido de ${pizzas} e ${order.order.drinks.coke.type} é R$ ${newObject.payment},00`);  
  }
  
  orderModifier(order);