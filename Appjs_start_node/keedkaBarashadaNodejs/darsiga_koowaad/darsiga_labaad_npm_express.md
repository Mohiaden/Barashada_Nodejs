# waxaan u baahanahay u dhaxeeye 1.express

1.isku xirka moorada guud waa http wuu shaqeeya
2. hage surinka la maro wuu isku soo xiray waa  express waa dhamaatay howshaas
3. albaabkii wuu furay sumad 3000 ayaa laga galay
4. moorada waxa soo gali albaabkii waa la ood qaaday
5. ama ka xibi albaab maxirna
6. u fiirso kuudaha hoose


## soo kali moorada walax
<!-- //Perform a GET Request -->
```javascript
const https = require('https')
const options = {
  hostname: 'example.com',
  port: 443,
  path: '/todos',
  method: 'GET'
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()
```

## kabi bixi moorada walax

```javascript
const https = require('https')

const data = new TextEncoder().encode(
  JSON.stringify({
    todo: 'Buy the milk 🍼'
  })
)

const options = {
  hostname: 'whatever.com',
  port: 443,
  path: '/todos',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.write(data)
req.end()

```
