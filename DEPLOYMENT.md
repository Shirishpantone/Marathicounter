# MarathiCounter Deployment Guide

## Progressive Web App (PWA) Deployment

### What's Been Created

Your MarathiCounter website is now a **Progressive Web App** with the following features:

✅ **Installable** - Users can install it on their devices like a native app
✅ **Offline Support** - Works offline with Service Worker caching
✅ **App-like Experience** - Full-screen mode, splash screen, app icons
✅ **Fast Loading** - Cached assets for instant loading
✅ **Push Notifications Ready** - Infrastructure for future notifications
✅ **Cross-Platform** - Works on Android, iOS, Windows, Mac, Linux

---

## PWA Features Included

### 1. Web App Manifest (`/public/manifest.json`)
- App name, icons, theme colors
- Standalone display mode
- App shortcuts for quick actions
- Optimized for mobile and desktop

### 2. Service Worker (`/public/sw.js`)
- Offline caching strategy
- Network-first approach for API calls
- Cache-first for static assets
- Automatic cache updates

### 3. App Icons (`/public/icons/`)
- Multiple sizes: 72x72 to 512x512
- Maskable icons for Android adaptive icons
- Apple touch icons for iOS

### 4. Install Prompt
- Smart prompt after 3 seconds
- Custom styling matching brand
- Dismissible by user
- Tracks installation status

---

## How to Deploy Your PWA

### Option 1: Deploy to Netlify (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial PWA commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Click "Deploy site"

3. **Custom Domain** (Optional)
   - In Netlify: Domain settings → Add custom domain
   - Update DNS records at your domain provider
   - SSL certificate is automatically generated

### Option 2: Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts**
   - Link to existing project or create new
   - Vercel auto-detects Vite configuration
   - Gets live URL instantly

### Option 3: Deploy to Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login and Initialize**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Configure**
   - Public directory: `dist`
   - Single-page app: Yes
   - Build: `npm run build`

4. **Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

---

## Testing Your PWA

### Before Deployment - Local Testing

1. **Build and preview**
   ```bash
   npm run build
   npm run preview
   ```

2. **Open in browser**: `http://localhost:4173`

3. **Test PWA features**:
   - Chrome DevTools → Application tab → Service Workers
   - Check if service worker is registered
   - Test offline mode (Network tab → Offline)

### After Deployment - Production Testing

#### On Desktop (Chrome/Edge)

1. Visit your deployed website
2. Look for install icon in address bar (⊕ or ⬇)
3. Click "Install MarathiCounter"
4. App opens in standalone window
5. Check desktop shortcut created

#### On Android

1. Visit website in Chrome
2. Tap "Add to Home Screen" prompt (or ⋮ menu → Add to Home screen)
3. App icon appears on home screen
4. Opens full-screen without browser UI
5. Works offline after first visit

#### On iOS/iPhone

1. Visit website in Safari
2. Tap Share button (⬆)
3. Tap "Add to Home Screen"
4. App icon appears on home screen
5. Opens in standalone mode

---

## Android App Deployment

### Build Android APK

All Android app files are in `/android-app/` directory. Follow these steps:

#### Step 1: Setup Android Studio

