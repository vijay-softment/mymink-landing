# Quick Deployment Steps for GoDaddy

## 🚀 Step-by-Step Instructions

### Step 1: Build Your Site

Run this command in your terminal:

```bash
npm run build
```

This will:
- Create an `out` folder with all your static files
- Generate HTML, CSS, and JavaScript files
- Optimize everything for production

### Step 2: Locate the Build Folder

After building, you'll find a folder called `out` in your project directory:

```
landing/
  ├── out/          ← This is your build folder!
  │   ├── index.html
  │   ├── _next/
  │   ├── images/
  │   └── ...
  └── ...
```

### Step 3: Upload to GoDaddy

#### Option A: Using GoDaddy File Manager (Easiest)

1. **Login to GoDaddy** → Go to your hosting dashboard
2. **Open File Manager** (or cPanel File Manager)
3. **Navigate to `public_html`** folder (this is your website root)
4. **Delete all existing files** (or backup first!)
5. **Upload all files from the `out` folder** to `public_html`
   - Select all files in `out` folder
   - Upload them to `public_html`
   - Make sure `index.html` is in the root of `public_html`

#### Option B: Using FTP/SFTP

1. **Get FTP credentials** from GoDaddy (usually in cPanel)
2. **Connect using FTP client** (FileZilla, Cyberduck, etc.)
3. **Navigate to `public_html`** folder
4. **Upload all contents** from the `out` folder

### Step 4: Verify Deployment

1. Visit your domain (e.g., `https://mymink.com.au`)
2. Check that all pages load correctly
3. Test navigation between pages
4. Verify images load properly

## 📁 What Gets Uploaded?

Upload **everything inside** the `out` folder:

```
out/
├── index.html          ← Home page
├── download.html       ← Download page
├── privacy.html       ← Privacy page
├── _next/             ← Next.js assets (CSS, JS)
│   ├── static/
│   └── ...
├── images/            ← Your images
│   ├── icons.png
│   ├── main.png
│   └── ...
├── robots.txt
├── sitemap.xml
└── ... (all other files)
```

## ⚠️ Important Notes

1. **Environment Variables**: Make sure to set `NEXT_PUBLIC_*` variables before building
   - They get embedded in the JavaScript during build
   - Update `.env.local` before running `npm run build`

2. **Plausible Analytics**: 
   - Make sure `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` and `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_ID` are set
   - Build will include these in the code

3. **File Permissions**: 
   - Files should be readable (644)
   - Folders should be executable (755)

4. **.htaccess** (if needed):
   - GoDaddy may need a `.htaccess` file for proper routing
   - Next.js static export should handle this automatically

## 🔄 Updating Your Site

When you make changes:

1. **Make your changes** to the code
2. **Run `npm run build`** again
3. **Upload the new `out` folder contents** to GoDaddy
4. **Replace old files** with new ones

## ✅ Checklist

Before deploying:
- [ ] Run `npm run build` successfully
- [ ] Check that `out` folder was created
- [ ] Verify `out/index.html` exists
- [ ] Set all `NEXT_PUBLIC_*` environment variables
- [ ] Test locally if possible

After deploying:
- [ ] Visit your domain
- [ ] Check all pages load
- [ ] Test navigation
- [ ] Verify images display
- [ ] Check analytics (Plausible) is working
- [ ] Test download buttons

## 🆘 Troubleshooting

### 404 Errors
- Make sure you uploaded ALL files from `out` folder
- Check that `index.html` is in the root of `public_html`
- Verify file permissions

### Images Not Loading
- Check that `images` folder was uploaded
- Verify image paths in browser DevTools
- Make sure images are in the correct location

### Analytics Not Working
- Check that environment variables were set before building
- Verify Plausible script is loading (check browser console)
- Make sure domain is verified in Plausible

## 📞 Need Help?

If you encounter issues:
1. Check browser console for errors
2. Verify all files were uploaded
3. Check GoDaddy file permissions
4. Review the build output for warnings
