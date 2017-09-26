/* ULTRA E-MAIL APP */

/* PART I */

// Main User
// Mutliple email addresses: gMail, yMail, .me
// Corresponding email inboxes
// ^ Individual Messages

/* PART II */

const emailAdmin = {
    adminId: Number,
    name: String,
    accounts: [],
    defaultAccount: String
}

const accounts = {
    accountId: Number,
    name: String,
    emailAddress: String,
    inbox: {{data}}
}

/* PART III */

const exampleAccount = {
    adminId: 2,
    name: "Grant Spell",
    accounts: [{
        accountOne: [{
            name: "gMail",
            emailAddress: "example@gmail.com"
            accountId: 1,
            inbox: {{data}}
        }],
        accountTwo: [{
            name: "yMail",
            emailAddress: "example@ymail.com"
            accountId: 2,
            inbox: {{data}}
        }],
        accountThree: [{
            name: ".me",
            emailAddress: "example@example.me"
            accountId: 3,
            inbox: {{data}}
        }]
    }]
}