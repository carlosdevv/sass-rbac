import { defineAbilitiesFor } from '@sass/auth'

const ability = defineAbilitiesFor({ role: 'MEMBER', id: 'id' })
const userCanInviteSomeoneElse = ability.can('delete', 'User')

console.log('userCanInviteSomeoneElse?', userCanInviteSomeoneElse)
