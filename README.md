# CDA-tools
A browser extension that improves the use of www.cda.pl\
**Tested only on Chrome!**

## What is this
### *manifest.json*
The file that sets the extension.\
```json
    "content_scripts": [
      {
        "matches": ["https://www.cda.pl/*"], //Sets on which pages it works.
        "js": ["premium_remover.js", "video_link.js"] //Sets which scripts to use
      }
    ]
```

### *premium_remover.js*
Removes the entire *div* with a video which is premium.
  
### *video_link.js*
Show in console link to video directly from server.\
Press F12 to open browser console!
```` 
--------------- Video URL --------------------
https://v...0.cda.pl/l....f.mp4
--------------- Video URL --------------------
````
  
## How to use
You have two ways:

### A. Use external extension which allows you to use JavaScript on sites.
1. Install extension.
2. Copy code from files.

### B. Create simple extension.
1. Download reopsitory.
2. Go to browser extension page (*chrome://extensions/* ).
3. Create extension: Load unpacked - select folder with files (*CDA-tools*).

