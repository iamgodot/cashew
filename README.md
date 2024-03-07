# Cashew

A chat app built with MERN stack.

## Design

### Auth

Use Auth0 for auth integration.

1. Login

- The actual authentication/authorization happens in Auth0's server
- After that frontend sends jwt back
- Backend validates the token and request user info from Auth0
- If user doesn't exist, backend creates new user otherwise gets user from db
- Backend sends back user info
- Frontend(login page) gets user info and saves them in auth context
- Frontend(login page) redirects to homepage.

2. Logout

**For this part backend handling is optional.**

- Active
  - The actual logout happens in Auth0's server
  - Browser credentials get invalidated
  - Frontend calls logout api on backend
  - [ ] Backend records this event
  - Frontend redirects to login page
- Passive
  - Manually clear browser credentials
  - Frontend detects by `user`(from Auth0 hook) with useEffect()
  - Frontend redirects to login page
