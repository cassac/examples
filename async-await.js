const makeSandwich = (name, ingredients) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            return res({ plate: 
                `a ${name} sandwich with ${(ingredients || []).join(', ')}. enjoy!`
            })      
        }, 1000)
    })
}

const getIngredients = (name) => {
    let ingredients
    switch (name) {
        case 'bbq':
            ingredients = ['pork', 'sauce', 'bun']
            break;
        case 'club': 
        default:
            ingredients = ['turkey', 'swiss', 'mayo']
            break;
    }
    return new Promise((res, rej) => {
        setTimeout(() => {
            return res(ingredients)      
        }, 600)
    })
}

const orderSandwich = (name) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            return res(name)      
        }, 250)
    })
}

const meHungry = async (name = 'BBQ') => {
    const order = await orderSandwich(name)
    const ingredients = await getIngredients(order)
    const make = await makeSandwich(name, ingredients)
    return Promise.all([order, ingredients, make]).then(([result1, result2, result3]) => {
        console.log(result3.plate)
    })
}

meHungry('club')
