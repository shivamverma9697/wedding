# Shivam & Priya Wedding Website

Royal Indian wedding invitation website for GitHub Pages.

## Publish on GitHub Pages

1. Create a new GitHub repository, for example `shivam-priya-wedding`.
2. Upload `index.html`, `style.css`, `script.js`, and the `images` folder.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then Save.
6. GitHub will provide the public Pages URL.

## Add photos

Replace the placeholder photo blocks in `index.html` with image tags pointing to files in `images/`.

## Before publishing

- Add dates/times for Haldi, Mehndi and Sangeet.
- Add the bride's contact number.
- Replace gallery placeholders with real photos.
- Optionally add background music and a custom domain.


## Google Drive Wedding Photo Album

The website includes a **View & Download Photos** button. To connect it to your album:

1. Create a folder in Google Drive, for example `Shivam & Priya Wedding Photos`.
2. Upload wedding photos into that folder whenever you want.
3. Right-click the folder → **Share** → under General access select **Anyone with the link** and **Viewer**.
4. Copy the Google Drive folder link.
5. Open `script.js` and replace:

```js
const GOOGLE_DRIVE_PHOTO_FOLDER = 'PASTE_YOUR_GOOGLE_DRIVE_FOLDER_LINK_HERE';
```

with your folder URL.

Guests can then click **View & Download Photos** on the website and download the photos you have shared. You do not need to edit the website every time you add a new photo—just upload the new photos into the same Google Drive folder.

**Privacy note:** Anyone who has the shared folder link can access the photos. Do not put private or sensitive photographs in this public guest album.
