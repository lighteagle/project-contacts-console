console.log(`=============== Show Names ===============`)

const names = ['Alpha Avalon', 'Betty Brave', 'Gamma Gacurio']

const showNames = names => {
  for (let index = 0; index < names.length; index++) {
    const name = names[index]
    console.log(`[${index+1}] ${name}`)
  }
}
showNames(names)

console.log(`\n=============== Filter Names ===============`)

const filterNames = (names, minimumLength) => {
  let newNames = []
  for (let index = 0; index < names.length; index++) {
    const name = names[index]
    if (name.length >= minimumLength) {
      newNames.push(name)
    }
  }
  return newNames
}
const filteredNames = filterNames(names, 12)
showNames(filteredNames)

console.log(`\n=============== JavaScript Complex ===============`)

const myContacts = [{
    id: 1,
    name: 'Alpha Avalon',
    phone: '+1 111 101010',
    email: 'alpha@avalon.org',
    favorite: true,
    rating: 9,
    tags: ['popular', 'cool']
  },
  {
    id: 2,
    name: 'Betty Brave',
    phone: '+62 812 242424',
    email: 'betty@braverian.com'
  },
  {
    id: 3,
    name: 'Gamma Gacurio',
    phone: '+63 813 363636',
    email: 'gamma@gacrio.dev'
  }
]


console.log(`\n=============== Show Contacs ===============`)

const showContacts = contacts => {
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index]
    console.log(
      `[${contact.id}] ${contact.name} (${contact.phone}) <${contact.email}>`
    )
  }
}

showContacts(myContacts)


console.log(`\n========= Filter Contacs  ( minimum lenght : 12)=========`)

const filterContacts = (contacts, minimumNameLength) => {
  let newContacts = []

  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index]

    if (contact.name.length >= minimumNameLength) {
      newContacts.push(contact)
    }
  }
  return newContacts
}

const filteredContacts = filterContacts(myContacts, 12)

showContacts(filteredContacts)