# 🚀 DEPLOY PODAR SYSTEM ON GITHUB PAGES

## Complete Step-by-Step Guide (For Beginners)

---

## 📋 WHAT YOU'LL NEED

- ✅ Computer with internet
- ✅ Email address
- ✅ Your Podar system files (already downloaded)
- ✅ 30 minutes of time

---

## 🎯 OVERVIEW

GitHub Pages is **FREE** hosting for static websites. Perfect for your exam system!

**What we'll do:**
1. Create GitHub account (5 min)
2. Create repository (2 min)
3. Upload your files (5 min)
4. Enable GitHub Pages (2 min)
5. Get your live URLs (1 min)
6. Update Google Script URL (5 min)
7. Test everything (10 min)

**Result:** Your system will be live at URLs like:
- `https://yourschool.github.io/podar-recruitment/registration`
- `https://yourschool.github.io/podar-recruitment/exam`

---

## STEP 1: CREATE GITHUB ACCOUNT (5 minutes)

### 1.1 Go to GitHub
- Open browser
- Go to: **https://github.com**

### 1.2 Sign Up
- Click **"Sign up"** button (top right)
- Enter your email: `podarschool@example.com`
- Create password: (strong password)
- Choose username: `podarschool` or `podarinternational`
- Verify you're human (puzzle)
- Click **"Create account"**

### 1.3 Verify Email
- Check your email inbox
- Click verification link from GitHub
- You're now logged in!

---

## STEP 2: CREATE NEW REPOSITORY (2 minutes)

### 2.1 Create Repository
- Click **"+"** icon (top right)
- Select **"New repository"**

### 2.2 Fill Repository Details

**Repository name:** `podar-recruitment`
(Must be lowercase, no spaces)

**Description:** `Podar International School - Teacher Recruitment System - January 2026`

**Public or Private:** Choose **Public** (required for free GitHub Pages)

**Initialize repository:**
- ✅ Check: **"Add a README file"**

### 2.3 Create
- Click **"Create repository"** button
- Done! Your repo is created.

---

## STEP 3: UPLOAD FILES (5 minutes)

### 3.1 You'll see your empty repository page

### 3.2 Upload Files

**Click "Add file" → "Upload files"**

### 3.3 Drag & Drop These Files:

From your downloaded Podar files, upload:

1. ✅ `podar-registration-portal.html`
2. ✅ `podar-exam-portal.html`
3. ✅ `podar-exam-questions.js`
4. ✅ `ENHANCED-SYSTEM-SPECS.md` (documentation)
5. ✅ `IMPLEMENTATION-STATUS.md` (documentation)

**How to upload:**
- Open folder with downloaded files
- Select all 5 files
- Drag them into the GitHub upload area
- Or click "choose your files" and select

### 3.4 Commit Changes
- At bottom, in commit message box, type:
  ```
  Initial upload - Podar Recruitment System
  ```
- Click **"Commit changes"** button

**Wait 5-10 seconds** - files will upload and appear in your repository!

---

## STEP 4: ENABLE GITHUB PAGES (2 minutes)

### 4.1 Go to Settings
- In your repository, click **"Settings"** tab (top menu)

### 4.2 Find Pages Section
- Scroll down left sidebar
- Click **"Pages"** (under "Code and automation")

### 4.3 Configure Pages

**Branch:**
- Click dropdown under "Branch"
- Select: **"main"**
- Leave folder as **"/ (root)"**
- Click **"Save"**

### 4.4 Wait for Deployment
- You'll see message: "Your site is ready to be published"
- Wait 1-2 minutes
- Refresh page
- You'll see: "Your site is live at https://yourname.github.io/podar-recruitment/"

**✅ YOUR WEBSITE IS NOW LIVE!**

---

## STEP 5: GET YOUR LIVE URLS (1 minute)

Your files are now accessible at these URLs:

### **Registration Portal:**
```
https://yourname.github.io/podar-recruitment/podar-registration-portal.html
```

### **Exam Portal:**
```
https://yourname.github.io/podar-recruitment/podar-exam-portal.html
```

### **Question Database:**
```
https://yourname.github.io/podar-recruitment/podar-exam-questions.js
```

**Replace `yourname` with your actual GitHub username!**

---

## STEP 6: UPDATE GOOGLE APPS SCRIPT URL (5 minutes)

Now you need to connect the system to Google Sheets.

### 6.1 Setup Google Sheets

1. **Go to Google Sheets**
   - https://sheets.google.com
   - Click "+ Blank" to create new sheet

2. **Name the Sheet**
   - Click "Untitled spreadsheet"
   - Rename: "Podar Recruitment - January 2026"

3. **Open Apps Script**
   - Click **Extensions** → **Apps Script**
   - New tab opens with script editor

4. **Delete Default Code**
   - Select all code in editor (Ctrl+A or Cmd+A)
   - Delete it

5. **Paste Podar Script**
   - Open your downloaded file: `podar-google-apps-script.gs`
   - Copy all content
   - Paste into Apps Script editor

6. **Save**
   - Click 💾 Save icon
   - Rename project: "Podar Recruitment API"

