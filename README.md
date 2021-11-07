# serlo-codecept

## Install

### Checkout and install

```bash
git clone https://github.com/Entkenntnis/serlo-codecept.git
cd serlo-codecept
npm install
``` 

### Add secrets

Add a file `secrets.js` with this content:

```
module.exports = {
  username: '<<<staging username>>>',
  password: '<<<staging password>>>',
  userPassword: '<<<default user password staging>>>',
}
```

### Run

```
npm run codeceptjs
```
