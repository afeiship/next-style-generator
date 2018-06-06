# next-style-generator
> Style generator for react native based on next

## install:
```bash
npm install -S afeiship/next-style-generator --registry=https://registry.npm.taobao.org
```

## usage:
```js
// Generate  list:
var list = [1, 2, 3, 4, 5, 6, 10];

var result = nx.styleGenerator(list, (key, value) => {
  return {
    key: `blank${value}`,
    value
  };
});

/* result:
{ blank1: 1,
  blank2: 2,
  blank3: 3,
  blank4: 4,
  blank5: 5,
  blank6: 6,
  blank10: 10 }
*/



// Genearte map:

var map = {
  e: '#eee',
  0: '#000',
  f: '#fff',
  primary: '#F60'
};

var result = nx.styleGenerator(map, (key, value) => {
  return {
    key: `c_${key}`,
    value: {
      color: value
    }
  };
});

/* result:
{ c_0: { color: '#000' },
  c_e: { color: '#eee' },
  c_f: { color: '#fff' },
  c_primary: { color: '#F60' } 
}
*/
```
