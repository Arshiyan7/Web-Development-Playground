function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You walked the dog")
        }, 2000);
    })
}

function CleanTheKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You cleaned the Kitchen")
        }, 2500);
    })
}

function ThrowOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You threw out the trash")
        }, 500);
    })
}

async function chores() {
    const dog = await walkDog();
    console.log(dog);

    const kitchen = await CleanTheKitchen();
    console.log(kitchen);

    const trash = await ThrowOutTrash();
    console.log(trash);

    console.log("All tasks are finished!");
}

chores();
