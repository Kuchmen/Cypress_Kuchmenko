function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export const users = {

    testUser1: {
        "id": "t45AiwidW",
        "uuid": "6383f84e-b511-44c5-a835-3ece1d781fa8",
        "firstName": "Edgar",
        "lastName": "Johns",
        "username": "Katharina_Bernier",
        "password": "$2a$10$5PXHGtcsckWtAprT5/JmluhR13f16BL8SIGhvAKNP.Dhxkt69FfzW",
        "email": "Norene39@yahoo.com",
        "phoneNumber": "625-316-9882",
        "avatar": "https://cypress-realworld-app-svgs.s3.amazonaws.com/t45AiwidW.svg",
        "defaultPrivacyLevel": "public",
        "balance": 168137,
        "createdAt": "2019-08-27T23:47:05.637Z",
        "modifiedAt": "2020-05-21T11:02:22.857Z",
        "passwordWithoutHash": "s3cret"
    },
    newUser: {
        "firstName": `Andrey${getRandomInt(10000)}`,
        "lastName": `Shevchenko${getRandomInt(10000)}`,
        "username": `John${getRandomInt(10000)}`,
        "password": "s3cret"
    }
}