1. Download and install [Android Studio](https://developer.android.com/studio)
2. Open Android Studio
3. Create new project using files from `/android-app/`

#### Step 2: Update Website URL

In `MainActivity.kt`, update line 18:
```kotlin
private const val WEBSITE_URL = "https://YOUR-DEPLOYED-DOMAIN.com"
```

#### Step 3: Generate Signed APK

1. **Build** → **Generate Signed Bundle / APK**
2. Select **APK**
3. **Create new keystore**:
   - Key store path: Choose location
   - Password: Create strong password
   - Key alias: `marathicounter-release`
   - Validity: 25+ years
   - First and Last Name: Your name
   - Organization: Your company
4. Select **release** build variant
5. Click **Finish**

**Save your keystore file and passwords securely!**

#### Step 4: Test APK

1. Generated APK location: `app/release/app-release.apk`
2. Transfer to Android device
3. Install and test
4. Verify website loads correctly
5. Test offline functionality
6. Test camera/file upload if needed

### Publish to Google Play Store

#### Requirements

- Google Play Developer account ($25 one-time fee)
- Privacy Policy URL
- App screenshots (at least 2)
- Feature graphic (1024x500)
- High-res icon (512x512)

#### Steps

1. **Go to [Google Play Console](https://play.google.com/console)**

2. **Create new app**
   - App name: MarathiCounter
   - Language: English, Hindi, Marathi
   - App or game: App
   - Free or paid: Free

3. **Store listing**
   - **Short description**: "Professional Marathi dictionary & number converter"
   - **Full description**: Use description from `/android-app/README.md`
   - **Screenshots**: Take from actual device
   - **Feature graphic**: Create 1024x500 banner
   - **App icon**: Use `/public/icons/icon-512x512.png`
   - **Category**: Education or Tools
   - **Contact email**: Your email
   - **Privacy policy**: Your privacy policy URL

4. **App content**
   - Content rating questionnaire
   - Target age group
   - Privacy policy URL (required)

5. **Production release**
   - Upload signed APK or App Bundle
   - Release name: "1.0.0"
   - Release notes: "Initial release"
   - Review and rollout

6. **Submit for review** (takes 1-7 days)

---

## Post-Deployment Checklist

### PWA
- [ ] Service worker registered successfully
- [ ] Manifest.json accessible at `/manifest.json`
- [ ] All icon sizes loading correctly
- [ ] Install prompt appears after 3 seconds
- [ ] App installs successfully on desktop
- [ ] App installs successfully on Android
- [ ] Offline mode works correctly
- [ ] Cache updates on new deployment

### Android App
- [ ] Website loads in WebView
- [ ] Pull-to-refresh works
- [ ] Back button navigation works
- [ ] Network error page displays correctly
- [ ] File upload works (if needed)
- [ ] Camera access works (if needed)
- [ ] Downloads work correctly
- [ ] App works offline (cached content)

### SEO & Performance
- [ ] Update `WEBSITE_URL` in Android app
- [ ] Add your domain to manifest.json
- [ ] Setup Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console
- [ ] Test on [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Lighthouse PWA audit score 90+

---

## Troubleshooting

### PWA Not Installing

**Issue**: Install prompt doesn't appear
**Solution**:
- HTTPS is required (not on localhost)
- Manifest.json must be valid
- Service worker must be registered
- Check browser console for errors

**Issue**: Service worker not updating
**Solution**:
```javascript
// In browser console:
navigator.serviceWorker.getRegistrations().then(registrations => {
  registrations.forEach(registration => registration.unregister())
})
// Then hard refresh: Ctrl+Shift+R
```

### Android App Issues

**Issue**: Website not loading
**Solution**:
- Check internet permission in AndroidManifest.xml
- Verify WEBSITE_URL is correct and accessible
- Check network_security_config.xml for cleartext traffic

**Issue**: File uploads not working
**Solution**:
- Verify storage permissions in AndroidManifest.xml
- Check FileProvider configuration in file_paths.xml
- Test on actual device (not just emulator)

---

## Updates & Maintenance

### Updating the PWA

1. Make changes to your code
2. Update version in `manifest.json`
3. Update cache version in `sw.js` (line 1)
4. Build: `npm run build`
5. Deploy to hosting

Users will get updates automatically on next visit.

### Updating Android App

1. Update website content (deploys to PWA automatically)
2. If Android app code changed:
   - Increment `versionCode` and `versionName` in `build.gradle`
   - Generate new signed APK
   - Upload to Google Play Console
   - Submit update for review

---

## Monitoring & Analytics

### Add Google Analytics

Add to `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Monitor PWA Install Rate

Add event tracking in `index.html`:
```javascript
window.addEventListener('appinstalled', () => {
  gtag('event', 'pwa_installed');
});
```

---

## Support

For issues or questions:
- Check `/android-app/README.md` for detailed Android instructions
- Review browser console for PWA errors
- Test with Lighthouse in Chrome DevTools
- Check service worker status in Application tab

**Your app is now ready to be a cross-platform Progressive Web App! 🚀**
