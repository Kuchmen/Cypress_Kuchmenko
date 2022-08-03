function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export const banks = {

     newBank : {
        bank_name: `Bank${getRandomInt(10000000)}`,
        routing_number: `${getRandomInt(1000000000 )}`,
        account_number: `${getRandomInt(1000000000)}`
    }

}