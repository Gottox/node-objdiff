[![Flattr this git repo](http://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=Gottox&url=https://github.com/Gottox/node-objdiff&title=node-objdiff&language=&tags=github&category=software)


### ObjDiff

This node library implements a very simple diff algorithm for javascript/json objects.

An example diff object looks like:

```
> objdiff({a:2,c:1},{b:2,c:2})
{ a: 
   { '$changed': true,
     '-': 2 },
  c: 
   { '$changed': true,
     '-': 1,
     '+': 2 },
  b: 
   { '$changed': true,
     '+': 2 } }
```

every value, that has changed is represented by an object with the key-value
pair ```$changed: true```.

## Installation

### Node
```
# npm install objdiff
```

### Browser

```
# git clone git://github.com/Gottox/node-objdiff.git
# cd node-objdiff
# make build
```

This compiles a [browserbuild](https://github.com/LearnBoost/browserbuild)
version to dist/objdiff


## Usage

### Node

``` javascript
var objdiff = require('objdiff').objdiff
objdiff({a:1}, {b:2});
```

### Browser

``` html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title></title>
		<script type="text/javascript" src="dist/objdiff.js"></script>
	</head>
	<body>
		<script type="text/javascript">
			var objdiff = ObjDiff.objdiff
			document.write(JSON.stringify(objdiff({a:1}, {b:2})));
		</script>
	</body>
</html>
```
