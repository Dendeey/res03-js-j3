let users = [
    {
        id: 0,
        isActive: false,
        age: 24,
        eyeColor: "green",
        name: "Marsh Obrien",
        company: "CENTURIA"
    },
    {
        id: 1,
        isActive: false,
        age: 21,
        eyeColor: "green",
        name: "Rios Gibson",
        company: "MULTRON"
    },
    {
        id: 2,
        isActive: false,
        age: 29,
        eyeColor: "brown",
        name: "Morgan Buchanan",
        company: "CENTURIA"
    },
    {
        id: 3,
        isActive: true,
        age: 25,
        eyeColor: "brown",
        name: "Franklin Dyer",
        company: null
    },
    {
        id: 4,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Keller Pitts",
        company: "CENTURIA"
    },
    {
        id: 5,
        isActive: false,
        age: 25,
        eyeColor: "brown",
        name: "Davenport Maddox",
        company: "MULTRON"
    },
    {
        id: 6,
        isActive: true,
        age: 31,
        eyeColor: "brown",
        name: "Judith Graves",
        company: null
    },
    {
        id: 7,
        isActive: true,
        age: 26,
        eyeColor: "blue",
        name: "Hoffman Hess",
        company: "CENTURIA"
    },
    {
        id: 8,
        isActive: true,
        age: 22,
        eyeColor: "blue",
        name: "Sheena Goff",
        company: "MULTRON"
    },
    {
        id: 9,
        isActive: false,
        age: 39,
        eyeColor: "brown",
        name: "Rose Lawrence",
        company: "EVENTIX"
    },
    {
        id: 10,
        isActive: false,
        age: 35,
        eyeColor: "blue",
        name: "Alston Goodman",
        company: "CENTURIA"
    },
    {
        id: 11,
        isActive: true,
        age: 28,
        eyeColor: "brown",
        name: "Nannie Berry",
        company: null
    },
    {
        id: 12,
        isActive: true,
        age: 27,
        eyeColor: "blue",
        name: "Lynette Jackson",
        company: "CENTURIA"
    },
    {
        id: 13,
        isActive: false,
        age: 23,
        eyeColor: "blue",
        name: "Samantha Garrett",
        company: "EVENTIX"
    },
    {
        id: 14,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Grimes Savage",
        company: "CENTURIA"
    },
    {
        id: 15,
        isActive: false,
        age: 31,
        eyeColor: "green",
        name: "Atkinson Kirby",
        company: null
    },
    {
        id: 16,
        isActive: false,
        age: 38,
        eyeColor: "green",
        name: "Jami Burgess",
        company: "CENTURIA"
    },
    {
        id: 17,
        isActive: true,
        age: 31,
        eyeColor: "blue",
        name: "Sallie Albert",
        company: "CENTURIA"
    },
    {
        id: 18,
        isActive: false,
        age: 26,
        eyeColor: "blue",
        name: "Ora Hobbs",
        company: "EVENTIX"
    },
    {
        id: 19,
        isActive: true,
        age: 30,
        eyeColor: "blue",
        name: "Pruitt Sellers",
        company: "CENTURIA"
    }
];
    

function countActiveUsers(users) 
{
    let activeUsers = 0;
    for (activeUser of users) 
    {
        if (activeUser.isActive === true) 
        {
            activeUsers = activeUsers + activeUser.isActive;
        }

    }
    return activeUsers;
}

console.log(`We currently have ${ countActiveUsers(users) } active users.`);

function getActiveUsers(users){
    
    let getActiveUser = 0;
    for (activeUser of users) 
    {
        if (activeUser.isActive === true) 
        {
            getActiveUser = getActiveUser + activeUser.isActive;
        }
    }
    
    return getActiveUser;
}

function hasBlueEyes(activeUsers) {
    
    let ActiveUserBlueEyes = 0;
    
    for(user of users)
    {
        if(user.eyeColor === "blue" && user.isActive === true)
        {
            ActiveUserBlueEyes = ActiveUserBlueEyes + 1;
        }
    }
    
    return ActiveUserBlueEyes;
}

