# askiimon documentation
## Initialisation(or giving birth to askiimon)
```javascript
import askiimon from "askiimon";
const personal_goblin = askiimon.birth("happy", "hello", "nodejs");
//                     init function  state    message  environment, either web or nodejs
// default values           -         idle        -      nodejs
```

## changing state(giving it mood swings)
```javascript
personal_goblin.setMood("angry");
personal_goblin.setMood("happy");
personal_goblin.setMood("sad");
personal_goblin.setMood("excited");
personal_goblin.setMood("crush");
personal_goblin.setMood("laughing");
//                      mood name
//                       string
```

### error case
```javascript
personal_goblin.setMood("puppy-eyes"); // does not exist
//                    falls back to idle
personal_goblin.setShowWarnings(true);
//                             boolean
```

Terminal/browser console:
```bash
! Warning, askiimon malfunctioned but it managed, mood "puppy-eyes" does not exist, please make it learn that emotion first
```

## registering a new emotion(or making it learn one)

```javascript
personal_goblin.learnMood("puppy-eyes", "(^◕.◕^)");
//                         mood name   mood reaction
//                          string        string
```

Terminal/browser console:
```bash
••• 3...2...1
✓ askiimon has successfully learned mood "puppy-eyes"
```

## setting a message(making him talk)
```javascript
personal_goblin.setMessage("Meow");
personal_goblin.setMessage("idiot");
personal_goblin.setMessage("finally someone who doesn't vibe code");
//                                         string
```

## extra options
### setShowWarning
- shows internal warnings, success, & error message
- can only pass in a boolean