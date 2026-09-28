const target = new Date('2027-01-26T00:00:00+05:30').getTime();
function updateCountdown(){
  const now=Date.now(), diff=Math.max(0,target-now);
  const days=Math.floor(diff/86400000), hours=Math.floor(diff/3600000)%24, minutes=Math.floor(diff/60000)%60, seconds=Math.floor(diff/1000)%60;
  document.getElementById('days').textContent=String(days).padStart(3,'0');
  document.getElementById('hours').textContent=String(hours).padStart(2,'0');
  document.getElementById('minutes').textContent=String(minutes).padStart(2,'0');
  document.getElementById('seconds').textContent=String(seconds).padStart(2,'0');
}
updateCountdown(); setInterval(updateCountdown,1000);


// ============================================================
// GOOGLE DRIVE PHOTO ALBUM
// 1. Create a Google Drive folder for wedding photos.
// 2. Set General access to: Anyone with the link -> Viewer.
// 3. Copy the folder URL and paste it below.
// ============================================================
const GOOGLE_DRIVE_PHOTO_FOLDER = 'PASTE_YOUR_GOOGLE_DRIVE_FOLDER_LINK_HERE';
const driveButton = document.getElementById('driveButton');
if (driveButton && GOOGLE_DRIVE_PHOTO_FOLDER.startsWith('http')) {
  driveButton.href = GOOGLE_DRIVE_PHOTO_FOLDER;
}