### 6.2 Deploy as Web App

1. **Deploy**
   - Click **"Deploy"** button (top right)
   - Select **"New deployment"**

2. **Configure Deployment**
   - Click gear icon ⚙️ next to "Select type"
   - Select **"Web app"**

3. **Settings:**
   - Description: `Podar Recruitment API v1`
   - Execute as: **Me** (your email)
   - Who has access: **Anyone**
   - Click **"Deploy"**

4. **Authorize**
   - Click **"Authorize access"**
   - Choose your Google account
   - Click **"Advanced"** (bottom left)
   - Click **"Go to Podar Recruitment API (unsafe)"**
   - Click **"Allow"**

5. **Copy Web App URL**
   - You'll see: "Web app URL: https://script.google.com/macros/s/..."
   - **COPY THIS ENTIRE URL** - you'll need it!
   - Click **"Done"**

### 6.3 Update HTML Files on GitHub

**Option A: Edit Directly on GitHub (Easier)**

1. **Update Registration Portal:**
   - Go back to your GitHub repository
   - Click on `podar-registration-portal.html`
   - Click pencil icon ✏️ (top right) to edit
   - Press Ctrl+F (or Cmd+F) to search
   - Search for: `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE`
   - Replace with your actual Google Script URL
   - Scroll to bottom
   - Commit message: `Updated Google Script URL`
   - Click **"Commit changes"**

2. **Update Exam Portal:**
   - Click back to repository main page
   - Click on `podar-exam-portal.html`
   - Click pencil icon ✏️ to edit
   - Search for: `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE`
   - Replace with your actual Google Script URL
   - Commit message: `Updated Google Script URL`
   - Click **"Commit changes"**

**Option B: Edit Locally & Re-upload (If Comfortable)**