console.log(`Out of our currently ${getActiveUsers(users)} active users, ${hasBlueEyes()} have blue eyes.`);

function getActiveUsersAges(users) 
{
    let ActiveUsersAges = 0;
    for(user of users)
    {
        if(user.isActive === true)
        {
            ActiveUsersAges = ActiveUsersAges + user.age;
        }
    }
    return ActiveUsersAges;
}

let result = getActiveUsersAges(users);
console.log(result);

function computeActiveUsersAverageAge(ages) 
{
    let AverageAge = getActiveUsersAges(users) / getActiveUsers(users);
    return AverageAge;
}

let average = computeActiveUsersAverageAge();
console.log(`Out of our currently ${getActiveUsers(users)} active users, the average age is ${average}.`);

function setMultronToCenturia(users) 
{
    let MultronsToCenturia = 0;
    for(user of users)
    {
        if(user.company === "MULTRON")
        {
            user.company = "CENTURIA";
            MultronsToCenturia++;
        }
    }
    
    return MultronsToCenturia;
}

let MultronsToCenturia = setMultronToCenturia(users);
console.log(`${MultronsToCenturia} user companies have been changed from MULTRON to CENTURIA.`);

function getBrownEyedUsers(users) 
{
    let BrownEyedUsers = 0;
    for(user of users)
    {
        if(user.eyeColor === "brown" && user.company !== "CENTURIA")
        {
            BrownEyedUsers = BrownEyedUsers + 1;
        }
    }
    
    return BrownEyedUsers;
}

let BrownEyedUsers = getBrownEyedUsers(users);
console.log(`${BrownEyedUsers} users with brown eyes do not work at CENTURIA`);

function getGreenEyedActiveUsers(users)
{
    let green = 0;
    
    for (user of users)
    {
        if(user.isActive === true && user.eyeColor === "green")
        {
            green = green + 1;
        }
    }
    
    return green;
}

function getGreenEyedNotActiveUsers(users)
{
    let green = 0;
    
    for (user of users)
    {
        if(user.isActive === false && user.eyeColor === "green")
        {
            green = green + 1;
        }
    }
    
    return green;
}

let greenActive = getGreenEyedActiveUsers(users);
let greenNotActive = getGreenEyedNotActiveUsers(users);
console.log(`Out of our green eyed users ${greenActive} are active and ${greenNotActive} are inactive`);

function getBlueEyedActiveUsers(users)
{
    let blue = 0;
    
    for (user of users)
    {
        if(user.isActive === true && user.eyeColor === "blue")
        {
            blue = blue + 1;
        }
    }
    
    return blue;
}

function getBlueEyedNotActiveUsers(users)
{
    let blue = 0;
    
    for (user of users)
    {
        if(user.isActive === false && user.eyeColor === "blue")
        {
            blue = blue + 1;
        }
    }
    
    return blue;
}

let blueActive = getBlueEyedActiveUsers(users);
let blueNotActive = getBlueEyedNotActiveUsers(users);
console.log(`Out of our blue eyed users ${blueActive} are active and ${blueNotActive} are inactive`);

function getBrownEyedActiveUsers(users)
{
    let brown = 0;
    
    for (user of users)
    {
        if(user.isActive === true && user.eyeColor === "brown")
        {
            brown = brown + 1;
        }
    }
    
    return brown;
}

function getBrownEyedNotActiveUsers(users)
{
    let brown = 0;
    
    for (user of users)
    {
        if(user.isActive === false && user.eyeColor === "brown")
        {
            brown = brown + 1;
        }
    }
    
    return brown;
}

let brownActive = getBrownEyedActiveUsers(users);
let brownNotActive = getBrownEyedNotActiveUsers(users);
console.log(`Out of our brown eyed users ${brownActive} are active and ${brownNotActive} are inactive`);
