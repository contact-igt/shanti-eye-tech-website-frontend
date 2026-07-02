const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src/style/about.css');
let content = fs.readFileSync(filePath, 'utf8');

const oldStr = `.about-banner-stat {
  position: relative;
  overflow: hidden;
  min-height: 190px;
  padding: 25px 32px 30px;
  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: rgba(231, 239, 245, 0.78);
  box-shadow: 0 18px 44px rgba(40, 70, 88, 0.11);
  backdrop-filter: blur(17px);
  -webkit-backdrop-filter: blur(17px);
}
.about-banner-stat-icon {
  width: 52px;
  height: 52px;
  margin-bottom: 18px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(191, 214, 228, 0.88);
  color: #0c566a;
}`;

const newStr = `.about-banner-stat {
  position: relative;
  overflow: hidden;
  min-height: 140px;
  padding: 20px 24px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
.about-banner-stat-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 14px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.2);
  color: #0c566a;
}`;

if (content.includes(oldStr)) {
    content = content.replace(oldStr, newStr);
    fs.writeFileSync(filePath, content);
    console.log('Successfully updated about.css');
} else {
    console.error('Could not find the target string in about.css');
    // Log a bit of the file to see why it failed
    const startIdx = content.indexOf('.about-banner-stat {');
    if (startIdx !== -1) {
        console.log('Found .about-banner-stat { at index', startIdx);
        console.log('Snippet:', content.substring(startIdx, startIdx + 200));
    }
}