1. Open downloaded HTML files on your computer
2. Search & replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE`
3. Save files
4. Go to GitHub repo → "Add file" → "Upload files"
5. Upload updated files (will overwrite old ones)
6. Commit changes

### 6.4 Wait for Update
- Wait 1-2 minutes for GitHub Pages to rebuild
- Your URLs will now have the Google Script connected!

---

## STEP 7: CREATE QR CODE (5 minutes)

### 7.1 Get Registration URL
Copy your registration URL:
```
https://yourname.github.io/podar-recruitment/podar-registration-portal.html
```

### 7.2 Generate QR Code

**Option 1: QR Code Generator (Free)**
- Go to: **https://www.qr-code-generator.com**
- Paste your registration URL
- Click "Create QR Code"
- Download as PNG
- Print it large (A4 size)

**Option 2: Google Chrome (Built-in)**
- Open your registration URL in Chrome
- Right-click anywhere on page
- Select **"Create QR Code for this page"**
- Click **"Download"**
- Print it

### 7.3 Print & Display
- Print QR code poster (A3 or A4)
- Add text above:
  ```
  SCAN TO REGISTER
  Podar International School
  Teacher Recruitment - January 2026
  ```
- Display at registration desk

---

## STEP 8: TEST EVERYTHING! (10 minutes)

### 8.1 Test Registration

1. **Open Registration URL** on phone/computer
   ```
   https://yourname.github.io/podar-recruitment/podar-registration-portal.html
   ```

2. **Fill Test Data:**
   - Name: Test Candidate
   - Email: test@example.com
   - Phone: 9876543210
   - Qualification: B.Ed
   - Position: PRT English

3. **Submit**
   - Should see token number (e.g., PISL234)
   - Instructions to write down token
   - Screenshot instructions

4. **Check Google Sheet**
   - Open your Google Sheet
   - Should see new row with all data
   - Headers should be formatted (purple)
   - Token in column B

✅ **Registration works!**

### 8.2 Test Exam

1. **Open Exam URL**
   ```
   https://yourname.github.io/podar-recruitment/podar-exam-portal.html
   ```

2. **Enter Token**
   - Use token from registration (e.g., PISL234)
   - Click "Verify & Continue"
   - Should see your name & subject

3. **Check Exam Display**
   - ✅ Should see all 40 questions on one page
   - ✅ 4 sections clearly separated
   - ✅ Timer shows 30:00
   - ✅ Questions load properly

4. **Answer Some Questions**
   - Click answers for a few questions
   - Selected options highlight green

5. **Test PDF Save**
   - Scroll to bottom
   - Click **"Save as PDF"** button
   - PDF should download with exam

6. **Test Submit**
   - Click **"Submit Examination"**
   - Confirm submission
   - Should see results page with:
     * Basic English score /10
     * Computer score /5
     * Classroom score /5
     * Subject score /20
     * Total score /40

7. **Check Google Sheet Again**
   - Refresh sheet
   - Same row should now have exam scores in columns I-M
   - Total in column M

✅ **Exam works!**

### 8.3 Test with Multiple Candidates

1. Register 3-4 test candidates
2. Note their tokens
3. Have each take exam
4. Check Google Sheet - should have multiple rows
5. All data organized properly

✅ **Multi-user works!**

---

## 🎉 CONGRATULATIONS! YOUR SYSTEM IS LIVE!

---

## 📝 SAVE THESE IMPORTANT URLS

### **For Registration Desk:**
```
QR Code URL: https://yourname.github.io/podar-recruitment/podar-registration-portal.html
```

### **For Exam Hall:**
```
Exam URL: https://yourname.github.io/podar-recruitment/podar-exam-portal.html
```

### **For Admin:**
```
GitHub Repository: https://github.com/yourname/podar-recruitment
Google Sheet: [your sheet URL]
```

---

## 🔧 HOW TO UPDATE FILES LATER

If you need to update questions or make changes:

### Method 1: Edit on GitHub (Easy)
1. Go to your repository
2. Click on file to edit
3. Click pencil icon ✏️
4. Make changes
5. Commit changes
6. Wait 1-2 min for GitHub Pages to update

### Method 2: Upload New Version
1. Edit file on your computer
2. Go to repo → "Add file" → "Upload files"
3. Upload (will overwrite)
4. Commit changes

---

## 📊 MONITORING YOUR SYSTEM

### Check Google Sheet Regularly
- See how many registered
- See how many completed exam
- Monitor scores
- Track completion rates

### Use Built-in Statistics
In Google Apps Script:
1. Open Apps Script
2. Go to: **Extensions** → **Apps Script**
3. In script editor, click function dropdown
4. Select `generateStatistics`
5. Click Run ▶️
6. Check **Execution log** (bottom)
7. See complete statistics!

---

## 🆘 TROUBLESHOOTING

### Problem: "Your site is ready to be published" but no URL
**Solution:** Wait 2-3 minutes, refresh page

### Problem: "404 - File not found" when accessing URLs
**Solution:** 
- Check filename spelling (case-sensitive!)
- Make sure files are in root folder, not subfolder

### Problem: Registration/Exam doesn't save to Google Sheet
**Solution:**
- Check Google Script URL is correct in HTML files
- Make sure Apps Script deployment has "Anyone" access
- Check Google Sheet isn't in restricted access

### Problem: QR code doesn't work
**Solution:**
- Test URL by typing it in browser first
- Make sure QR code generator used the complete URL
- Try different QR code generator

### Problem: Questions don't load on exam page
**Solution:**
- Make sure `podar-exam-questions.js` is in same folder as `podar-exam-portal.html`
- Check file uploaded correctly to GitHub
- View page source - should see questions.js loading

---

## 💡 TIPS FOR EXAM DAY

### Before Event:
- [ ] Test all URLs on multiple devices
- [ ] Test Google Sheet updates
- [ ] Print multiple QR codes (backup)
- [ ] Have registration URL written down (backup)
- [ ] Test with 5-10 people simultaneously
- [ ] Ensure good WiFi at venue

### During Event:
- [ ] Have tech support person available
- [ ] Keep Google Sheet open to monitor
- [ ] Have backup device ready
- [ ] Monitor GitHub Pages status (should stay up)

### After Exam:
- [ ] Download Google Sheet as backup
- [ ] Generate statistics report
- [ ] Archive all data

---

## 🎯 ADVANTAGES OF GITHUB PAGES

✅ **FREE** - No hosting costs  
✅ **FAST** - GitHub's servers are very fast  
✅ **RELIABLE** - 99.9% uptime  
✅ **SECURE** - HTTPS by default  
✅ **NO LIMITS** - Can handle 40+ users easily  
✅ **EASY UPDATES** - Just upload new files  
✅ **VERSION CONTROL** - Can see history of changes  
✅ **PROFESSIONAL** - Real URLs, not free subdomain spam  

---

## 📞 SUPPORT RESOURCES

### GitHub Help:
https://docs.github.com/en/pages

### GitHub Pages Status:
https://www.githubstatus.com

### If GitHub is Down (rare):
- Use backup: Netlify.com (similar process)
- Or: Vercel.com (also free)

---

## ✅ FINAL CHECKLIST

Before going live:

- [ ] GitHub account created
- [ ] Repository created & public
- [ ] All 5 files uploaded
- [ ] GitHub Pages enabled
- [ ] Google Apps Script deployed
- [ ] Google Script URL updated in HTML files
- [ ] QR code generated & printed
- [ ] Tested registration → saves to sheet
- [ ] Tested exam → saves scores to sheet
- [ ] Tested with multiple users
- [ ] Tested on phone & computer
- [ ] Tested "Save as PDF" button
- [ ] Tested "Submit" button & scores display
- [ ] WiFi tested at venue
- [ ] Backup plan ready

---

## 🎓 YOUR URLS WILL BE:

**Replace `yourname` with your actual GitHub username:**

### Registration Portal:
```
https://yourname.github.io/podar-recruitment/podar-registration-portal.html
```

### Exam Portal:
```
https://yourname.github.io/podar-recruitment/podar-exam-portal.html
```

**SAVE THESE!**

---

**You're all set! Good luck with your recruitment drive! 🎉**

If you face any issues, the files are all stored safely in your GitHub repository and can be edited anytime.
