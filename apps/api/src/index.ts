import { defineAbilitiesFor } from '@sass/auth'

const ability = defineAbilitiesFor({ role: 'MEMBER' })
const userCanInviteSomeoneElse = ability.can('create', 'User')

console.log('userCanInviteSomeoneElse?', userCanInviteSomeoneElse)
