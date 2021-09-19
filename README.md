<h1 align="center">Dynamo Converter</h1>

> Convert DynamoDB JSON to and from regular JSON, <strong>with the added ability of converting arrays</strong>

<p align="center">[App](https://benpickford.me/dynamoconverter)</p>


## Example
#### In
```
{
  "string": {"S": "foo"},
  "list": {"L": [{"S": "fizz"}, {"S": "buzz"}, {"S": "pop"}]},
  "map": {
    "M": {
      "nestedMap": {
        "M": {
          "key": {"S": "value"}
        }
      }
    }
  },
  "number": {"N": "123"},
  "nullValue": {"NULL": true},
  "boolValue": {"BOOL": true}
}
```

#### Out
```
{
  "string": "foo",
  "list": [
    "fizz",
    "buzz",
    "pop"
  ],
  "map": {
    "nestedMap": {
      "key": "value"
    }
  },
  "number": 123,
  "nullValue": null,
  "boolValue": true
}
```

## Development
This project is bootstrapped using `create-next-app`

### Running
`yarn start`


## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/bmpickford/cem-plugin-docsify/issues)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Benjamin Pickford](https://github.com/bmpickford).<br />
This project is [MIT](https://github.com/bmpickford/cem-plugin-docsify/blob/master/LICENSE) licensed.