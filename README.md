# TDestroyer
Script for adding a proposed answer to the question in Google/Microsoft Forms.  

![obraz](https://github.com/user-attachments/assets/ff73c5f9-f316-49cc-ab90-bd9c330fef8f)


# How to use
Inside the repository, are three files:  
1. `TDestroyer.js` is a source code for the rest of the files, and can be safely omitted.
2. `TDestroyer.user.js` is a Tampermonkey/Greasemonkey userscript, and as such requires:  
- [Tampermonkey (Firefox)](https://addons.mozilla.org/pl/firefox/addon/tampermonkey/)
- [Tampermonkey (Chrome)](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- [Tampermonkey (Opera)](https://addons.opera.com/pl/extensions/details/tampermonkey-beta/)
- Use your own browsers' addon store, and install Tampermonkey/Greasemonkey.
Open Tampermonkey, click "Add new script" inside the menu, and paste the contents of the `TDestroyer.user.js` in there.
Alternatively, open `TDestroyer.user.js` raw, on Github, and Tampermonkey should care for the rest.
3. `TDestroyer.bookmarklet.txt` is a special form of the source code meant for use in a bookmarklet form.
  - Create in your browser a bookmark.
  - Paste the contents of the `TDestroyer.bookmarklet.txt` into an address bar of the bookmark.
  - Done. Clicking it should inject the code into the website and after a short while show the answers.
# Modification
You can freely modify the base and userscript form, since bookmarklet is encoded in URI, so the readability is close to zero.
