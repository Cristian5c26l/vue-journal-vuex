
// el state es reactivo, por lo cual, si una propiedad del estado
// cambio en un componente X, si esta propiedad se encuentra en el componente Y
// entonces esta propiedad tambien cambia ahi. Dicho cambio puede hacerce, por ejemplo,
// con un boton
// export default () => ({// asi se crea mi estado reactivo

// })


export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),// 45938475968734
            date: new Date().toDateString(), // sat, 23, Julio
            text: 'In occaecat reprehenderit laboris irure sunt nulla velit esse elit enim adipisicing duis. Occaecat quis minim deserunt deserunt. Minim excepteur sunt nostrud dolore. Anim voluptate fugiat ad laborum aute nulla in. Enim aute sint magna consectetur sint aute ex cupidatat est ullamco. Elit labore amet ad cillum. Magna adipisicing cillum nostrud eu incididunt.',
            picture: null, // https://
        },
        {
            id: new Date().getTime() + 1000,// 45938475968734
            date: new Date().toDateString(), // sat, 23, Julio
            text: 'Non labore irure consequat consectetur. Dolore et mollit in eu non exercitation excepteur do voluptate. Cillum consequat in fugiat exercitation exercitation nisi. Id ex cupidatat esse ea pariatur nostrud deserunt esse incididunt Lorem. Sunt velit est ad sunt enim aute laboris. Amet laboris adipisicing ut nulla voluptate esse cillum id tempor est eu.',
            picture: null, // https://
        },
        {
            id: new Date().getTime() + 2000,// 45938475968734
            date: new Date().toDateString(), // sat, 23, Julio
            text: 'Adipisicing cupidatat consequat laborum cupidatat esse occaecat anim exercitation proident. Esse voluptate velit minim ea et. Laborum est enim aute ad eiusmod consequat reprehenderit. Eiusmod sit qui ad est nulla ullamco anim dolore tempor commodo dolore dolor. Labore velit occaecat incididunt duis ipsum non aute sit mollit sint. Anim exercitation ipsum nulla esse eu in nisi minim enim amet magna elit. Quis anim ad anim ullamco laborum voluptate non anim id est.',
            picture: null, // https://
        },
    ]
})